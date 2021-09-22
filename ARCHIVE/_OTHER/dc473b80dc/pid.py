import os
import platform
import ctypes


def pid_ativo(pid):
    if platform.system() == "Windows":
        return _pid_ativo_windows(pid)
    else:
        return _pid_ativo_unix(pid)


def _pid_ativo_unix(pid):
    try:
        os.kill(pid, 0)
    except OSError:
        return False
    return True


def _pid_ativo_windows(pid):
    import ctypes.wintypes

    _AINDA_ATIVO = 259

    kernel32 = ctypes.windll.kernel32
    handle = kernel32.OpenProcess(1, 0, pid)
    if handle == 0:
        return False

    exit_code = ctypes.wintypes.DWORD()
    ativo = kernel32.GetExitCodeProcess(handle, ctypes.byref(exit_code)) == 0
    kernel32.CloseHandle(handle)

    return ativo or exit_code.value == _AINDA_ATIVO
