let search_btn = document.getElementById('search_btn');
let search_close_btn = document.getElementById('search_close_btn');

function search_open() {
    let search_bar = document.getElementById('search_bar');
    search_bar.classList.remove("search_hidden");
    search_bar.classList.add("search_visible");
    search_close_btn.style.display = 'block';
}
search_btn.addEventListener('click', search_open);

function search_close() {
    let search_bar = document.getElementById('search_bar');
    search_bar.classList.add("search_hidden");
    search_bar.classList.remove("search_visible");
    search_close_btn.style.display = 'block';
}
search_close_btn.addEventListener('click', search_close);