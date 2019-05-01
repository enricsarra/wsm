// Arrancar wsm

// versions :
//  1.1.a - Reestructurem wsm amb 4 fitxers:
//          - 'wsm.j's: arrancar wsm. Definir el objecte handle amb les
//            funcions a executar segons la url y cridar al modul startServer
//            del server.js   
//          - 'router.js': moduil que decideix quina function executar 
//            segons el path teclejar per el usuari
//          - 'requestHandlers.js': modul amb les funcions a executar  
//          - 'server.js': modul que arranca el servidor i crida a router
//          - 'MyFramework.js': modul que crea el objecte myFramework amb utilitats
//             i que serveix també per apendre a estructurar i reutilitzar codi.
//          - Afegir a wsm.js el 'terminator' de 'MyFramework.js' per monitoritzar 
//            quan es cancel.la el proces.
//  1.1.b - server.js: posem el port a ".env" - npm install dotenv --save
//  1.1.c - server.js: posem timestamp en el missatge de engegada
//  1.1.d - server.js: importem modul 'MyDate' del 'MyFramework' per posar el timestamp
//           i esborrar les funcions yyyymmdd i hhmmss de Date()
//  1.1.e - server.js: modifiquem el timestamp per utilitzar MyDate
//  1.1.f - server.js: eliminem modul Dotenv i recuperem port del MyFramework
//  1.1.g - modul 'staticPages' a 'requestHandlers.js' per tractar '.html' estatiques.          
//  1.1.h - '/static': posem totes les pagines html dintre aquest directori. 
//          'router.js': opció per defecte = /static/index.html i decideix 
//           quin modul s´ha de executar.
//  1.1.i - Crear /static/efectesespecials/index.html  per 
//          provar que el modul 'staticPages'de 'requestHandlers.js'
//          funcioni amb un web una mica més complerta que carregui imatges,css i javascript.    
//  1.1.j - Crear '/static/AjaxFetchAsync/index.html' per provar peticions ajax desde el client.
//          '/static/AjaxFetchAsync/index.js'
//              - btn1: crida a 'url = "http://api.tvmaze.com/search/shows?q=batman";'
//                amb 'XMLHttpRequest()'
//              - btn2: crida a 'url = "http://api.tvmaze.com/search/shows?q=batman";'
//                amb promeses 'fetch'
//              - btn: crida a 'url = "http://api.tvmaze.com/search/shows?q=batman";'
//                amb promeses 'fetch' utilitzant async / await
//              - El client ho fa tot. No intervé 'node'
//  1.1.k - Crear '/static/NodeReadFiles/index.html' per fer peticions de fitxers de /partial
//          '/static/NodeReadFiles/index.js'
//          - Node monta la pagina i la serveix al client.
//          - btn1: crida a url = '/nodeReadHtml' per llegir un .html del directori partial
//          - btn2: crida a url = '/nodeReadTexte' per llegir un .text del directori partial
//          - btn3: crida a url = '/nodeReadImg' per montar el html per una imatge
//  1.1.l - Crear '/static/NodeHttpFetchAxios/index.html' per fer peticions a un servidor
//          que serveix dades.
//          '/static/NodeHttpFetchAxios/index.js'
//          - Node monta la pagina i la serveix al client.
//          - btn1: crida a url = 'nodeHttp'. Llegim una url de usuaris amb el modul 'http'
//          - btn2: crida a url = '/nodeFetch'. Llegim una url de usuaris amb el modul 'node-fetch'
//          - btn3: crida a url = '/nodeAxios'. Llegim una url de usuaris amb el modul 'axios'
//          - btn: crida a url = '/nodeBatmanSuperman'. Llegim una url de Batman i Superman. 
//  1.1.m - Crear '/static/CalaixDeSastre/index.html' per fer peticions diverses.
//          '/static/CalaixDeSastre/index.js'
//          - btn1: crida a url = '/formulari1' per teclejar texte 
//                  crida a url = '/uploadformulari1' per visualitzar el texte teclejat  
//          - btn2: crida a url = /llistardirectori' per visualitzar els fitxers del directori wsm
//  1.1.o - Modificar '/static/index/index.html' per complicarla a nivell de css i practicar
//          amb 'position'.
//  2.0.0 - Primera fase complerta 
//          


const terminator = require('./MyFramework').terminator;
const server = require("./server");
const router = require("./router");
const requestHandlers = require("./requestHandlers");

// accions a fer si es cancela el process.
terminator();

// Montem objecte handle. Queda pendent importar 'handle' i no 
// definil aquí... Pot ser que no valqui la pena perque el proxim wsm
// será amb 'express' i aquest wsm es un node a 'pel'.
const handle = {}
handle['/'] = requestHandlers.staticPages;
handle['/static'] = requestHandlers.staticPages;
handle['/partial'] = requestHandlers.partialPages;

handle['/nodeReadHtml'] = requestHandlers.nodeReadHtml;
handle['/nodeReadTexte'] = requestHandlers.nodeReadTexte;
handle['/nodeReadImg'] = requestHandlers.nodeReadImg;

handle['/nodeHttp'] = requestHandlers.nodeHttp;
handle['/nodeFetch'] = requestHandlers.nodeFetch;
handle['/nodeAxios'] = requestHandlers.nodeAxios;
handle['/nodeBatmanSuperman'] = requestHandlers.nodeBatmanSuperman;

handle['/formulari1'] = requestHandlers.formulari1;
handle['/uploadformulari1'] = requestHandlers.uploadformulari1;
handle['/llistardirectori'] = requestHandlers.llistardirectori;

// injectar la funcio "router.route" i el objecte "handle"
server.startServer(router.route, handle);