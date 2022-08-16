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
router.get('/notFound', notFound);
router.get('/main', main);
router.get('/addquestion', addquestion);
router.get('/register', register);
router.get('/trivias', trivias);
router.get('/loggedIn', loggedIn);
router.get('/registered', registered);
router.get('/sendQuestions', sendQuestions);
router.get('/questions', questions);
router.get('/score', score);
router.get('/trivia', trivia);
router.get('/validate', validate);

module.exports = {
     routes: router
}