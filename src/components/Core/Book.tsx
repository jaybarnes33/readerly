import Image from "next/image";
const Book = ({ book }) => {
  return (
    <>
      <div className="book_wrapper">
        <div className="book_image">
          <Image src={book.image} alt={book.name} layout="fill" />
        </div>
        <div className="book_text">
          <h2>{book.name}</h2>
          <h3>{book.author}</h3>
        </div>
      </div>

      <style jsx>
        {`
          .book_wrapper {
            margin-left: 30px;
            cursor: pointer;
          }

          .book_image {
            position: relative;
            height: 190px;
            width: 165px;
          }

          .book_text {
            text-align: center;
            letter-spacing: 0.01rem;
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
