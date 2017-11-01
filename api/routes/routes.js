module.exports = (app) => {
  
  const ltpList = require('../controllers/controller');

  // our Routes
  app.route('/')
  .get(ltpList.get_list_items_fields);

  app.route('/lists')
    .get(ltpList.get_list_items) 
    .post(ltpList.create_list_item);
  
  app.route('/list/:id')
    .get(ltpList.read_list_item)
    .put(ltpList.update_list_item)
    .delete(ltpList.delete_list_item);

  app.route('/empty-list')
    .delete(ltpList.delete_all_items);
}
