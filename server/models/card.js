'use strict';
module.exports = function(sequelize, DataTypes) {
  var card = sequelize.define('card', {
    type: DataTypes.STRING,
    number: DataTypes.STRING,
    cvv: DataTypes.STRING,
    ExpireMonth: DataTypes.STRING,
    ExpireYear: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return card;
};