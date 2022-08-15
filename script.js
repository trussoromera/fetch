const divProductos = document.getElementById("tBody")

fetch ('./json/productos.json')
.then(response => response.json())
.then(productos => {
    productos.forEach((producto, indice) => {
        tBody.innerHTML += `
        <tr>
        <th scope="row">${indice + 1 }</th>
        <td>${producto.nombre}</td>  
        <td>${producto.detalle}</td>
        <td>${producto.precio}</td>
        <td>${producto.stock}</td>
        <td><img src="./multimedia/${producto.img}"></td>
        <td><button class="btn btn-dark">Comprar</td>
    </tr>
        `
    })
     

})