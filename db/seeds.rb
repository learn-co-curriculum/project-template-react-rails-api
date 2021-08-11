# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Creating users..."
User.create(name: 'Jack', password: 'book', fav_genre: 'fantasy', bio: 'A bibliophile who owns at least 7 copies of The Lord of the Rings')
User.create(name: 'Emily', password: 'book', fav_genre: 'horror', bio: "Nursing student who doesn't even have the time to read")
User.create(name: 'Melissa', password: 'book', fav_genre: 'adventure', bio: 'Manga all the way')
User.create(name: 'James', password: 'book', fav_genre: 'western', bio: 'Rootin tootin cowboys yeehaw!')
User.create(name: 'Brandi', password: 'book', fav_genre: 'romance', bio: 'I need more bookshelves')


puts "Creating books..."
Book.create(title: 'The Lord of the Rings', author: 'J. R. R. Tolkien', genre: 'fantasy', length: '1197 pages', pub_date: 'July 29, 1954', image: 'https://m.media-amazon.com/images/I/51bJhsl5VmL.jpg')
Book.create(title:'House of Leaves', author: 'Mark Z. Danielewski', genre: 'horror', length: '738 pages', pub_date: 'March 7, 2000', image: 'https://images-na.ssl-images-amazon.com/images/I/810pcXb+l3L.jpg')
Book.create(title:'The Sun Also Rises', author: 'Ernest Hemingway', genre: 'romance', length: '320 pages', pub_date: 'October 22, 1926', image: 'https://images-na.ssl-images-amazon.com/images/I/51cj37KTLRL._SX322_BO1,204,203,200_.jpg')
Book.create(title:'Leaves of Grass', author: 'Walt Whitman', genre: 'poetry', length: '128 pages', pub_date: 'July 4, 1855', image: 'https://images-na.ssl-images-amazon.com/images/I/71ZUAQQ-9IL.jpg')
Book.create(title:'Blood of Elves', author: 'Andrzej Sapkowski', genre: 'fantasy', length: '285 pages', pub_date: 'May 1, 2009', image: 'https://bookaudiobook.com/wp-content/uploads/2019/03/51DWHKXcFaL._SX293_BO1,204,203,200_.jpg')
Book.create(title:'Pride and Prejudice', author: 'Jane Austen', genre: 'romance', length: '408 pages', pub_date: 'January 28, 1813', image: 'https://m.media-amazon.com/images/I/51tiK-eB3JL.jpg')
Book.create(title:'Naruto, Vol. 1', author: 'Masashi Kishimoto', genre: 'manga', length: '192 pages', pub_date: 'March 1, 2000', image: 'https://images-na.ssl-images-amazon.com/images/I/51BucomQlHL._SX333_BO1,204,203,200_.jpg')
Book.create(title:'Demon Slayer: Kimetsu no Yaiba, Vol. 1', author: 'Koyoharu Gotouge', genre: 'manga', length: '193 pages', pub_date: 'June 3, 2016', image: 'https://images-na.ssl-images-amazon.com/images/I/81ZNkhqRvVL.jpg')
Book.create(title:'The Shining', author: 'Stephen King', genre: 'horror', length: '447 pages', pub_date: 'January 28, 1977', image: 'http://prodimage.images-bn.com/pimages/9780345806789_p0_v2_s1200x630.jpg')
Book.create(title:'A Game of Thrones', author: 'George R. R. Martin', genre: 'fantasy', length: '968 pages', pub_date: 'August 1, 1996', image: 'https://images-na.ssl-images-amazon.com/images/I/91dSMhdIzTL.jpg')
Book.create(title:'Bleach, Vol. 1', author: 'Tite Kubo', genre: 'manga', length: '192 pages', pub_date: 'January 1, 2006', image: 'https://images-na.ssl-images-amazon.com/images/I/81vbN16NtXL.jpg')
Book.create(title:'Lonesome Dove', author: 'Larry McMurtry', genre: 'western', length: '866 pages', pub_date: 'March 7, 1985', image: 'https://books.images.hpb.com/9780606351140/large.jpg')
Book.create(title:'Blood Meridian', author: 'Cormac McCarthy', genre: 'western', length: '349 pages', pub_date: 'April 2, 1985', image: 'https://images-na.ssl-images-amazon.com/images/I/71dbYRTINQL.jpg')
Book.create(title:'The Virginian', author: 'Owen Wister', genre: 'western', length: '504 pages', pub_date: 'December 7, 1902', image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781625581587/the-virginian-9781625581587_hr.jpg')
Book.create(title:'Frankenstein', author: 'Mary Shelley', genre: 'horror', length: '280 pages', pub_date: 'March 7, 1817', image: 'https://prodimage.images-bn.com/pimages/9798681827177_p0_v1_s550x406.jpg')
Book.create(title:'The Hobbit', author: 'J. R. R. Tolkien', genre: 'fantasy', length: '318 pages', pub_date: 'September 21, 1937', image: 'https://images-na.ssl-images-amazon.com/images/I/61aqO0sPF+L._SX329_BO1,204,203,200_.jpg')
Book.create(title:"A Connecticut Yankee in King Arthur's Court", author: 'Mark Twain', genre: 'adventure', length: '528 pages', pub_date: 'March 7, 1889', image: 'https://images-na.ssl-images-amazon.com/images/I/71Dp24QXhOL.jpg')
Book.create(title: "The Hitchhiker's Guide to the Galaxy", author: 'Douglas Adams', genre: 'science fiction', length: '208 pages', pub_date: 'October 12, 1979', image: 'https://images-na.ssl-images-amazon.com/images/I/81XSN3hA5gL.jpg')
Book.create(title:'Dune', author: 'Frank Herbert', genre: 'science fiction', length: '722 pages', pub_date: 'August 18, 1965', image: 'https://images-na.ssl-images-amazon.com/images/I/91Fq9Amx0pL.jpg')
Book.create(title:'Neuromancer', author: 'William Gibson', genre: 'science fiction', length: '292 pages', pub_date: 'July 1, 1984', image: 'https://images-na.ssl-images-amazon.com/images/I/81N1TtCPxOL.jpg')
Book.create(title:'To Kill a Mockingbird', author: 'Harper Lee', genre: 'adventure', length: '342 pages', pub_date: 'July 11, 1960', image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383690l/2657.jpg')
Book.create(title:'Anna Karenina', author: 'Leo Tolstoy', genre: 'romance', length: '864 pages', pub_date: 'March 7, 1877', image: 'https://images-na.ssl-images-amazon.com/images/I/41ebi9z2DjL.jpg')
Book.create(title:'The Tale of Genji', author: 'Murasaki Shikibu', genre: 'romance', length: '1300 pages', pub_date: '1008', image: 'https://m.media-amazon.com/images/I/61YCVIKjlSL.jpg')
Book.create(title:'Moby Dick', author: 'Herman Melville', genre: 'adventure', length: '378 pages', pub_date: 'October 18, 1851', image: 'https://images-na.ssl-images-amazon.com/images/I/41VnFKC9srL.jpg')
Book.create(title:'One Hundred Years of Solitude', author: 'Gabriel García Márquez', genre: 'fantasy', length: '433 pages', pub_date: 'March 7, 1967', image: 'https://images-na.ssl-images-amazon.com/images/I/91mftQtgAkL.jpg')

puts "Creating shelves..."
Shelf.create(user_id: 1, book_id: 1)
Shelf.create(user_id: 1, book_id: 2)
Shelf.create(user_id: 1, book_id: 12)
Shelf.create(user_id: 1, book_id: 15)
Shelf.create(user_id: 1, book_id: 16)
Shelf.create(user_id: 1, book_id: 21)
Shelf.create(user_id: 1, book_id: 23)
Shelf.create(user_id: 1, book_id: 25)
Shelf.create(user_id: 3, book_id: 7)
Shelf.create(user_id: 3, book_id: 8)
Shelf.create(user_id: 3, book_id: 11)
Shelf.create(user_id: 4, book_id: 12)
Shelf.create(user_id: 4, book_id: 13)
Shelf.create(user_id: 4, book_id: 14)
Shelf.create(user_id: 4, book_id: 17)
Shelf.create(user_id: 5, book_id: 3)
Shelf.create(user_id: 5, book_id: 6)
Shelf.create(user_id: 5, book_id: 22)
Shelf.create(user_id: 5, book_id: 23)



puts "Creating reviews..."
Review.create(book_id: 1, rating: 10, content: 'Came for the dwarf but stayed for the prose')
Review.create(book_id: 1, rating: 10, content: 'Best book ever')
Review.create(book_id: 1, rating: 10, content: 'We all need a Sam')
Review.create(book_id: 2, rating: 7, content: "I didn't understand any of it. Absolutely amazing.")
Review.create(book_id: 7, rating: 8, content: "Ninjas are cool")
Review.create(book_id: 7, rating: 6, content: "Had to start reading when I finished the anime")
Review.create(book_id: 12, rating: 9, content: "The pigs were the best part. I cried a lot.")
Review.create(book_id: 15, rating: 4, content: "It's jsut letters?")
Review.create(book_id: 15, rating: 10, content: "A masterpiece of literature")