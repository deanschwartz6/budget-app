function noMatchingRoute(req, res, next) {
    res.send('That route could not be found.');
};

module.exports = noMatchingRoute;