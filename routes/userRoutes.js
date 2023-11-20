const express = require('express');
const router = express.Router();

const {
  getAll,
  getByID,
  login,
  register,
  updateByID,
  switchToAdmin,
  deleteByID,
} = require('../controllers/userController');
const isAuthenticated = require('../middlewares/isAuth');

router.get('/getAll', getAll);
router.get('/getByID/:ID', getByID);
router.post('/login', login);
router.post('/register', register);
router.put('/update/:ID', isAuthenticated(['organizer', 'admin']), updateByID);
router.put(
  '/switchToAdmin/:ID',
  isAuthenticated(['admin', 'organizer']),
  switchToAdmin
);
router.delete('/delete/:ID', isAuthenticated(['admin']), deleteByID);

module.exports = router;
