/*===========================Objetos importantes====================*/

class Producto
{
    constructor(_nombre, _imagen, _descrip, _precio)
    {
        this.nombre = _nombre;
        this.descripcion = _descrip;
        this.precio = _precio; 
        
    }
    set Imagen(img_dir)
    {
        
    }
}
class Products_queue
{
    constructor(_productos)
    {
        this.products_queue = Array();
        this.products_queue.push(_productos);
    }
}
/*===========================Elementos del documento====================*/

let area_productos_obj = document.getElementById("products-area");
let Products_queue_obj = Products_queue();