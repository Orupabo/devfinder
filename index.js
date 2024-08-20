let icon = document.getElementById("icon")
icon.onclick = function name(params) {
    document.body.classList.toggle("darktheme");
    if(document.body.classList.contains("darktheme")){
        icon.innerHTML = `<i class="bi bi-moon-fill"></i>`;
    }else{
        icon.innerHTML = `<i class="bi bi-brightness-low-fill"></i>`;
    }
}