import Item from '../models/item';

export async function obtenerItems(req, res) {
    try {
      const items = await Item.findAll();
      res.json({
        data: items
      });
    } catch (e) {
      res.status(500).json({
        error: e.message
      })
    }
}

export async function obtenerItemsPorIdFactura(req, res) {
    try {
      const items = await Item.findAll({
          where: { facturaID: req.params.idFactura }
      });
      res.json({
        data: items
      });
    } catch (e) {
      res.status(500).json({
        error: e.message
      })
    }
}

export async function obtenerItemPorId(req, res) {
    try {
      const item = await Item.findOne({
        where: { id: req.params.idItem }
      });
    
      if(item) {
        res.json({
          data: item
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

export async function crearItem(req, res) {
    try {
      console.log(req.body);
      const item = await Item.create({
        productoId: req.body.productoId,
        facturaID: req.body.facturaID,
        iva: req.body.iva,
        cantidad: req.body.cantidad,
        codigo: req.body.codigo,
        descripcion: req.body.descripcion,
        precioUnitario: req.body.precioUnitario,
        subtotal: req.body.subtotal
      });
    
      if(item) {
        res.status(201).json({
          data: item
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