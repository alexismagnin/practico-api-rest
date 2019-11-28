import {Router} from 'express';
import {
    obtenerFacturas, 
    crearFactura, 
    obtenerFacturaPorId,
} from '../controllers/factura.controller';

const router = Router();

router.get('/', obtenerFacturas );
router.get('/:idFactura', obtenerFacturaPorId);
router.post('/', crearFactura);

export default router;