const mongoose = require("mongoose");
const List = mongoose.model("Lists");

// get all lists items with all fields
exports.get_list_items_fields = (request, response) => {
    List.find({}, (err, list) => {
        if (err)
            response.send(err);
        
        response.json(list);
    });
};

// get all lists items
exports.get_list_items = (request, response) => {
    List.find({}, { id: 1, name: 1 }, (err, list) => {
        if (err)
            response.send(err);
        
        response.json(list);
    });
};

// create a list
exports.create_list_item = (request, response) => {
    let newListItem = new List(request.body);
    newListItem.save( (err, list) => {
        if (err)
            response.send(err);
        response.json(list);
    });
};

// read a single list 
exports.read_list_item = (request, response) => {
    List.findById(request.params.id, (err, list) => {
        if (err)
            response.send(err);
        response.json(list);
    });
};

// update a particular list 
exports.update_list_item = (request, response) => {
  List.findOneAndUpdate({ 
      _id: request.params.id 
    }, request.body, { new: true }, (err, list) => {
    if (err) 
        response.send(err);
    response.json(list);
  });
};

// delete a single list 
exports.delete_list_item = (request, response) => {
    List.remove({
        _id: request.params.id
    }, (err, list) => {
        if (err)
            response.send(err);
        response.json({ message: 'List deleted!!' });
    });
};

// delete all list items - testing only
exports.delete_all_items = (request, response) => {
    List.remove({}, (err, list) => {
        if (err)
            response.send(err);
        response.json({ message: 'All list items deleted!!' });
    });
};