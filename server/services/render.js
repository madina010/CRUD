const axios = require('axios')

exports.homeRoutes = (req, res) => {
   axios.get('http://localhost:3000/api/users')
        .then(function(responce) {
            res.render('index', {users: responce.data})
        })
        .catch(err => {
            res.send(err)
        })
}

exports.homeRoutes = (req, res) => {
    res.render('addUser')
}

exports.homeRoutes = (req, res) => {
    res.render('update')
}