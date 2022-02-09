__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/news', (req, res) => {
    res.redirect('https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Berita.json')
})
router.get('/panel', (req, res) => {
    res.redirect('https://panel.falixnodes.net')
})


router.get('/config', (req, res) => {
    config = {
        status: true,
    }
    res.json(config)
})

module.exports = router
