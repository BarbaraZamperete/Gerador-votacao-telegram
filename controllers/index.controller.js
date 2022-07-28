const indexCtrl = {}

const passport = require('passport');

indexCtrl.logarForm = async (req, res) => {
    res.render('login');
}
indexCtrl.logar = passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/',
    failureFlash: true
})

indexCtrl.deslogar = async (req, res) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/login')
    });
}


module.exports = indexCtrl