const express = require('express');

const app = express();

app.use(express.json());


/**
* Tipos de parâmetros

- Query Params: Filtros e paginação
- Route Params: Identificar recursos (Atualizar ou Deletar)
- Request Body: Conteúdo na hora de criaar ou editar um recurso
*/

app.get('/projects', (request, response) => {
    const {title, owner} = request.query;

    console.log(title);
    console.log(owner);

    return response.json([
        'Projeto 1',
        'Projeto 2',
    ]);
});

app.post('/projects', (request, response) => {
    const {title, owner} = request.body;
    console.log(title);
    console.log(owner);

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);
} );

app.put('/projects/:id', (request, response) => {
    const {id } =request.params;
    console.log(id);

    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3'
    ]);
} );

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 2',
        'Projeto 3'
    ]);
} );

app.listen(3333, () => {
    console.log('🚀  Back-end started!');
});