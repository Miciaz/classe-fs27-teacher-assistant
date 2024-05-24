const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "fiction", published: true },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "fiction", published: true },
    { title: "1984", author: "George Orwell", genre: "fiction", published: false },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "fiction", published: true },
    { title: "Pride and Prejudice", author: "Jane Austen", genre: "romance", published: true },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", genre: "fantasy", published: true },
    { title: "The Tenant of Wildfell Hall", author: "Anne Bronte", genre: "fiction", published: true },
    { title: "The Picture of Dorian Gray", author: "Oscar Wilde", genre: "fiction", published: false }
  ];

  function filteredBooks(arr) {
    const filteredBook = arr.filter(el => 
        { return el.published && el.genre === 'fiction' && el.title.startsWith('T')})

    console.log(filteredBook)
  }

  filteredBooks(books)