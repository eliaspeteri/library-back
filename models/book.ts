import { model, Schema } from 'mongoose';

/* Types */
import { Book } from '../types';

export interface IBook extends Document {
  author: string;
  description: string;
  title: string;
}

const bookSchema: Schema = new Schema<Book>({
  author: {
    type: String,
    required: true,
    minlength: 3
  },
  description: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true,
    minlength: 3
  }
});

bookSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

export default model<IBook>('Book', bookSchema);
