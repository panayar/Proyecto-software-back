const Routes = require('Express');
const router = Routes.Router();

const user_controller = require('../controllers/user.controller');


router.get('/', (req, res) => {
    res.send('Hello World');
});

router.post('/create', (req, res) => {
    user_controller.createUser(req, res);
});

router.get('/users', (req, res) => {
    user_controller.getUsers(req, res);
});

router.delete('/delete', (req, res) => {
    user_controller.deleteUser(req, res);
});



module.exports = router;