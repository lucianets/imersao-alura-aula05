function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith(".jpg")) {
        listarFilmesNaTela(filmeFavorito);
    } else {
        alert("Insira um endereço válido");
    }
    document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme) {
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementolistaFilmes = document.getElementById("listaFilmes");
    elementolistaFilmes.innerHTML += elementoFilmeFavorito;
}