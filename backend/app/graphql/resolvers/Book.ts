interface Book {
  id: number;
  title: string;
  author: number;
}

const books: Book[] = [
  { id: 1, title: "Book A", author: 1 },
  { id: 2, title: "Book B", author: 2 }
];

const resolvers = {
  Query: {
    book: (parent: unknown, args: { id: number }) => books.find((book: Book) => book.id == args.id),
    books: () => books,
  }
}

export default resolvers;