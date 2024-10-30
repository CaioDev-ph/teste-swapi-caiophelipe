it ('1 + 1 deve ser igual a 2', ()=>{
    const resultadoEsperado = 2;
    expect(1+1).toBe(resultadoEsperado);
});

const request = require('supertest')

test('',async ()=> {
    const resposta = await request('https://swapi.dev/api').get('/people/1');
 //   console.log(resposta.status);
// console.log(resposta.body);
expect(resposta.status).toBe(200);
expect(resposta.body.films).toBeDefined();
expect(resposta.body.vehicles.length).toBeGreaterThan(0);
expect(resposta.body.name).toBe('Luke Skywalker');
//expect(resposta.body.vehicles.length).toBeGreaterThan(999);
});
test('Mensagem erro de pessoa inexistente', async ()=>{

});
test('Deve receber msg erro, quando pessoa inexistente',async ()=> {
    const resposta = await request('https://swapi.dev/api').get('/people/9999');

    expect(resposta.status).toBe(404);
    expect(resposta.body.detail).toBe('Not found');
    expect(resposta.body).toMatchObject({
        detail: 'Not found'
    });
//expect(resposta.body.vehicles.length).toBeGreaterThan(999);
});
//-----------------------------------------------------------------------//
test('',async ()=> {
    const resposta = await request('https://swapi.dev/api').get('/people/20');
// /people/20

expect(resposta.status).toBe(200);
expect(resposta.body.films).toBeDefined();
expect(resposta.body.species).toBeDefined();
expect(resposta.body.name).toBe('Yoda');
expect(resposta.body.height).toBe("66");
});
test('Mensagem erro de pessoa inexistente', async ()=>{

});
test('Deve receber msg erro, quando pessoa inexistente',async ()=> {
    const resposta = await request('https://swapi.dev/api').get('/people/9999');

    expect(resposta.status).toBe(404);
    expect(resposta.body.detail).toBe('Not found');
    expect(resposta.body).toMatchObject({
        detail: 'Not found'
    });
});

