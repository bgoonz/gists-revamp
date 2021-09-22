#include VA.ahk

SwitchMicDevice(micName) {
    return VA_SetDefaultEndpoint(micName,1)
}

GetMicDeviceID(micName) {
    Loop
    {
        deviceIDPtr := GetMicDevice(A_Index)
        if (deviceIDPtr = 0) {
            return -1
        }

        deviceName:= VA_GetDeviceName(deviceIDPtr)
        ObjRelease(devideIDPtr)

        if (deviceName = micName) {
            return A_Index
        }
    }

    return -1
}

; adapted from: https://autohotkey.com/board/topic/21984-vista-audio-control-functions/
; REFERENCE: https://www.autohotkey.com/boards/viewtopic.php?style=1&t=70346

GetMicDevice(device_desc="playback")
{
    static CLSID_MMDeviceEnumerator := "{BCDE0395-E52F-467C-8E3D-C4579291692E}"
        , IID_IMMDeviceEnumerator := "{A95664D2-9614-4F35-A746-DE8DB63617E6}"
    if !(deviceEnumerator := ComObjCreate(CLSID_MMDeviceEnumerator, IID_IMMDeviceEnumerator))
        return 0

    device := 0

    if VA_IMMDeviceEnumerator_GetDevice(deviceEnumerator, device_desc, device) = 0
        goto GetMicDevice_Return

    if device_desc is integer
    {
        m2 := device_desc
        if m2 >= 4096 ; Probably a device pointer, passed here indirectly via VA_GetAudioMeter or such.
        {
            ObjAddRef(device := m2)
            goto GetMicDevice_Return
        }
    }
    else
        RegExMatch(device_desc, "(.*?)\s*(?::(\d+))?$", m)

    if m1 in playback,p
        m1 := "", flow := 0 ; eRender
    else if m1 in capture,c
        m1 := "", flow := 1 ; eCapture
    else if (m1 . m2) = ""  ; no name or number specified
        m1 := "", flow := 0 ; eRender (default)
    else
        flow := 2 ; eAll

    if (m1 . m2) = ""   ; no name or number (maybe "playback" or "capture")
    {
        VA_IMMDeviceEnumerator_GetDefaultAudioEndpoint(deviceEnumerator, flow, 0, device)
        goto GetMicDevice_Return
    }

    VA_IMMDeviceEnumerator_EnumAudioEndpoints(deviceEnumerator, 2, 9, devices)

    if m1 =
    {
        VA_IMMDeviceCollection_Item(devices, m2-1, device)
        goto GetMicDevice_Return
    }

    VA_IMMDeviceCollection_GetCount(devices, count)
    index := 0
    Loop % count
        if VA_IMMDeviceCollection_Item(devices, A_Index-1, device) = 0
            if InStr(VA_GetDeviceName(device), m1) && (m2 = "" || ++index = m2)
                goto GetMicDevice_Return
            else
                ObjRelease(device), device:=0

GetMicDevice_Return:
    ObjRelease(deviceEnumerator)
    if devices
        ObjRelease(devices)

    return device ; may be 0
}