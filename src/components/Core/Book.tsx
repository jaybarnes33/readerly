import { Image } from "react-bootstrap";
const Book = ({ book }) => {
  return (
    <>
      <div className="book_wrapper">
        <Image className="book_image" src={book.image} alt={book.name} />
        <div className="book_text">
          <h2>{book.name}</h2>
          <h3>{book.author}</h3>
        </div>
      </div>

      <style jsx>
        {`
          .book_wrapper {
            margin-left: 30px;
          }

          .book_text {
            text-align: center;
          }

          .book_text h2 {
            font-size: 1rem;
            color: #ffffff;
          }

          .book_text h3 {
            font-size: 1rem;
            color: #b3bfff;
          }
        `}
      </style>
    </>
  );
};

export default Book;
