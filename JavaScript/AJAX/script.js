function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}




fetch('https://jsonplaceholder.typicode.com/todos', {
    headers: {
        'Accept': 'application/json'
    }
})
    .then(response => response.text())
    .then(text => console.log(text))





// const Displaybtn = document.getElementById('Displaybtn');
// function run() {
//     let xhr = new XMLHttpRequest();

//     let url = 'https://jsonplaceholder.typicode.com/todos';

//     xhr.open("GET", url, true);

//     xhr.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             const jsonArray = JSON.parse(this.responseText);

//             jsonArray.forEach(item => {
//                 // console.log(item);
//                 tittledata.insertAdjacentHTML(
//                     'beforeend',
//                     `<div class ="Product">
//                                 <div class="productInfo">
//                                 <h1>id: ${item.id} Tittle: ${item.title}</h1>
//                                 <hr>
//                                 </div>
//                             </div>`
//                 )
//             })
//         }
//     }
//     xhr.send();
// }
// Displaybtn.addEventListener('click', run);







// // Url for the request
// let url = 'https://jsonplaceholder.typicode.com/todos';

// const tittledata = document.getElementById('tittledata');

// // Making our request
// fetch(url, { method: 'GET' })
//     .then(Result => Result.json())
//     .then(string => { return string })
//     .then(string => {
//         string.slice(0, 10).forEach(item => {
//             tittledata.insertAdjacentHTML(
//                 'beforeend',
//                 `<div class ="Product">
//                             <div class="productInfo">
//                             <h1>Id:${item.id} , Tittle: ${item.title}</h1>
//                             <p>Completed: ${item.completed}</p>
//                             <hr>
//                             </div>
//                         </div>`
//             )
//         });
//     })
//     .catch(errorMsg => { console.log(errorMsg); });



