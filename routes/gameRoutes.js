const express = require('express');
const {
    login,
    notFound,
    main,
    addquestion,
    register,
    trivias,
    loggedIn,
    registered,
    sendQuestions,
    questions,
    score,
    trivia,
    validate
} = require('../controllers/gameController')
const router = express.Router()

//Rutas

router.get('/login', login);
router.get('/main', main);
router.get('/addquestion', addquestion);
router.get('/register', register);
router.get('/trivias', trivias);
router.post('/loggedIn', loggedIn);
router.get('/registered', registered);
router.post('/sendQuestions', sendQuestions);
router.get('/questions', questions);
router.get('/score', score);
router.get('/trivia', trivia);
router.get('/validate', validate);
router.get('/*', notFound);

module.exports = {
     routes: router
}