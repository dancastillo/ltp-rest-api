const mongoose = require("mongoose");
const List = mongoose.model("Lists");

// get all lists
exports.getListItems = (request, response) => {
    List.find({}, (err, list) => {
        if (err)
            response.send(err);
        
        response.json(list);
    });
};

// create a list
exports.createListItem = (request, response) => {
    let newList = new List(request.body);
    newList.save( (err, list) => {
        if (err)
            response.send(err);
        
        response.json(list);
    });
};

// read a single list 
exports.readListItem = (request, response) => {
    List.findById(request.params.id, (err, list) => {
        if (err)
            response.send(err);
        response.json(list);
    });
};

// update a particular list 
exports.updateListItem = (request, response) => {
  List.findOneAndUpdate(request.params.id, request.body, { new: true }, (err, list) => {
    if (err) 
        response.send(err);
    response.json(list);
  });
};

// delete a single list 
exports.deleteListItem = (request, response) => {
    List.remove({
        _id: request.params.id
    }, (err, list) => {
        if (err)
            response.send(err);
        response.json({ message: 'List deleted!!' });
    });
};