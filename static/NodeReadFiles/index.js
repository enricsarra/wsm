/*
  Peticions a node per http, fetch i axios
*/


addEventListener('load', inici);

function inici() {

    const resultats = document.querySelector("#resultats");
    const subtitul = document.querySelector("#subtitul");
    const inici = document.querySelector("#inici");
    const btn1 = document.querySelector("#btn1");
    const btn2 = document.querySelector("#btn2");
    const btn3 = document.querySelector("#btn3");

    // Gestió 'inici'. Eliminar el index de sessionStorage
    inici.addEventListener("click", () => {

        // quan fan click 'inici', eliminem de sessionStorage
        // per anar a la pagina principal

        let indexSessionStorage = sessionStorage.getItem('indexSessionStorage');
        if (!!indexSessionStorage) {
            sessionStorage.removeItem(sessionStorage.removeItem('indexSessionStorage'));
        }

        // important: per fer console.log aquí s´ha de convertir a comentari la 
        // línia 'location.assign("/static/index/index.html");'
        // sino no funciona. Encara no sé per qué.
        // console.log('indexSessionStorage', indexSessionStorage);
        location.assign("/static/index/index.html");
    });

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
            // console.log('body es : ', body);

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