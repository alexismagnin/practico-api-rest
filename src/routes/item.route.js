import {Router} from 'express';
import {
    obtenerItems, 
    crearItem, 
    obtenerItemPorId,
    obtenerItemsPorIdFactura
} from '../controllers/item.controller';

const router = Router();

router.get('/', obtenerItems );
router.get('/:idItem', obtenerItemPorId);
router.post('/', crearItem);
router.get('/:idFactura', obtenerItemsPorIdFactura);

export default router;