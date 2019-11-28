import express from 'express';
import morgan from 'morgan';
import database from './database/database';
import clientesRuta from './routes/cliente.route';
import productosRuta from './routes/producto.route';
import itemsRuta from './routes/item.route';
import facturasRuta from './routes/factura.route';

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/clientes', clientesRuta);
app.use('/api/productos', productosRuta);
app.use('/api/items', itemsRuta);
app.use('/api/facturas', facturasRuta);

//database.sync({force: true});
database.sync()
    .then(() => console.log("Base sincronizada"));

export default app;