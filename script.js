const miFuncion = async()=> {
    console.log("x1");
    const response = await fetch("https://raw.githubusercontent.com/JonatanOrdonez/fetch-requests/main/tienda.json")
    const data = await response.json();

    for(let tienda of data) {
        console.log(tienda);
    }

    const jsonString = JSON.stringify(data);
    const jasonJSON = JSON.parse(jsonString);

    console.log(jsonString);

    console.log(jasonJSON);

    console.log("x2");



}
miFuncion();
