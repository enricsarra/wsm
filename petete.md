Llibre petete wsm:
-----------------

- Es troba a : /home/sebas/nodes/wsm

- Copiar del mac al rasp:
enricsarradell$ scp -P 22 -r /Users/enricsarradell/Desktop/wsm sebas@192.168.1.99:/home/sebas/nodes

- El shell per arrancar el wsm.js está a :  /home/enric/sh-enric/wsm.sh

- Amb el usuari enric s’ha definit que arranqui amb un reboot: 
	Teclejar amb usuari enric: crontab -e
	………
	………
	# -----------   Arrancar servidor wsm del sebas
    @reboot /home/enric/sh-enric/wsm.sh

- El log del wsm está a : /home/enric/logs/start_wsm.js
	- Si fem “tail -f start_wsm.js

- Per afegir una ruta:
	- Modificar wsm.js per afegir al objecte handle:
		- handle[“/accio”] = requestHandlers.funcioaccio

	- Modificar requestHandlers.js per afegir la funció: funcioaccio   i exportarla.
