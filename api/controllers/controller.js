const mongoose = require("mongoose");
const List = mongoose.model("Lists");

// get all lists
exports.getListItems = (req, res) => {
    List.find({}, (err, list) => {
        if (err)
            res.send(err);
        
        res.json(list);
    });
};

// create a list
exports.createListItem = (req, res) => {
    let newList = new List(req.body);
    newList.save( (err, list) => {
        if (err)
            res.send(err);
        
        res.json(list);
    });
};

// read a single list 
exports.readListItem = (req, res) => {
    List.findById(req.params.id, (err, list) => {
        if (err)
            res.send(err);
        res.json(list);
    });
};

// update a particular list 
exports.updateListItem = (req, res) => {
  List.findOneAndUpdate(req.params.id, req.body, { new: true }, (err, list) => {
    if (err) 
        res.send(err);
    res.json(list);
  });
};

// delete a single list 
exports.deleteListItem = (req, res) => {
    List.remove({
        _id: req.params.id
    }, (err, list) => {
        if (err)
            res.send(err);
        res.json({ message: 'List deleted!!' });
    });
};