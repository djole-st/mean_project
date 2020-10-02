const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

router.get("/contacts", (req,res,next) =>{
    Contact.find(function(err, contacts){
        res.json(contacts);
    });
});

router.post('/add',(req,res,next)=>{
    let newCon = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });

    newCon.save((err, contact)=>{
        if(err)
        {
            res.json({msg: 'Failed to add contact'});
        }
        else
        {
            res.json({msg: 'Added successfully'});
        }
    });
});

router.delete('/delete/:id',(req,res,next)=>{
    Contact.deleteOne({_id:req.params.id}, function (err, result) {
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    });
});

module.exports = router;