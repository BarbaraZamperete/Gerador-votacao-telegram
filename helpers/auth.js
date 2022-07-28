const helpers = {}

helpers.isAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()) {
        return next()
    }

    // req.flash('error_msg', 'Não Autorizado')
    console.log('não autorizado')
    res.redirect('/login')
}

module.exports = helpers