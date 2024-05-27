import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const ENVIRONMENT = process.env.ENVIRONMENT;

if (ENVIRONMENT === 'development') {
    // Cambia el puerto en el entorno de desarrollo
    PORT = 3001;
}

app.get('/', (_req, res) => {
    console.log('GET /');
    res.send('Hello World -- GET /');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});