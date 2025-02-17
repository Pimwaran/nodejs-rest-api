const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Add code
require("dotenv").config();
const userroutes = require("./routes/userroutes");


const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

//add new code here
// https://localhost:3000/api/user
app.use('/api',userroutes);

let items = [
    { id: 1, name: "item 1"},
    { id: 2, name: "item 2"},
    { id: 3, name: "item 3"},
    { id: 4, name: "item 4"},
    { id: 5, name: "item 5"},
];

//get method
// https://localhost:3000/item
app.get('/item', (req, res) => {
    res.json(items);
});

//get single item
// https://localhost:3000/item/1
app.get('/item/:id' , (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    res.json(item);
});

// post method
app.post('/item', (req, res) => {
    const newItem = {id: items.length+1, name: req.body.name};
    items.push(newItem); // {id:6, name: 'item: 6'}
    res.status(201).json(items);
});

//put method
app.put('/item/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if(!item) return res.status(404).json({message: "Item not found!"}); //not found item

    item.name = req.body.name;
    res.json(items);
});

//start a sever
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})
