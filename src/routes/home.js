//With this 'Router' method, we can call the routes written
//in this module from another module.
const router = require('express').Router();

const app = require('server');

router.get("/", (req, res) => {

    res.render('home', {title: home});
    
});

module.exports = router;