$(document).ready(function() {
    window.addEventListener("wheel", function(e) {
        /* SELECTOR DE CLASES */
        //console.log("Eventos Selector de Clases");
        $("div[id=brillo]").toggleClass("brillo");
        $("div[id=brillo]").toggleClass("brillo2");
        $("div[id=brillo]").toggleClass("brillo3");
        $("div[id=brillo]").toggleClass("brillo4");
    });
});