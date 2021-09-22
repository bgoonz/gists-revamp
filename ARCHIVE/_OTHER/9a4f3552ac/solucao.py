import platform
import subprocess


def carregar_processo(cmd):
    if platform.system() == "Windows":
        DETACHED_PROCESS = 0x00000008
        CREATE_NEW_PROCESS_GROUP = 0x00000200
        return subprocess.Popen(
            cmd, creationflags=DETACHED_PROCESS | CREATE_NEW_PROCESS_GROUP
        ).pid
    else:
        return subprocess.Popen(cmd, stdout=subprocess.PIPE, shell=True).pid
