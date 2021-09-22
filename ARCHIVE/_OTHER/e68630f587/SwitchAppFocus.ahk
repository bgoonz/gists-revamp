#SingleInstance force
#WinActivateForce
SetTitleMatchMode RegEx
DetectHiddenWindows, On

apps := []
currentApp := 0
SetupMenu()

; win + ctrl + shift + >
#^+>::
	CycleForward()
	return

; win + ctrl + shift + <
#^+<::
	CycleBackward()
	return

; win + ctrl + shift + ?
#^+?::
	RecordCurrentActiveApp()
	return


; ***************************************

SetupMenu() {
	Menu, Tray, Tip, Switch App Focus

	Menu, Tray, UseErrorLevel
	Menu, Tray, NoMainWindow

	; remove all standard menu items
	Menu, Tray, NoStandard

	; add a cycle-apps-forward menu item (initially disabled)
	Menu, Tray, Add, Cycle Apps, CycleForward
	Menu, Tray, Disable, Cycle Apps
	; add a reset-apps-list menu item
	Menu, Tray, Add, Reset Apps List, ResetAppsList
	; add a quit menu item
	Menu, Tray, Add, Quit, Quit
	; set the cycle-apps menu item to be the "default" menu item
	Menu, Tray, Default, Cycle Apps
	; set single clicks on the tray icon to activate the default menu item
	Menu, Tray, Click, 1

	SetupAppsList()
}

SetupAppsList() {
	global apps
	global currentApp

	apps := []
	currentApp := 0

	Menu, Tray, Disable, Cycle Apps

	; reset apps menu
	try Menu, AppsMenu, DeleteAll
	try Menu, Tray, Delete, Apps
	Menu, AppsMenu, Add, --, Quit
	Menu, Tray, Insert, Cycle Apps, Apps, :AppsMenu
	Menu, AppsMenu, DeleteAll
	Menu, Tray, Disable, Apps
}

ResetAppsList() {
	SetupAppsList()
	ShowToolTip("Recorded apps reset.")
}

RecordCurrentActiveApp() {
	global apps

	WinGetActiveTitle, winTitle
	if (winTitle = "") {
		ShowToolTip("No app focused!!!")
		return
	}

	; construct pattern for app name
	RegExMatch(winTitle,"O)(?:.+- )?(.+)$",winTitleParts)
	appName := winTitleParts.Value(1)
	StringLower, appNameLower, appName
	appNamePattern := % ("i)" appNameLower "$")

	; ensure this app isn't already in the list
	Loop, % (apps.Length())
	{
		if (appNamePattern = apps[A_Index].pattern) {
			ShowToolTip("App '" appName "' already recorded.")
			return
		}
	}

	apps.Push({ "label": appName, "pattern": appNamePattern })

	Menu, Tray, Enable, Cycle Apps
	Menu, Tray, Enable, Apps
	Menu, AppsMenu, Add, %appName%, FocusApp

	ShowToolTip("App '" appName "' recorded.")
}

FocusApp(appLabel,selectedApp) {
	global apps
	global currentApp

	currentApp := selectedApp
	whichWin := apps[currentApp].pattern

	if (!WinActive(whichWin)) {
		WinActivate, %whichWin%
	}
}

CycleForward() {
	global apps

	if (apps.Length() > 0) {
		CycleApps(1)
	}
}

CycleBackward() {
	global apps

	if (apps.Length() > 0) {
		CycleApps(-1)
	}
}

CycleApps(cycleDir) {
	global apps
	global currentApp

	numApps := apps.Length()
	if (numApps = 0) {
		return
	}

	nextIdx := currentApp

	; find next/previous app (that's not currently active) to activate
	Loop, %numApps%
	{
		nextIdx := Mod((nextIdx + cycleDir + numApps - 1),numApps) + 1
		if (!WinActive(apps[nextIdx].pattern)) {
			FocusApp(apps[nextIdx].label,nextIdx)
			return
		}
	}
}

ShowToolTip(msg) {
	; cancel previous timer in case it's still running
	try SetTimer,, Off
	HideToolTip()

	ToolTip, %msg%
	; hide the tooltip (once) 1000ms from now
	SetTimer, HideToolTip, -1000
}

HideToolTip() {
	ToolTip
}

ReloadApp() {
	Reload
}

Quit() {
	ExitApp
}