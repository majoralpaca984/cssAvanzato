// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.

document.addEventListener("DOMContentLoaded", function () {
    const aside = document.querySelector("aside");
    const links = aside.querySelectorAll("a");
    links.forEach(link => {
        if (link.textContent.trim() === "Twitter") {
            link.parentElement.remove();
        }
    });
});

// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".






// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

document.querySelector(".author").onmouseover = function () {
    alert("Nome dell'autore: " + this.textContent);
};