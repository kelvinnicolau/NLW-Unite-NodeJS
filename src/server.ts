import fastify from "fastify";

const app = fastify()

// Métodos HTTP: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, ...

// Corpo da requisição (Request Body)
// Parametros de busca (Search Params / Query Params) 'http://localhost:3333/users?name=Kelvin'
// Parametros de rota (Route Params) -> Identificação de recursos 'DELETE http://localhost:3333/users/5'
// Cabeçalhos (Headers) -> Contexto

// Semanticas = Significado

// Driver nativo / Query Builders / ORMs

// Object Relational Mapping (Hibernate / Doctrine / ActiveRecord)

app.post('/events', (request, reply) => {
    console.log(request.body);

    return 'Hellow NLW United'
})

app.listen({ port: 3333 }).then(() => {
    console.log('HTTP SERVER RUNNING!');
})