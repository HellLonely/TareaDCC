
// Pongo esta linea para que cargue todo cuando el DOM este cargado.
document.addEventListener('DOMContentLoaded', function () {

    let addButton = document.getElementById('addButton')


    // Comprueba si existen las cookies `preferencia` y `ultima_visita` siempre que se cargue el DOM

    let cookies = document.cookie.split(';');
    if(cookies.some(item => item.includes("preferencia")) || cookies.some(item => item.includes("ultima_visita"))){
        deleteCookie('preferencia');
        deleteCookie('ultima_visita');
    }


    // Crea la cookie, puedes especifiar nombre, valor, tiempo.

    function setCookie(name, value, expires) {
        var date = new Date();
        date.setTime(date.getTime() + (expires * 1000));
        var expiresString = expires ? "expires=" + date.toUTCString() : "";
        document.cookie = name + "=" + value + "; " + expiresString + "; path=/";
    }


    // Elimina la cookie cambiando el tiempo
    function deleteCookie(name) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }


    // Muestra las cookies en la consola

    function displayCookies() {
        var cookiesList = "";
        cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            cookiesList += cookies[i] + "\n";
        }

        console.log("Cookies vigentes:\n\n" + cookiesList);
    }

    // Recoje los datos del formulario para crear las cookies

    function submitForm() {
        var idioma = document.getElementById('idioma').value;
        var tema = document.getElementById('tema').value;
        var usuario = document.getElementById('usuario').value;
        var preferencia = document.getElementById('preferencia').value;

        setCookie('idioma', idioma, 20);
        setCookie('tema', tema, 15);
        setCookie('usuario', usuario, 10);
        setCookie('preferencia', preferencia, null);
        setCookie('ultima_visita', new Date().toLocaleString(), null);

        displayCookies();
    }

    addButton.addEventListener('click', () =>{
        submitForm();
    })

    window.setInterval(displayCookies, 2000);
});