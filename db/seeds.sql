-- INSERT INTO history (dinnerSearchTerm, movieSearchTerm, likes) VALUES ("The Dark Knight", "Dal fry");
-- INSERT INTO history (dinnerSearchTerm, movieSearchTerm, likes) VALUES ("Bad Santa", "Beef Wellington");
-- INSERT INTO history (dinnerSearchTerm, movieSearchTerm, likes) VALUES ("The Shawshank Redemption", "Steak and Kidney Pie");
-- INSERT INTO history (dinnerSearchTerm, movieSearchTerm, likes) VALUES ("The Godfather", "Grilled Cheese");
-- INSERT INTO history (dinnerSearchTerm, movieSearchTerm, likes) VALUES ("12 Angry Men", "Apple Pie");
-- INSERT INTO history (dinnerSearchTerm, movieSearchTerm, likes) VALUES ("The Lord of the Rings: Return of the King", "Lasagne");
-- INSERT INTO history (dinnerSearchTerm, movieSearchTerm, likes) VALUES ("Pulp Fiction", "Poutine");
-- INSERT INTO history (dinnerSearchTerm, movieSearchTerm, likes) VALUES ("Schindler's List", "Split Pea Soup");



-- Now insert the entries you defined in seeds.sql by running the file: source seeds.sql.

-- npx sequelize-cli seed:generate --name demo-movie
--movieseed.sql

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Movie', [{
      movieSearchTerm:: 'Cars',
      likes: 5,
     created_at: new Date ();
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movie', null, {});
  }
};


-- npx sequelize-cli seed:generate --name demo-dinner
--dinnerseed.sql

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Dinner', [{
      dinnerSearchTerm:: 'lasagna',
      likes: 5,
     created_at: new Date ();
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movie', null, {});
  }
};
