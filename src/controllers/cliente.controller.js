import Cliente from '../models/cliente';

export async function obtenerClientes(req, res) {
    try {
      const clientes = await Cliente.findAll({
        order: [['id', 'ASC']]
      });
  
      res.json({
        data: clientes
      });
    } catch (e) {
      res.status(500).json({
        error: e.message
      })
    }
  }

export async function obtenerClientePorId(req, res) {
    try {
      const cliente = await Cliente.findOne({
        where: { id: req.params.idCliente }
      });
    
      if(cliente) {
        res.json({
          data: cliente
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

export async function crearCliente(req, res) {
  
    try {
      const cliente = await Cliente.create({
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        cuit: req.body.cuit
      });
    
      if(cliente) {
        res.status(201).json({
          data: cliente
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

export async function modificarCliente(req, res){
    try{
        const cliente = await Cliente.findOne({
            where: { id: req.params.idCliente }
        })

        if (cliente) {
            const clienteModificado = await cliente.update({
                nombre: req.body.nombre,
                direccion: req.body.direccion,
                cuit: req.body.cuit
            })

            res.json({
                data: clienteModificado
            })
        } else {
            res.status(404).json({
                data: {},
                message: 'No se encontró el cliente'
            })
        }
    } catch (e){
        res.status(500).json({
            error: e.message
        });
    } 
}

export async function borrarClientePorId(req, res){
    try{
        const cantFilasBorradas = await Cliente.destroy({
            where: { id: req.params.idCliente }
        });   
        
        res.json({
            data: {},
            message: `Se eliminó ${cantFilasBorradas} cliente`
        })

    } catch (e){
        res.status(500).json({
            error: e.message
        });
    }
}