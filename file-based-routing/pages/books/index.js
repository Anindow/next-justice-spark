import { books } from "../../data/utils";
import Link from "next/link";
function BookHome() {
  return (
    <div
      style={{
        width: 300,
        background: "gray",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      {books.map((book, index) => (
        <div key={index}>
          <h1>{book.name}</h1>
          <p>{book.description}</p>
          <article
            style={{
              border: "1px solid black",
              padding: 12,
              background: "#ccc",
            }}>
            <Link href={`/books/${book.id}`}>Detail</Link>
          </article>
        </div>
      ))}
    </div>
  );
}
export default BookHome;
