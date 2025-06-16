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
class Products_queue
{
    constructor(_productos)
    {
        this.products_queue = Array();
        this.products_queue.push(_productos);

        let new_div = document.createElement("div");
        new_div.className("product");
    }
}

let Products_queue_obj = new Products_queue();

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