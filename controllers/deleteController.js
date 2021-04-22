const express = require('express')
const Item = require('../item')

const deleteController = async (req, res) => {
    const { id } = req.params

    try {
    const itemDB = await Item.findByIdAndDelete({ _id: id})
        
    if(!itemDB){
        res.json({
            status: false,
            message: 'cant delete item'
        })
    } else {
        res.json({
            status: true,
            message: 'item has been deleted'
        })
    }
} catch (err) {
    console.log(err)
}

}
module.exports = deleteController
