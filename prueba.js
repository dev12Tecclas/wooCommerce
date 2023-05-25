window.alert('prueba')


document.addEventListener('DOMContentLoaded', function (){
    let body = document.body
    let newDiv = document.createElement('div')
    newDiv.innerHTML = 'hola soy germna'

    body.appendChild(newDiv)

})


urlArchivoHTML = '/index.html';

// Redireccionar al archivo HTML
window.location.href = urlArchivoHTML;


console.log('prueba')