const divProductos = document.getElementById("divProductos")

fetch ('/json/productos.json')
.then(response => response.json())
.then(data => console.log (data))