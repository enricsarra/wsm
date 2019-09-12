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
//  2.1.a - Lletra 'sansita' 3D a la pagina principal '/static/index/index.htm'   
//  2.1.b - A Batman,Superman,Girls visualitzem 3 elements
//  2.1.c - Gestió navegació: 'inici' i 'retornar' utilitzan 'sessionStorage',
//          perque la page principal '/static/index/index.htm', es única y no
//          son 4. Es gestiona per 'position absolute' i 'displayed'.
//  2.1.d - Css a  Tv Series - Fitxers interns - Usuaris externs.  
//              - Menú navegació.
//              - Cuadrats responsive
//              - Footer animat: hi ha els links que he adaptat.
//  2.1.e - Modificació posicionament del footer
//          Font-size lletra etiquetes botons   
//  2.1.f - Canviar textes.
//          opacity:0 a segons quins textes del buttons circulars
//          perque les seves imatges ja ho diuen tot. 
//  2.1.g - Canviar css pagina1 i pagina2. 
//          Simplificar diseny pagina principal de pagina efectes 
//          especials en el que respecta als iconos. 
//  2.1.h - Modificar textes animats pagina1 i pagina1   
//  2.1.i - Incloure el web-component "wsm-menu-overlay" a "static/pagina1/pagina1.html" 
//          El css des components es troba a "static/wsm-component/main.js".
//          Aquest fitxer es el que monta el "Webpack" perque no hi hagi errors de rutes acces.
//          Es el aspecte negatiu. El servidor wsm no es tan intel.ligent.
//  2.1.j - Modificar /static/NodeReadFiles per definir estils amb javascript 
//  2.1.k - Modificar el css /static/pagina1 per que al apartat ABOUT igualar
//          els iconos independentment de la quantitat de la descripció.
//          #about article.flex-item { display: flex }
//          #about .description {  flex-grow: 1 } Creix tot el que pot
//  2.1.l - Modificar 'function llistardirectori' de 'requestHandlers.js'
//          Abans 'let body' tenia definit un html complert (amb head, etc).
//          Funcionaba bé, perque era el navegador el que no carreba el head perque no calía.
//          S´ha modificat 'let body' per a que retorni solament el resultat del llistat.
//          Això es així perque retorna el resultat a una petició 'fetch'.
//  2.1.m - Afegir la funció "htmDinamic" a MyFramework.js.
//          A MyFramework.js es pot veure com s'ha d'utilitzar.
//  2.1.n - Afegir la carpeta wsm-component-fonts. El fitcher wsm-component-fonts/dist/main.js es copía a wsm-component/main.js que es la ruta que crida el client.
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