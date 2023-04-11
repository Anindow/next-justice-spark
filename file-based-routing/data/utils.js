export const books = [{
    id: "1",
    name: "mindset",
    description: "this is my first book",
},
{
    id: "2",
    name: "the secret",
    description: "this is my first book",
},
{
    id: "3",
    name: "anything",
    description: "this is my first book",
},
{
    id: "4",
    name: "something",
    description: "this is my first book",
},
]
export const fetchBookFromID = (id) => {
    const fetchedBook = books.find((book) => book.id === id);
    return fetchedBook;
}