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


    btn1.addEventListener("click", async() => {

        subtitul.innerText = `Client:Petició fetch & async - Server: fs.readfile convertit amb 'promise' i serveix el fitxer .html`;

        const url = '/nodeReadHtml';
        const resultats = document.querySelector("#resultats");

        try {
            const responseServer = await fetch(url);

            if (responseServer.status !== 200) throw new Error(responseServer.status);
            let body = await responseServer.text();
            resultats.innerHTML = body;

        } catch (error) {
            console.error("Problemas en Async", error);
        }

    });


    btn2.addEventListener("click", async() => {
        subtitul.innerText = `Client:Petició fetch & async - Server: fs.readfile convertit amb 'promise' i serveix el fitxer .txt`;

        const url = '/nodeReadTexte';
        const resultats = document.querySelector("#resultats");

        try {
            const responseServer = await fetch(url);

            if (responseServer.status !== 200) throw new Error(responseServer.status);
            let body = await responseServer.text();
            console.log('body es : ', body);

            resultats.innerHTML = body;

        } catch (error) {
            console.error("Problemas en Async", error);
        }
    });

    btn3.addEventListener("click", async() => {
        subtitul.innerText = `Client:Petició fetch & async - Server: Retorna el html i serveix la imatge /partial/prototype.jpg.`;

        const url = '/nodeReadImg';
        const resultats = document.querySelector("#resultats");

        try {
            const responseServer = await fetch(url);

            if (responseServer.status !== 200) throw new Error(responseServer.status);
            let body = await responseServer.text();
            resultats.innerHTML = body;

        } catch (error) {
            console.error("Problemas en Async", error);
        }

    });
}