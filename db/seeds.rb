
Book.destroy_all

books = [
  {
    title: 'Dune',
    author: 'Frank Herbert',
    description: 'A classic science fiction novel about an interstellar society in a far future.',
    price: 19.99,
    image_url: 'dune.jpg'
  },
  {
    title: '1984',
    author: 'George Orwell',
    description: 'A dystopian novel set in Airstrip One, formerly Great Britain, a province of the superstate Oceania.',
    price: 14.99,
    image_url: '1984.jpg'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    description: 'The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.',
    price: 17.99,
    image_url: 'mockingbird.jpg'
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description: 'A portrait of the Jazz Age in all of its decadence and excess, Gatsby captured the spirit of the author\'s generation and earned itself a permanent place in American mythology.',
    price: 15.99,
    image_url: 'gatsby.jpg'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    description: 'A great modern classic and the prelude to The Lord of the Rings. Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar.',
    price: 22.99,
    image_url: 'hobbit.jpg'
  }
]

books.each do |book|
  Book.create!(book)
end

