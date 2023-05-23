import express from 'express'
import { getAllUsers, getBooksByGener, getBooksByGenerandPulic, getUpdateBooksPrice } from './user.controller'
// import { createUser, getAllUsers, getUserById } from './user.controller'
const router=express.Router()

//get all user
router.get("/", getAllUsers)

//findbooksby gener secondassignment
router.get("/genre/:genre", getBooksByGener)

//third assignment router
router.get("/sci-fi/roli-books", getBooksByGenerandPulic)

//fifth assignment router
router.put('/updatebooksprice', getUpdateBooksPrice)

// //post user
// router.post("/create-user", createUser)

// //findone user router
// router.get("/:id", getUserById)

export default router