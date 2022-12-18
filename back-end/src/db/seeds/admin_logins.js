/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex
    .raw('TRUNCATE TABLE logins RESTART IDENTITY CASCADE')
    .then(function () {
      // Inserts seed entries
      return knex('logins').insert([
        {
          status: 'admin',
          full_name: 'admin',
          username: 'admin_login',
          password: 'Password123!',
        },
        {
          status: 'admin',
          full_name: 'Dean Schwartz',
          username: 'drizzydean',
          password: 'Password123!',
        },
      ]);
    });
};
