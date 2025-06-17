/*===========================Elementos del documento====================*/
let area_productos_obj = document.getElementById("products-area");


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
    new Producto("Charola","../../Statics/Img/charola.webp","Charola de plastico 30x15cm","100$ mxn"),
    new Producto("Comida", "../../Statics/Img/comida.png", "Deliciosa comida", "50$ mxn"),
    new Producto("Manzana", "../../Statics/Img/manzana.png", "Deliciosa comida", "50$ mxn"),
    
    new Producto("Comida", "../../Statics/Img/comida.png", "Deliciosa comida", "50$ mxn"),
    new Producto("Comida", "../../Statics/Img/comida.png", "Deliciosa comida", "50$ mxn"),
    new Producto("Comida", "../../Statics/Img/comida.png", "Deliciosa comida", "50$ mxn"),
    
    new Producto("Comida", "../../Statics/Img/comida.png", "Deliciosa comida", "50$ mxn"),
    new Producto("Comida", "../../Statics/Img/comida.png", "Deliciosa comida", "50$ mxn"),
    new Producto("Comida", "../../Statics/Img/comida.png", "Deliciosa comida", "50$ mxn"),
    
]

const payArea = document.getElementById("products-area");
    for (let i=0; i < this.Products_Stack.length; i++){
        const p = this.products_queue[i];
        payArea.innerHTML += "<div class=\"Producto\"><img src="+p.imagen+">"
                +p.nombre+", "+p.descripcion+", "+p.precio+"</div>";
    }
