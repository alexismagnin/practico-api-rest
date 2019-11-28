import {Router} from 'express';
import {
    obtenerProductos, 
    crearProducto, 
    obtenerProductoPorId,
    borrarProductoPorId,
    modificarProducto
} from '../controllers/producto.controller';

const router = Router();

router.get('/', obtenerProductos );
router.get('/:idProducto', obtenerProductoPorId);
router.post('/', crearProducto);
router.put('/:idProducto', modificarProducto);
router.delete('/:idProducto', borrarProductoPorId);

export default router;