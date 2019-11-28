import {Router} from 'express';
import {
    obtenerClientes, 
    crearCliente, 
    obtenerClientePorId,
    borrarClientePorId,
    modificarCliente
} from '../controllers/cliente.controller';

const router = Router();

router.get('/', obtenerClientes );
router.get('/:idCliente', obtenerClientePorId);
router.post('/', crearCliente);
router.put('/:idCliente', modificarCliente);
router.delete('/:idCliente', borrarClientePorId);

export default router;