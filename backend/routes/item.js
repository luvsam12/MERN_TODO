const express = require('express')
const router = express.Router()
const Item = require("../models/Item")

router.get('', (req,res) => {
    Item.find()
    .sort({ data:-1 })
    .then(response => {
        res.status(200)
        .json({success:true, msg:response})
    })
    .catch(err => {
        res.status(400)
        .json({status: false, msg: err})
    })
})

router.post('', (req,res) => {
    const new_item = new Item({
        name: req.body.name
    })
    new_item.save()
    .then((response) => {
        res.status(200)
        .json({success: true, msg: response})
    })
    .catch(err => {
        res.status(400)
        .json({success: false, msg: err})
    })
})

router.delete("/:id", (req, res) => {
    Item.findById(req.params.id)
    .then(response => {
        response.remove()
        .then(() => {
            console.log(response)
            res.status(200)
            .json({success: true, msg: req.params.id})
        })
    })
    .catch(err => {
        res.status(400)
        .json({success: false, msg: err})
    })
})


module.exports = router;