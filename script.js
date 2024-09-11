function mostrarRosas() {
    window.location.href = "rosas.html";
}

function mostrarContenido(opcion) {
    if (opcion === 'ramo') {
        document.getElementById('contenido-ramo').classList.remove('oculto');
        document.getElementById('regalo-1').style.display = 'none';
        document.getElementById('regalo-2').style.display = 'none';
    } else if (opcion === 'osito') {
        document.getElementById('contenido-osito').classList.remove('oculto');
        document.getElementById('regalo-1').style.display = 'none';
        document.getElementById('regalo-2').style.display = 'none';
    }
}