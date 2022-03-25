u1 = User.create(username:"Sam", password_digest:"123", name:"yoon", email:"yoon@gmail.com", photo:"", age:1, location:"newyork")

u2 = User.create(username:"paul", password_digest:"4321", name:"dan", email:"dan@gmail.com", photo:"", age:2, location:"Virginia")

u3 = User.create(username:"greg", password_digest:"9874", name:"Ve", email:"Ve@gmail.com", photo:"", age:3, location:"newyork")

l1 = Like.create(user_id:u1.id, liked_person_id:u3.id)
l2 = Like.create(user_id:u2.id, liked_person_id:u1.id)
l3 = Like.create(user_id:u3.id, liked_person_id:u1.id)

m1 = Match.create(message:"hi", like_id: l1.id)
