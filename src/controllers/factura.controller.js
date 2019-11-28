import Factura from '../models/factura';
import Item from '../models/item';

export async function obtenerFacturas(req, res){ 
    try {
        const facturas = await Factura.findAll(
            {
                order: [['id', 'ASC']],              
                include: {
                model: Item
                }
            }
        );
        res.json({
            data: facturas
        });
    } catch (e){
        res.status(500).json({
            error: e.message
        });

    }
}

export async function crearFactura(req, res){
    try{
        const factura = await Factura.create({
            tipo: req.body.tipo,
            fecha: req.body.fecha,
            numero: req.body.numero,
            puntoVenta: req.body.puntoVenta,
            clienteID: req.body.clienteID,
            total: req.body.total
        });
    
        if (factura) {
            res.status(201).json({
                data: factura
            })
        } else {
            res.json({
                data: {}
            })
        }
    } catch (e){
        res.status(500).json({
            error: e.message
        });
    }
}

export async function obtenerFacturaPorId(req, res){
    try {
        const factura = await Factura.findOne({
            where: { id: req.params.idFactura },
            include: { model: Item }
        });

        if (factura) {
            res.json({
                data: factura
            })
        } else {
            res.json({
                data: {}
            })
        }

    } catch (e){
        res.status(500).json({
            error: e.message
        });    
    }
}