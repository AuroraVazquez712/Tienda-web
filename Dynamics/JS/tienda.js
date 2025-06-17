/*===========================Elementos del documento====================*/
const payArea = document.getElementById("products-area");

/*===========================Objetos importantes====================*/
class Producto
{
    constructor(_nombre, _imagen, _descrip, _precio)
    {
        this.nombre = _nombre;
        this.imagen = _imagen;
        this.descripcion = _descrip;
        this.precio = _precio; 
    }
}

Products_Stack = 
[
    new Producto("Charola","Statics/Img/charola.webp","Charola de plastico 30x15cm","100$ mxn"),
    new Producto("Comida", "Statics/Img/comida.jpg", "Deliciosa comida", "50$ mxn"),
    new Producto("Manzana", "Statics/Img/manzana.jpg", "Deliciosa comida", "25$ mxn"),
    
    new Producto("Marca Textos", "Statics/Img/marcatextos.webp", "Marcatextos naranja", "15$ mxn"),
    new Producto("Mascota", "Statics/Img/mascota.webp", "Peluche Gato 30x20cm", "250$ mxn"),
    new Producto("Monedero", "Statics/Img/monedero.webp", "Monedero perfecto 15x20cm", "50$ mxn"),
    
    new Producto("Moto deportiva", "Statics/Img/moto.jpg", "Moto 20v 200,000 HP", "15,000$ mxn"),
    new Producto("Rollo papel baño", "Statics/Img/servilletaEnCilindro.webp", "Doble hoja 10mil hojas", "15$ mxn"),
    new Producto("Tubo papel baño", "Statics/Img/servilletaTransparenteEnCilindro.jpg", "1M hojas invisibles", "10$ mxn"),
]
for(iterador in Products_Stack)
{
    let new_product = document.createElement("div");
    new_product.className = "Producto";   
    
    new_product.innerHTML = "<div class='Producto'>" +
    "<h4 class = 'product-title'>" + Products_Stack[iterador].nombre + "</h4>" +
    "<p class = 'product-bio'>" + Products_Stack[iterador].descripcion + "</p>" +
    "<p class = 'product-value'>" + Products_Stack[iterador].precio + "</p>" +
    "<button class = 'product-bt'>Comprar</button>" +
    "<img class = 'product-img' src =' >" + Products_Stack[iterador].imagen + "'></div>";


    payArea.appendChild(new_product);
}