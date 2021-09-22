Trouble Shooting
================

------------------------------------------------------------------------

### 1.) VScode unable to save files inside my WSL2 home folder

#### soln:

    sudo chown -R bryan ./

------------------------------------------------------------------------

### 2.)

> npm ERR! code EAI\_AGAIN npm ERR! syscall getaddrinfo npm ERR! errno EAI\_AGAIN npm ERR! request to https://registry.npmjs.org/npm-check-updates failed, reason: getaddrinfo EAI\_AGAIN registry.npmjs.org

    npm config rm proxy 
    npm config rm https-proxy --tried removing npm proxy 

[ERR EAI AGAIN](https://stackoverflow.com/questions/63010779/npm-err-code-eai-again-error-when-trying-to-install-express)
-------------------------------------------------------------------------------------------------------------------------
