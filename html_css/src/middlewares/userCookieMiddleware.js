const db = require('../database/models');
const sequelize = db.sequelize;


const userCookieMiddleware = async (req, res, next) => {
    if (req.cookies.userIdCookie != undefined) {
        let usuario = await db.Users.findByPk(req.cookies.userIdCookie);
        req.session.user = usuario
    }
    next();
}
module.exports = userCookieMiddleware;