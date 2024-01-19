const Displaybtn = document.getElementById('Displaybtn');

function run() {
    let xhr = new XMLHttpRequest();

    const content = document.getElementById('content');

    let url = "https://api.publicapis.org/entries";

    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            let i = 0;
            const jsonArray = JSON.parse(this.responseText);
            // console.log(jsonArray);
            jsonArray.entries.forEach(item => {
                // console.log(item);
                const data = `<div class ="Product">
                <div class="productInfo">
                <p>${i}</p>
                    <h1>id: ${item.API} </h1>
                    <p>Tittle: ${item.Description}</p>
                    <a href="${item.Link}"  target="_blank">Click to open the API</a>
                    <hr>
                </div>
            </div>`
                i++;
                content.insertAdjacentHTML('beforeend', data);
            })
        }
    }
    xhr.send();
}
Displaybtn.addEventListener('click', run);

