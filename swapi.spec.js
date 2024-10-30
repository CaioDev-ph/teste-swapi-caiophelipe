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

//-----------------------------------------------------------------------//
test('',async ()=> {
    const resposta = await request('https://swapi.dev/api').get('/planets/10/');
// /planets/10/

expect(resposta.status).toBe(200);
expect(resposta.body.climate).toBe("temperate");
expect(resposta.body.gravity).toBeDefined();
expect(resposta.body.name).toBe('Kamino');
expect(resposta.body.terrain).toBe("ocean");
});
test('Mensagem erro de planeta inexistente', async ()=>{

});
test('Deve receber msg erro, quando planeta inexistente',async ()=> {
    const resposta = await request('https://swapi.dev/api').get('/planets/9999');

    expect(resposta.status).toBe(404);
    expect(resposta.body.detail).toBe('Not found');
    expect(resposta.body).toMatchObject({
        detail: 'Not found'
    });
});

//-----------------------------------------------------------------------//
test('',async ()=> {
    const resposta = await request('https://swapi.dev/api').get('/planets/13/');
// /planets/13/

expect(resposta.status).toBe(200);
expect(resposta.body.climate).toBe("hot");
expect(resposta.body.gravity).toBeDefined();
expect(resposta.body.name).toBe('Mustafar');
expect(resposta.body.terrain).toBe("volcanoes, lava rivers, mountains, caves");
});
test('Mensagem erro de planeta inexistente', async ()=>{

});
test('Deve receber msg erro, quando planeta inexistente',async ()=> {
    const resposta = await request('https://swapi.dev/api').get('/planets/9999');

    expect(resposta.status).toBe(404);
    expect(resposta.body.detail).toBe('Not found');
    expect(resposta.body).toMatchObject({
        detail: 'Not found'
    });
});

//-----------------------------------------------------------------------//
test('',async ()=> {
    const resposta = await request('https://swapi.dev/api').get('/starships/9/');
// /starships/9/

expect(resposta.status).toBe(200);
expect(Number(resposta.body.cost_in_credits)).toBeGreaterThan(0);
expect(Number(resposta.body.length)).toBeGreaterThan(0);
expect(resposta.body.name).toBe('Death Star');
expect(resposta.body.consumables).toBe("3 years");
});
test('Mensagem erro de nave inexistente', async ()=>{

});
test('Deve receber msg erro, quando nave inexistente',async ()=> {
    const resposta = await request('https://swapi.dev/api').get('/starships/9999');

    expect(resposta.status).toBe(404);
    expect(resposta.body.detail).toBe('Not found');
    expect(resposta.body).toMatchObject({
        detail: 'Not found'
    });
});

//-----------------------------------------------------------------------//
test('',async ()=> {
    const resposta = await request('https://swapi.dev/api').get('/starships/15/');
// /starships/15/

expect(resposta.status).toBe(200);
expect(Number(resposta.body.cost_in_credits)).toBeGreaterThan(0);
expect(Number(resposta.body.length)).toBeGreaterThan(0);
expect(resposta.body.name).toBe('Executor');
expect(resposta.body.consumables).toBe("6 years");
});
test('Mensagem erro de nave inexistente', async ()=>{

});
test('Deve receber msg erro, quando nave inexistente',async ()=> {
    const resposta = await request('https://swapi.dev/api').get('/starships/9999');

    expect(resposta.status).toBe(404);
    expect(resposta.body.detail).toBe('Not found');
    expect(resposta.body).toMatchObject({
        detail: 'Not found'
    });
});