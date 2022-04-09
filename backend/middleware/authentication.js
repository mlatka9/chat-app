const { Unauthenticated, BadRequest } = require("../errors/index");
const { auth } = require('../firebase');

const authenticationMiddleware = async (req, res, next) => {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
        throw new BadRequest('Provide authorization token')
    }
    const token = authorizationHeader.slice(7)
    try {
        const decodedToken = await auth.verifyIdToken(token);
        const user = await auth.getUser(decodedToken.uid)
        req.user = user
        next()
    } catch (err) {
        console.log(err)
        throw new Unauthenticated('Authentication invalid')
    }
}

module.exports = {authenticationMiddleware};