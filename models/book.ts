import { model, Schema } from 'mongoose';

/* Types */
import { Book } from '../types';

export interface IBook extends Document {
  author: string;
  description?: string;
  title: string;
  whenCreated: Date;
}

const BookSchema: Schema = new Schema<Book>({
  author: {
    type: String,
    required: true,
    minlength: 3,
    unique: true
  },
  description: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true,
    minlength: 3
  },
  whenCreated: {
    type: Date,
    required: true
  }
});

BookSchema.set('toJSON', {
  transform: (_document, returnedObject): void => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

export default model<IBook>('Book', BookSchema);
