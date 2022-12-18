function generalErrorHandling(err, req, res, next) {
    console.log(err);
    res.send(err);
};

module.exports = generalErrorHandling;