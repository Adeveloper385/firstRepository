const express = require('express')
const Item = require('../item')

const postController = async (req, res) => {
    const body = req.body
    console.log(body)

    try {
        const itemDB = new Item(body)
        await itemDB.save()
        res.json({
            itemDB,
            message: 'item has benn added'
        })
    } catch (err){
        console.log(err)
    }
}



module.exports = postController
