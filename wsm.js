// Arrancar wsm

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