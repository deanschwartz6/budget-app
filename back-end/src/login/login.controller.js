const service = require('./login.service');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');

async function list(req, res){
    const data = req.body;
    const response = await service.list(data.username);
    res.json({ data: response });
}

async function create(req, res){
    const data = req.body;
    const response = await service.create(data);
    res.status(201).json({ data: response });
}

module.exports = {
    list: asyncErrorBoundary(list),
    create: asyncErrorBoundary(create),
}