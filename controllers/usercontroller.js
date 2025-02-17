const db = require("../db");

//get all users
exports.getUsers = (req, res) => {
    db.query("SELECT * FROM users", (err, result) => {
        if(err){
            res.status(404).json({error: err.message});
        } else {
            res.json(result);
        }
    });
};