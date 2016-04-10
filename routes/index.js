var usersData = require('./users-data.js');

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render(
    'index',
    {
      'function': 'home',
      title: 'Users Comment',
      comments: usersData.usersComments
    }
  );
};