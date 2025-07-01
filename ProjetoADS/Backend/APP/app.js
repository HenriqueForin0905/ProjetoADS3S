const express = require('express');
const logger = require('./middlewares/logger');
const bodyParser = require('body-parser');
const alunoRoutes = require('./routes/alunoRoutes');
const materiaRoutes = require('./routes/materiaRoutes');
const notaRoutes = require('./routes/notaRoutes');
const turmaRoutes = require('./routes/turmaRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(logger);
app.use(bodyParser.json());
const errorHandler = require('./middlewares/error');
app.use(errorHandler);
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/alunos', alunoRoutes);
app.use('/api/materias', materiaRoutes);
app.use('/api/notas', notaRoutes);
app.use('/api/turmas', turmaRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});