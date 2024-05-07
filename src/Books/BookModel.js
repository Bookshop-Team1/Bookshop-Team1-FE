import baseApi from "../BaseApi";

export default class BookModel {
  constructor(args) {
    this._id = args.id;
    this._title = args.name;
    this._author = { name: args.authorName };
    this._price = args.price;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  get authorName() {
    return this._author.name;
  }

  get price() {
    return this._price.currency + " " + this._price.amount;
  }

  static fetchAll = async () => {
    const response = await baseApi.get("/books");
    return response.data.map((book) => new BookModel(book));
  };
}
