import mongoose from 'mongoose'

//app.ts file ta import kora
import app from './app';

const port:number = 3000

//mongoose database connection
async function bootstrap() {
 try {
  await mongoose.connect('mongodb://127.0.0.1:27017/booksdb');
  console.log(`database connections successfully`)

  app.listen(port, () => {
    console.log(`server app listening on port ${port}`)
  })
  
 } catch (error) {
  console.log( `failed to database connection`, error)
 }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
bootstrap()



