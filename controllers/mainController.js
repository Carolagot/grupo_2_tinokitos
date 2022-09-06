const express= require("express");

const mainController= {
    home:function (req,res){
            res.render('index');
    }, 

    ProductosDetail:function(req, res){
        const id = req.params.id;
        if (id > productos.length - 1){
            res.send('El producto no existe');
        } else {
            res.send(productos[id]);
        }
    }
};
    
    const productos =   [ {
        Nombre: "Bata con pantufla",
        Precio: "$7900",
        Descripcion: "Salida de baño 100% algodón con lazo y capucha para los más chiquitos.", 
        Imagen: ("../public/css/imagenes/bata-recortada.jpg"),
        Categoria: "Hora de Dormir", 
}, 
        {
        Nombre: "Plato de Silicona",
        Precio: "$3200",
        Descripcion: "Marca: Soiferh, Tipo: Platos para niños/as.  Medidas: Diámetro: 27cm." ,
        Imagen: ("../public/css/imagenes/plato-recortada.jpg"),
        Categoria: "Hora de Comer"                
        }
    ];      
     
    module.exports= mainController;
 