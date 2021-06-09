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

const addPerson = async person => {
    await knex('people').insert(person);
}

const getPersonById=async id=>{
    return await knex('people').where('id',id).select('*').first();
}

const getAll = async () => {
   return await knex.from('people').leftJoin('cars','people.id','cars.personId')
   .select('people.*').count({ carCount: 'cars.personId' })
   .groupBy('people.id','people.firstName','people.lastName','people.age')   
}

module.exports = {
    addPerson,
    getAll,
    getPersonById
}