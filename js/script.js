// Mostrar las flores y reproducir música al responder "Sí"
document.getElementById('yes').addEventListener('click', function() {
    document.getElementById('question').style.display = 'none';
    document.getElementById('flowers').style.display = 'block';
    document.getElementById('response-yes').style.display = 'block';
    document.getElementById('music').play(); // Reproducir música
});

// Mostrar corazón roto al responder "No"
document.getElementById('no').addEventListener('click', function() {
    document.getElementById('question').style.display = 'none';
    document.getElementById('response-no').style.display = 'block';
});

// Quitar la clase "not-loaded" después de 1 segundo
onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
};