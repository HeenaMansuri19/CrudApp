const express = require('express')
const router = express.Router()
const user = require('../controllers/userController')

router.get('/get_user', user.getUser)
router.post('/create_user',user.createUser)
//router.update('/update_user,user.updateUser')
//router.deleteUser('/delete_user,useController')

module.exports = router