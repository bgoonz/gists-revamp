#!/bin/sh

DOMAIN=$1;
echo -n | openssl s_client -connect $DOMAIN:443 | sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p' > /tmp/$DOMAIN.cert && open /tmp/$DOMAIN.cert

# Notes:
# 1. After you ran this script, simple refresh your stubborn browser. i.e. Chrome.
# 2. When you are done, don't forget to delete /tmp/$DOMAIN.cert file.
