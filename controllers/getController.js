const express = require('express')
const Item = require('../item')

const getController = async (req, res) => {
    try {
        const arrayItem = await Item.find()
        console.log(arrayItem)
        res.json(arrayItem)

    } catch (err){
        console.log(err)
    }
}


module.exports = getController

