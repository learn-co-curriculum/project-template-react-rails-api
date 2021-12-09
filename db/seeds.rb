puts "Resetting database..."
Avatar.destroy_all
Avatar.reset_pk_sequence
User.destroy_all
User.reset_pk_sequence
Question.destroy_all
Question.reset_pk_sequence


puts "Seeding avatars..."
adventurer = Avatar.create(name: "Adventurer", img_url: "/images/avatars/adventurer_looking.png")
hiker = Avatar.create(name: "Hiker", img_url: "/images/avatars/adventurer_walkingstick.png")
archer = Avatar.create(name: "Archer", img_url: "/images/avatars/bow.png")
crossbow = Avatar.create(name: "Arbalist", img_url: "/images/avatars/crossbow.png")
dragon = Avatar.create(name: "Dragon", img_url: "/images/avatars/dragon.png")
druid = Avatar.create(name: "Druid", img_url: "/images/avatars/druid.png")
knight = Avatar.create(name: "Knight", img_url: "/images/avatars/knight.png")
sorcerer = Avatar.create(name: "Sorcerer", img_url: "/images/avatars/magician.png") 
wizard = Avatar.create(name: "Wizard", img_url: "/images/avatars/wizard.png")

puts "Seeding users..."
user1 = User.create(username: "Alex", password: "123", avatar_id: dragon.id)
user2 = User.create(username: "Joshua", password: "123", avatar_id: crossbow.id)
user3 = User.create(username: "Shannon", password: "123", avatar_id: sorcerer.id)

puts "Seeding questions..."
q1 = Question.create(
    prompt: "As you embark on your journey to the peak of Mount Algo, a gatekeeper blocks your path at the trailhead. \"Halt! You must prove yourself worthy of the journey before you may proceed.\" They present you with the following question.",
    question: "\"If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.\"",
    answer: '233168')
q2 = Question.create(
    prompt: "With the gatekeeper satisfied, you enter the trailhead. Before long, you come across an imposing elf blocking the path. \"You wish to continue? You must get past me first! I demand a show of wits!\"",
    question: "The factors of 18 are 1, 2, 3, 6, 9, and 18, which sum to 39. What is the sum of all the factors of 1984?",
    answer: "4064")
q3 = Question.create(
    prompt: "The elf lets you pass, though he looked resentful of your good fortune. You best watch your back for the rest of the journey. You walk for what feels like hours, until you come to an inn along the path. Three individuals sit at a table just outside: a mage, a barkeep, and a knight. They are playing a game where they each take turns moving, while they have one masked observer. The masked observer speaks to you, \"I'll make you a deal. If you answer my question correctly, you'll be allowed to pass unharmed, and I'll even give you a hint to what lies ahead. But if you're wrong, you'll be stuck here playing this menial game for my enjoyment.\" He cackles.",
    question: "\"The mage went first, followed by the barkeep, then the knight, then back to the mage. The seventh turn was the mage's. Who's turn is the 867th turn?\"",
    answer: "knight")
q4 = Question.create(
    prompt: "The masked observer let you pass, but his hint was only, \"For every calculation, there are many paths. But every path has only one proper order.\" You know the summit is near when you come across a grove where an hermit resides. He comes out of his hut as you approach. With a crazed look in his eyes, he proclaims enigmatically, \"Get past me and nothing will stand between you and the summit! Except, perhaps, the Cylean.\" You don't know what that is, but that doesn't matter until you pass this next test. The hermit continues.",
    question: "\"You must tell me the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum. Then you will be allowed to continue!\"",
    answer: "25164150")
q5 = Question.create(
    prompt: "After you get past the hermit, you get on your way. Back on the path, you forge ahead until the trees start to clear - the summit is in sight! There stands a being unlike any you've seen before; this must be the Cylean, and hovering in the air beside them is a large glowing cube. You approach and they say, \"I'm impressed! Few make it this far. But every challenge you've faced was nothing compared to this. This cube beside me holds within it several smaller cubes, each one cubic unit.\" It is at that moment you notice faint grid lines forming squares across the surface of the cube.",
    question: "\"Assuming each edge is 37 units long and the cube is completely solid, how many smaller cubes are enclosed within and hidden from view?\"",
    answer: "42875")

puts "Done seeding!"


