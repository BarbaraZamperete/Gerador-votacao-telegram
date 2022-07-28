const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const User = require('../models/user')

passport.use(new LocalStrategy({
    usernameField: 'login',
    passwordField: 'senha'
}, async (login, senha, done) => {
    const user = await User.findOne({login})
    if(!user){
        return done(null, false, {message: "Usuário não encontrado"})
    }else{
        // const match = await user.matchPassoword(senha)
        if(user.senha == senha) return done(null, user)
        else return done(null, false, {message: 'Senha incorreta'})
    }
}))

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user)
    })
})