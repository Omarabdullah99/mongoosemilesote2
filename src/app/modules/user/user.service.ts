
import { books,} from "./user.interface";
import { IBook } from "./user.interface";

// get all user
  export const getAllBooksModelFromDb=async()=>{
    const users= await books.find()
    return users
  }

  //second assignment
  export async function findBooksByGenre(genre: string): Promise<IBook[]> {
    try {
      const findBooks = await books.find({ genre: genre })
      return findBooks
    } catch (error) {
      // Handle error
      throw new Error('Failed to retrieve books by genre');
    }
  }

  //third assignment
 export async function findBooksByGenreAndPublisher(genre: string, publisherName: string): Promise<IBook[]> {
    try {
      const findgenerandpublic = await books.find({ genre: genre, 'publisher.name': publisherName })
      return findgenerandpublic;
    } catch (error) {
      // Handle error
      throw new Error('Failed to retrieve books by genre and publisher');
    }
  }

  //fifth assignment
 export async function updateBookPrices() {
    try {
      const updateResult = await books.updateMany(
        { publicationYear: { $gt: 2020 }, price: { $type: 'string' } },
        [
          {
            $set: {
              price: {
                $toInt: "$price"
              }
            }
          }
        ]
      )
      return updateResult
    } catch (error) {
      // Handle error
      console.error('Failed to update book prices:', error);
    }
  }

  