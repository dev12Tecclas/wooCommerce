const backbone = require('backbone')

// window.alert('prueba')


document.addEventListener('DOMContentLoaded', function (){
    let body = document.body
    let newDiv = document.createElement("div")

    newDiv.setAttribute('id', "root")

    body.appendChild(newDiv)

})
let body = document.body
let newDiv = document.createElement("div")
body.appendChild(newDiv)
console.log('hola');

// urlArchivoHTML = '/index.html';

// // Redireccionar al archivo HTML
// window.location.href = urlArchivoHTML;

// let MyView = backbone.View.extend(
//   {
//     el:'#view',
//     render: function(){
//         this.$el.load('./index.html')
//         return this
//     }
//   }

// )

// let myView = new MyView()

// myView.render()





// console.log('prueba')