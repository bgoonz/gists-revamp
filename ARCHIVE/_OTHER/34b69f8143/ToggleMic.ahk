#include MicDevice.ahk

#SingleInstance force

; **************************************************
; You need to configure the `mics` array below.
; open your windows control panel and find the
; Sound "Input" devices list. Whichever of those
; that you want to control with the app, you need
; to add entries in the array below, as shown with
; the "{{ mic name 1 }}" example strings, where your
; text is *IDENTICAL* to what shows in your control
; panel (not with the leading/trailing spaces or
; the "{{ }}"). Leave the `deviceID` as -1, since
; that value will be auto-detected by the app. Leave
; the `enabled` as 0, as that will be auto-detected.
; Set the `label` to some friendly label that you
; you want to show in the taskbar popup menu.
;
; For example, my first entry says:
;    { "name": "Blue Yeti (Yeti Nano)", "label": "Yeti", "deviceID": -1, "enabled": 0 }
;
; You can have as many entries as you want want,
; and you can list them in any order you want. If
; you only specify one entry, then the app will still
; work, but you won't be able to switch devices.
;
; Note: AHK syntax requires this array/object list
; to be all on one line, which sucks for readability.
; **************************************************

mics := [ { "name": " {{ mic name 1 }} ", "label": "My Favorite Mic", "deviceID": -1, "enabled": 0 }, { "name": " {{ mic name 2 }} ", "label": "My Backup Mic", "deviceID": -1, "enabled": 0 } ]

currentMic := -1

InitMicDeviceIDs()
SetupMenu()
UpdateTrayIcon()


; my chosen hotkey is win+shift+m
#+m::
	ToggleMic(mics[currentMic].deviceID)
	ShowMuteTooltip(mics[currentMic].deviceID)
	return

; cycle through mic inputs
#+<::
	CycleMic(-1)
	return

#+>::
	CycleMic(1)
	return


; ***************************************

InitMicDeviceIDs() {
	global mics
	global currentMic

	Loop % (mics.Length())
	{
		deviceID := GetMicDeviceID(mics[A_Index].name)
		if (deviceID != -1) {
			mics[A_Index].deviceID := deviceID

			; check if mic is actually able to be selected
			mics[A_Index].enabled := SwitchMicDevice(mics[A_Index].name)

			; default mic to first enabled one found
			if (mics[A_Index].enabled and currentMic == -1) {
				currentMic := A_Index
			}
		}
	}

	; no enabled mics were found?
	if (currentMic == -1) {
		ErrorAndQuit("No microphones found")
	}
	else {
		; switch back to the default current mic
		SwitchMicDevice(mics[currentMic].name)
	}
}

SetupMenu() {
	Menu, Tray, UseErrorLevel
	Menu, Tray, NoMainWindow

	; remove all standard menu items
	Menu, Tray, NoStandard
	; add the toggle-mute menu item
	Menu, Tray, Add, Mute Mic, ToggleCurrentMic

	SetupMicrophonesSubMenu()
	UpdateMicrophonesSubMenu()

	; add a refresh/reload menu item
	Menu, Tray, Add, Refresh Mic Status, ReloadApp
	; add a quit menu item
	Menu, Tray, Add, Quit, Quit
	; set the toggle-mute menu item to be the "default" menu item
	Menu, Tray, Default, Mute Mic
	; set single clicks on the tray icon to activate the default menu item
	Menu, Tray, Click, 1
}

SetupMicrophonesSubMenu() {
	global mics

	Loop, % (mics.Length())
	{
		Menu, Microphones, Add, % (mics[A_Index].label), SelectMic
	}

	Menu, Tray, Add, Microphones, :Microphones
}

UpdateMicrophonesSubMenu() {
	global mics
	global currentMic

	Loop, % (mics.Length())
	{
		Menu, Microphones, % (A_Index = currentMic ? "Check" : "Uncheck"), % (mics[A_Index].label)
		Menu, Microphones, % (mics[A_Index].enabled ? "Enable" : "Disable"), % (mics[A_Index].label)
	}
}

SelectMic(micLabel,selectedMic) {
	global mics
	global currentMic

	micSwitched := SwitchMicDevice(mics[selectedMic].name)

	if (!micSwitched) {
		msgBox 16, Error!, Mic input switch failed
		return 0
	}

	; switch the mic
	if (selectedMic != currentMic) {
		currentMic := selectedMic
		UpdateMicrophonesSubMenu()
		UpdateTrayIcon()
	}

	return 1
}

ToggleCurrentMic() {
	global mics
	global currentMic

	ToggleMic(mics[currentMic].deviceID)
}

ToggleMic(deviceID) {
	ToggleMuteStatus(deviceID)
	UpdateTrayIcon()
}

CycleMic(cycleDir) {
	global mics
	global currentMic

	numMics := mics.Length()
	nextIdx := currentMic

	; find next/previous enabled mic
	Loop, % (numMics)
	{
		nextIdx := Mod((nextIdx + cycleDir + numMics - 1),numMics) + 1
		if (mics[nextIdx].enabled) {
			break
		}
	}

	micSwitched := SelectMic(mics[currentMic].label,nextIdx)
	if (micSwitched) {
		ShowMicTooltip(nextIdx)
	}
}

UpdateTrayIcon() {
	global mics
	global currentMic

	label := mics[currentMic].label
	deviceID := mics[currentMic].deviceID
	isMuted := checkMuteStatus(deviceID)

	; update tray icon's tooltip text
	Menu, Tray, Tip, % (label ": " (isMuted ? "Muted" : "Unmuted"))

	; toggle tray icon
	Menu, Tray, Icon, ToggleMic.icl, % (isMuted ? 1 : 2), 1

	; toggle menu item label text
	prevLabel := % (isMuted ? "Mute Mic" : "Unmute Mic")
	newLabel := % (isMuted ? "Unmute Mic" : "Mute Mic")
	Menu, Tray, Rename, %prevLabel%, %newLabel%
}

ShowMuteTooltip(deviceID) {
	isFullScreen := CheckFullScreenActive()
	isMuted := checkMuteStatus(deviceID)

	; only show tooltip while in full-screen and when unmuting
	if (isFullScreen and !isMuted) {
		ToolTip, Mic Unmuted!
		; hide the tooltip (once) 250ms from now
		SetTimer, HideToolTip, -250
	}
	else {
		; cancel previous timer in case it's still running
		SetTimer,, Off
		HideToolTip()
	}
}

ShowMicTooltip(whichMic) {
	global mics

	isMuted := checkMuteStatus(mics[whichMic].deviceID)

	; cancel previous timer in case it's still running
	SetTimer,, Off
	HideToolTip()

	ToolTip, % (mics[whichMic].label ": " (isMuted ? "Muted" : "Unmuted"))

	; hide the tooltip (once) 750ms from now
	SetTimer, HideToolTip, -750
}

HideToolTip() {
	ToolTip
}

ToggleMuteStatus(deviceID) {
	SoundSet, +1,, MUTE, %deviceID%
}

CheckMuteStatus(deviceID) {
	; pull out current mute state ("On" or "Off")
	SoundGet, micMuteState,, MUTE, %deviceID%
	return (micMuteState = "On")
}

; Adapted from: https://autohotkey.com/board/topic/32659-how-to-detect-if-ingame-or-windows/://autohotkey.com/board/topic/32659-how-to-detect-if-ingame-or-windows/page-2?&#entry208939
CheckFullScreenActive() {
	wingetpos,,,w,h,A
	wwwh=%w%%h%
	swsh=%a_screenwidth%%a_screenheight%
	WinGet, Style, Style, A
	if !(Style & 0xC00000) {
		if(wwwh = swsh) {
			return true
		}
	}
	return false
}

ErrorAndQuit(errMsg) {
	msgBox 16, Error!, %errMsg%
	Quit()
}

ReloadApp() {
	Reload
}

Quit() {
	ExitApp
}