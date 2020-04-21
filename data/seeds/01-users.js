
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'me', password: 'pass', department: 'hr' },
        { username: 'pole vault', password: 'pass', department: 'hr' },
        { username: 'RUN!', password: 'pass', department: 'ceo' },
        { username: 'demonitis', password: 'pass', department: 'ceo' },
        { username: 'vizzie pop', password: 'pass', department: 'ceo' },
        { username: 'mr swanson', password: 'pass', department: 'ceo' },
        { username: 'make me', password: 'pass', department: 'worker drone' },
        { username: 'person', password: 'pass', department: 'worker drone' },
        { username: 'meg', password: 'pass', department: 'worker drone' },
      ]);
    });
};
