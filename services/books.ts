/** Types */
import { Book } from '../types';

/** Book (Mongoose) Model */
import BookModel from '../models/book';

const findById = async (id: string): Promise<Book | null> =>
  await BookModel.findById(id);

const getAll = async (): Promise<Book[]> => await BookModel.find({});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getLimited = async (limit: any): Promise<Book[]> =>
  await BookModel.find({}).limit(limit);

const removeOne = async (id: string): Promise<unknown> =>
  await BookModel.findByIdAndRemove(id);

const updateOne = async (
  id: string,
  obj: Record<string, unknown>
): Promise<string> => {
  await BookModel.findByIdAndUpdate(id, obj);
  return 'Book updated successfully.';
};

const saveOne = async (book: Book): Promise<string> => {
  const newBook = new BookModel({
    ...book,
    whenCreated: new Date()
  });

  await newBook.save();
  return 'New Book posted successfully.';
};

const BookService = {
  findById,
  getAll,
  getLimited,
  removeOne,
  updateOne,
  saveOne
};

export default BookService;
