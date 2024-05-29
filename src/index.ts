import server from './server';
import { PORT } from './config/envs';


const port = PORT || 3001;

server.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
