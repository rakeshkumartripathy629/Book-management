const express = require('express')
const userController = require('../controller/userController')
const booksControllers = require('../controller/BooksControllers')
const reviewController = require('../controller/reviewController')
const middleware = require('../middleware/auth')

const router = express.Router();

router.post('/register', userController.createUser)
router.post('/login', userController.loginUser)


router.post('/books', middleware.authentication, middleware.authorization1, booksControllers.createBooks)
router.get('/books', middleware.authentication, booksControllesr.getBooks)
router.get('/books/:bookId', middleware.authentication, booksControllers.getBooksById)
router.put('/books/:bookId', middleware.authentication, middleware.authorization2, booksControllers.updateBooksById)
router.delete('/books/:bookId', middleware.authentication, middleware.authorization2, booksControllers.deleteBooksById)


router.post('/books/:bookId/review', reviewController.addreviewsById)
router.put('/books/:bookId/review/:reviewId', reviewController.updateReview)
router.delete('/books/:bookId/review/:reviewId', reviewController.deleteReview)

module.exports = router;