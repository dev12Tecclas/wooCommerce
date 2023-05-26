const backbone = require('backbone')

// window.alert('prueba')


document.addEventListener('DOMContentLoaded', function (){
    let body = document.body
    let newDiv = document.createElement("iframe")

    newDiv.setAttribute('src', './index.html')

    body.appendChild(newDiv)

})


// urlArchivoHTML = '/index.html';

// // Redireccionar al archivo HTML
// window.location.href = urlArchivoHTML;

let MyView = backbone.View.extend(
  {
    el:'#view',
    render: function(){
        this.$el.load('./index.htm')
        return this
    }
  }

)

let myView = new MyView()

myView.render()





// console.log('prueba')