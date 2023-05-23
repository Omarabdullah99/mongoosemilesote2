

import { Request,Response, NextFunction } from "express";
import { findBooksByGenre, findBooksByGenreAndPublisher, getAllBooksModelFromDb, updateBookPrices } from "./user.service";
// //get all users
export const getAllUsers=async (req: Request, res: Response, next:NextFunction) => {
    const user=await getAllBooksModelFromDb()
    res.status(200).json({
      status:"success",
      data:user
    }) 
  }

  // //findbooksgener
  // findBooksByGenre('Fantasy')
  // .then((books) => {
  //   console.log(books);
  // })
  // .catch((error) => {
  //   console.error(error);
  // });

  //findbooksgener second assignment
  export const getBooksByGener=async (req: Request, res: Response, next:NextFunction) => {
    const gener= req.params.genre
    const findbooksgener=await findBooksByGenre(gener)
    res.status(200).json({
      status:"success",
      data:findbooksgener
    }) 
  }

  //third assignment
  export const getBooksByGenerandPulic=async (req: Request, res: Response, next:NextFunction) => {
    const findbooksgener=await findBooksByGenreAndPublisher('Sci-Fi', 'Roli Books')
    res.status(200).json({
      status:"success",
      data:findbooksgener
    }) 
  }

  //fifth assignment

 export const getUpdateBooksPrice=async (req: Request, res: Response, next:NextFunction) => {
    const updateBooksPrice=await updateBookPrices()
    res.status(200).json({
      status:"success",
      data:updateBooksPrice
    }) 
  }