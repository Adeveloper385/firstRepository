const express = require('express')
const Item = require('../item')

const putController = async (req, res) => {
    const { id } = req.params
    const body = req.body

    try {
        const itemDB = await Item.findByIdAndUpdate(
            id, body, { useFindAndModify: false}
        )
        res.json({
            status: true,
            message: 'item has been edited'
        })
    } catch (err) {
        console.log(err)
        res.json({
            status:false,
            message: 'item did not edit'
        })
    }
}

module.exports = putController
