module.exports = (app) => {
  
  const ltpList = require('../controllers/controller');

  // our Routes
  app.route('/lists')
    .get(ltpList.getListItems) 
    .post(ltpList.createListItem);
  
  app.route('/list/:listId')
    .get(ltpList.readListItem)
    .put(ltpList.updateListItem)
    .delete(ltpList.deleteListItem);
}
