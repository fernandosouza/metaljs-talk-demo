var usersData = require('./users-data.js');

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render(
    'index',
    {
      "function": 'home',
      "title": 'Home',
      "data": {
        "comments": usersData.usersComments,
      },
      "dataStringify": {
        "comments": JSON.stringify(usersData.usersComments)
      }
    }
  );
};