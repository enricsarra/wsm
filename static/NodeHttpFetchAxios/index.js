/*
  Peticions a node per http, fetch i axios
*/


addEventListener('load', inici);

function inici() {
    const resultats = document.querySelector("#resultats");
    const subtitul = document.querySelector("#subtitul");
    const btn1 = document.querySelector("#btn1");
    const btn2 = document.querySelector("#btn2");
    const btn3 = document.querySelector("#btn3");
    const btn4 = document.querySelector("#btn4");

    btn1.addEventListener("click", async() => {

        subtitul.innerText = `Client:Petició fetch & async - Server: http.get convertit amb 'promise' i serveix el resultat`;

        const url = '/nodeHttp';
        const resultats = document.querySelector("#resultats");

        try {
            const responseServer = await fetch(url);

            if (responseServer.status !== 200) throw new Error(responseServer.status);
            let body = await responseServer.text();
            resultats.innerHTML = '';
            resultats.innerHTML = body;

        } catch (error) {
            console.error("Problemes al importar per 'http.get'", error);
        }

    });


    btn2.addEventListener("click", async() => {
        subtitul.innerText = `Client:Petició fetch & async - Server: petició fetch i serveix el resultat`;

        const url = '/nodeFetch';
        const resultats = document.querySelector("#resultats");

        try {
            const responseServer = await fetch(url);

            if (responseServer.status !== 200) throw new Error(responseServer.status);
            let body = await responseServer.text();
            resultats.innerHTML = '';
            resultats.innerHTML = body;

        } catch (error) {
            console.error("Problemas al importar per 'fetch'", error);
        }

    });

    btn3.addEventListener("click", async() => {
        subtitul.innerText = `Client:Petició fetch & async - Server: petició axios i serveix el resultat`;
        const url = '/nodeAxios';
        const resultats = document.querySelector("#resultats");

        try {
            const responseServer = await fetch(url);

            if (responseServer.status !== 200) throw new Error(responseServer.status);
            let body = await responseServer.text();
            resultats.innerHTML = '';
            resultats.innerHTML = body;

        } catch (error) {
            console.error("Problemas en Async", error);
        }

    });

    btn4.addEventListener("click", async() => {
        subtitul.innerText = `Client:Petició fetch & async - Server: petició axios i serveix les series de Batman i Superman classificades per data estrena`;
        const url = '/nodeBatmanSuperman';
        const resultats = document.querySelector("#resultats");

        try {
            const responseServer = await fetch(url);

            if (responseServer.status !== 200) throw new Error(responseServer.status);
            let body = await responseServer.text();
            resultats.innerHTML = '';
            resultats.innerHTML = body;

        } catch (error) {
            console.error("Problemas en Async", error);
        }

    });
}