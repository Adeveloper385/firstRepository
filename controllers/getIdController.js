const express = require('express')
const Item = require('../item')

const getIdController = async (req, res) => {
    const { id } = req.params
    try{
        const itemDB = await Item.findOne({ _id : id })

        if(!itemDB){
            res.json({
                status: false,
                message: 'cant find item'
            })
        } else {
            res.json(itemDB)
        }
    } catch (err){
        console.log(err)
        res.status(404).end()

    }
}


module.exports = getIdController
