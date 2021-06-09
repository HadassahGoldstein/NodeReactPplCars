const knex = require('knex')({
    client: 'mssql',
    connection: {
        server: 'localhost',
        user: 'db_user',
        password: '347',
        database: 'PeopleCars',
        options: {
            port: 1433,
            instanceName: 'SQLEXPRESS'
        }
    }
});

const getCars=async id=>{
    return knex('cars').select('*').where('personId',id);
}

const deleteCars=async id=>{
    await knex('cars').where('personId', id).del()
}

const addCar=async car=>{
    await knex('cars').insert(car);
}
module.exports={
    getCars,
    addCar,
    deleteCars
}