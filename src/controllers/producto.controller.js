import Producto from '../models/producto';

export async function obtenerProductos(req, res) {
    try {
      const productos = await Producto.findAll({
        order: [['id', 'ASC']]
      });
      res.json({
        data: productos
      });
    } catch (e) {
      res.status(500).json({
        error: e.message
      })
    }
}

export async function obtenerProductoPorId(req, res) {
    try {
      const producto = await Producto.findOne({
        where: { id: req.params.idProducto }
      });
    
      if(producto) {
        res.json({
          data: producto
        });
      } else {
        res.json({
          data: {}
        })
      }
    } catch (e) {
      res.status(500).json({
        error: e.message
      })
    }
}

export async function crearProducto(req, res) {
    try {
      const producto = await Producto.create({
        codigo: req.body.codigo,
        descripcion: req.body.descripcion,
        precioUnitario: req.body.precioUnitario
      });
    
      if(producto) {
        res.status(201).json({
          data: producto
        });
      } else {
        res.json({
          data: {}
        })
      }
    } catch (e) {
      res.status(500).json({
        error: e.message
      })
    }
}

export async function modificarProducto(req, res){
    try{
        const producto = await Producto.findOne({
            where: { id: req.params.idProducto }
        })
        if (producto) {
            const productoModificado = await producto.update({
                codigo: req.body.codigo,
                descripcion: req.body.descripcion,
                precioUnitario: req.body.precioUnitario
            })
            res.json({
                data: productoModificado
            })
        } else {
            res.status(404).json({
                data: {},
                message: 'No se encontró el producto'
            })
        }
    } catch (e){
        res.status(500).json({
            error: e.message
        });
    } 
}

export async function borrarProductoPorId(req, res){
    try{
        const cantFilasBorradas = await Producto.destroy({
            where: { id: req.params.idProducto }
        });   
        res.json({
            data: {},
            message: `Se eliminó ${cantFilasBorradas} producto`
        })
    } catch (e){
        res.status(500).json({
            error: e.message
        });
    }
}