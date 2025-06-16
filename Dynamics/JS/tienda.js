/*===========================Elementos del documento====================*/

let area_productos_obj = document.getElementById("products-area");
let Products_queue_obj = Products_queue();


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
