



const productos = [
    {
        id: 1,
        nombre: "Pocillo de Café",
        precio: 6000
    },
    {
        id: 2,
        nombre: "Jarrito de Café",
        precio: 7000,
    },
    {
        id: 3,
        nombre: "Taza para café doble",
        precio: 10000
    },
    {
        id: 4,
        nombre: "Taza de Té",
        precio: 12000
    },]

let cartProducts = []

let productsContainer = document.getElementById("products-container")

function renderProductos(productsArray) {
    productsArray.forEach(producto => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${producto.nombre}</h3>
                            <h4>$${producto.precio}</h4>
                            <button class="productoAgregar" 
                            id="${producto.id}">AGREGAR</button>`                       

        productsContainer.appendChild(card)

    }) 
   agregaralcarrito()
}

renderProductos(productos) 

function agregaralcarrito() {

    addButton = document.querySelectorAll (".productoAgregar")
addButton.forEach(button => {
 button.onclick = (e) => {  const productId = e.currentTarget.id
 const selectedProduct = productos.find(producto => producto.id == productId)
 
 cartProducts.push(selectedProduct)
 console.log(cartProducts)
  localStorage.setItem("cartProducts",JSON.stringify (cartProducts))
}
 })
}