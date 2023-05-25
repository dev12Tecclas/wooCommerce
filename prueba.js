window.alert('prueba')


document.addEventListener('DOMContentLoaded', function (){
    let body = document.body
    let newDiv = document.createElement("object")

    newDiv.setAttribute('type', './index.html')

    body.appendChild(newDiv)

})


// urlArchivoHTML = '/index.html';

// // Redireccionar al archivo HTML
// window.location.href = urlArchivoHTML;


console.log('prueba')