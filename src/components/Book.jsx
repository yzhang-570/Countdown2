const Book = ({ bookInfo }) => {
  return (
    <>
      {/* Displays title, author, $price */}
      <p><i>{bookInfo.title}</i>, {bookInfo.author}, ${bookInfo.price}</p>
    </>
  )
}

export default Book;