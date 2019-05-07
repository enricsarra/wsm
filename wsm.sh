#!/bin/bash
# Arrancar servidor node wsm

clear

echo "(1) verify no other node is running"
ps -ef | grep node

echo "(2) definir entorn per el console."
# definir una trassa quan engegi el script

# set log file name
myLog=/home/enric/logs/start_wsm.log


# set output string
szTxt="([`date -R`]) +++++ engego WSM.JS +++++ log($myLog)+++++"

# write to  /var/log/syslog
logger -i -p user.info $szTxt


echo "(3) start web server" in background
# quan engegues un SHELL des un entorn "desconegut",
# s´ha de posar el PATH sencer.
# Per obtindre el path de node,  ---->  which node 

# hem de fer cd /home/sebas/nodes/wsm perque sino casqua quan llegeis les pagines de /static
cd /home/sebas/nodes/wsm
NODE_ENV=production node wsm.js               >>   $myLog        &
# start node APP and trace events
# el carácter & al final, posa la comanda en background- es del sistema
#/usr/bin/node        /home/sebas/nodes/wsm/NODE_ENV=production node wsm.js      >>  $myLog    &

echo "(4) verify our node is running"
ps -ef | grep node


echo "(5) start tail"
# tail  -f  /home/enric/logs/start_wsm.log   &

exit 0
