#!/bin/bash
clear

echo "(1) verify no other node is running"
ps -ef | grep node

# No verifiquem: el node si troba el PORT ocupat dona el error EADDRINUSE
# https://stackoverflow.com/questions/4075287/# node-express-eaddrinuse-address-already-in-use-kill-server

echo "(2) start web server" in background
/usr/bin/node   /home/sebas/nodes/wsm/NODE_ENV=production node wsm.js     &

echo "(3) verify our node is running"
ps -ef | grep node

echo "(4) start tail"
tail  -f  /home/enric/logs/start_wsm.log   &

exit 0
