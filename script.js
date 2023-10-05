function toggleMode() {
    const html = document.documentElement
    //substituição do fundo
    html.classList.toggle("light")

    // pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a img
    if(html.classList.contains('light')){
        //se tiver light mode, img light
        img.setAttribute('src', './projeto/assets/hamerti.jpg')
        img.setAttribute('alt', "Hamerti comendo bicoito")

    } else {    
        // se tiver darkmode, img normal
        img.setAttribute('src', './projeto/assets/ruivo.jpg')
        img.setAttribute('alt', "Ruivo de baixo para cima")

    }
}