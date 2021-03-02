const { Count } = require('../models/Count')

const getCount = async (req, res) => {
    const count = await Count.find({ user: { _id: req.profile._id } }).populate('user', '_id name')
    if (count) {
        res.status(200).json(count)
    } else {
        res.status(400).json({ error: 'no count found ' })
    }
}

const createCount = async ( req, res ) => {
    req.body.user = req.profile
    const newCount = new Count(req.body)
    const count = await newCount.save()
    if(count){
        res.status(200).json(count)
    }else{
        res.status(400).json({ error: 'failed to create count'})
    }
}

module.exports = {
    getCount,
    createCount
}