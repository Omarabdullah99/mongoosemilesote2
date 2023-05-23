
import mongoose, { Document, Schema } from 'mongoose';

// Interface for Book document
interface IBook extends Document {
  title: string;
  author: string[];
  genre: string;
  publicationYear: number;
  publisher: {
    name: string;
    location: string;
  };
  reviews: {
    user: string;
    comment: string;
  }[];
  rating: number;
  price: number | string;
}

interface IFeaturedBook extends IBook {
  featured: string;
}

// Book schema
const BookSchema: Schema<IBook> = new Schema<IBook>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: [String],
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    publicationYear: {
      type: Number,
      required: true,
    },
    publisher: {
      name: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
    },
    reviews: {
      type: [
        {
          user: {
            type: String,
            required: true,
          },
          comment: {
            type: String,
            required: true,
          },
        },
      ],
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    price: {
      type: Schema.Types.Mixed,
      required: true,
    },
    

    
  },
  { timestamps: true } // Optional: Include timestamps for created and updated dates
);

// Create and export the Book model
const books = mongoose.model<IBook>('Book', BookSchema);

export { books , IBook };
