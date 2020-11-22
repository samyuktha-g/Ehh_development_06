function DG() {
    //const url = "https://script.google.com/macros/s/AKfycbyM98yF8YcaBJ1JkMUG9QNVn-PnKqLvYikPCjgNKcjvoDsGc1o/exec";
    const url = "https://script.google.com/macros/s/AKfycbwbjBRNT6UshL0h9AWUpa-ILjerWcP3NgSI6nIaZGMEDfGvkMc/exec";
    console.log(" In DG function:");
    fetch(url)
        .then(res => res.json())
        .then(res => {
            document.getElementById("here").textContent = res[0].status;
        });
}

function AddRow() {
    console.log(" In AddRow function:");

    const url = "https://script.google.com/macros/s/AKfycbwO2mCtL4DLTWWsqgXqIH2-Tqaq8SWX1pxhV4OfRZ8PRcicsZaj/exec";
    //"https://raw.githubusercontent.com/bronzwikgk/ehh_developmentV1/main/json/sampleData/sampleSchemaV2.json";
    //"https://script.google.com/macros/s/AKfycbwO2mCtL4DLTWWsqgXqIH2-Tqaq8SWX1pxhV4OfRZ8PRcicsZaj/exec";

    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'same-origin', // include, *same-origin, omit
        // headers: {
        //     'Content-Type': 'application/json'
        //         // 'Content-Type': 'application/x-www-form-urlencoded',
        // },
        redirect: 'follow', // manual, *follow, error
        //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({
                name: "Samyuktha"
            }) // body data type must match "Content-Type" header
    });
    // .then(response => response.json())
    // .then(result => {
    //     console.log('Success:', result);
    // })
    // .catch(error => {
    //     console.error('Error-->:', error);
    // });
}
document.getElementById("btn").addEventListener("click", DG);
document.getElementById("btn2").addEventListener("click", AddRow);

// const url = "https://script.google.com/macros/s/AKfycbyM98yF8YcaBJ1JkMUG9QNVn-PnKqLvYikPCjgNKcjvoDsGc1o/exec";
//= "https://script.google.com/macros/s/AKfycbzim4e21hwmLQ_XLxrC-dULdGzsmHAtkia4Edvl-tiVi8hHh2yX/exec"; //"https://script.google.com/macros/s/AKfycby0drO7EktrF3ZDtkLI3ZpMNUrxDosN-A03QynGKW6_aRESu7M/exec"; //"https://script.google.com/macros/s/AKfycby0drO7EktrF3ZDtkLI3ZpMNUrxDosN-A03QynGKW6_aRESu7M/exec"; // "https://script.google.com/macros/s/AKfycbwbjBRNT6UshL0h9AWUpa-ILjerWcP3NgSI6nIaZGMEDfGvkMc/exec";
// url = https://script.google.com/macros/s/AKfycbwbjBRNT6UshL0h9AWUpa-ILjerWcP3NgSI6nIaZGMEDfGvkMc/exec;
//
// , {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'no-cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     //credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//         'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
// }