# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "🌱 Seeding users..."
User.create(
    username: "roll20",
    name: "Jay",
    password: "12345",
    favorite: "Gloomhaven, Wingspan, Root",
    email: "jay@gloomhaven.com"
)
User.create(
    username: "the_pupper",
    name: "Reece",
    password: "12345",
    favorite: "Good Dog, Bad Zombie; Dead of Winter",
    email: "reece@the_pupper.com"
)
puts "🌱🌱🌱 Users seeded!!! 🌱🌱🌱"
puts "🌱 Seeding Boardgames..."
Boardgame.create(
    name: "Gloomhaven",
    picture_url: "https://cf.geekdo-images.com/sZYp_3BTDGjh2unaZfZmuA__imagepage/img/pBaOL7vV402nn1I5dHsdSKsFHqA=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2437871.jpg",
    num_players: "1-4",
    description: "Gloomhaven is a game of Euro-inspired tactical combat in a persistent world of shifting motives. Players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world. Players must work together out of necessity to clear out menacing dungeons and forgotten ruins. In the process, they will enhance their abilities with experience and loot, discover new locations to explore and plunder, and expand an ever-branching story fueled by the decisions they make.

    This is a game with a persistent and changing world that is ideally played over many game sessions. After a scenario, players will make decisions on what to do, which will determine how the story continues, kind of like a “Choose Your Own Adventure” book. Playing through a scenario is a cooperative affair where players will fight against automated monsters using an innovative card system to determine the order of play and what a player does on their turn.
    
    Each turn, a player chooses two cards to play out of their hand. The number on the top card determines their initiative for the round. Each card also has a top and bottom power, and when it is a player’s turn in the initiative order, they determine whether to use the top power of one card and the bottom power of the other, or vice-versa. Players must be careful, though, because over time they will permanently lose cards from their hands. If they take too long to clear a dungeon, they may end up exhausted and be forced to retreat.",
    genre: "Table Top RPG",
    est_time: "60-120 minutes per dungeon",
    user_id: 1,
    borrow: false, 
    available: false
)
Boardgame.create(
    name: "Wingspan",
    picture_url: "https://cf.geekdo-images.com/yLZJCVLlIx4c7eJEWUNJ7w__imagepage/img/uIjeoKgHMcRtzRSR4MoUYl3nXxs=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4458123.jpg",
    num_players: "1-5",
    description: "Wingspan is a competitive, medium-weight, card-driven, engine-building board game from Stonemaier Games. It's designed by Elizabeth Hargrave and features over 170 birds illustrated by Beth Sobel, Natalia Rojas, and Ana Maria Martinez.

    You are bird enthusiasts—researchers, bird watchers, ornithologists, and collectors—seeking to discover and attract the best birds to your network of wildlife preserves. Each bird extends a chain of powerful combinations in one of your habitats (actions). These habitats focus on several key aspects of growth:
    
    Gain food tokens via custom dice in a birdfeeder dice tower
    Lay eggs using egg miniatures in a variety of colors
    Draw from hundreds of unique bird cards and play them
    The winner is the player with the most points after 4 rounds.
    
    If you enjoy Terraforming Mars and Gizmos, we think this game will take flight at your table.",
    genre: "Strategy",
    est_time: "50-70 minutes",
    user_id: 1,
    borrow: true, 
    available: false
)
Boardgame.create(
    name: "Root",
    picture_url: "https://cf.geekdo-images.com/JUAUWaVUzeBgzirhZNmHHw__imagepage/img/ZF-dta5ffawuKAkAt2LB-QTIv5M=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4254509.jpg",
    num_players: "2-4",
    description: "Root is a game of adventure and war in which 2 to 4 (1 to 6 with the 'Riverfolk' expansion) players battle for control of a vast wilderness.

    The nefarious Marquise de Cat has seized the great woodland, intent on harvesting its riches. Under her rule, the many creatures of the forest have banded together. This Alliance will seek to strengthen its resources and subvert the rule of Cats. In this effort, the Alliance may enlist the help of the wandering Vagabonds who are able to move through the more dangerous woodland paths. Though some may sympathize with the Alliance’s hopes and dreams, these wanderers are old enough to remember the great birds of prey who once controlled the woods.
    
    Meanwhile, at the edge of the region, the proud, squabbling Eyrie have found a new commander who they hope will lead their faction to resume their ancient birthright. The stage is set for a contest that will decide the fate of the great woodland. It is up to the players to decide which group will ultimately take root.",
    genre: "Strategy",
    est_time: "60-90 minutes",
    user_id: 1,
    borrow: true, 
    available: true
)
Boardgame.create(
    name: "Good Dog, Bad Zombie",
    picture_url: "https://cf.geekdo-images.com/rQkNKfuNHy6dQhfXUIn1OA__imagepage/img/81VJRp98V3fGHvbceTr6CIX3up8=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3977966.png",
    num_players: "2-4",
    description: "In Good Dog, Bad Zombie, you bark, sniff, and lick your way through the apocalypse to save the hoomans you love. Zombies roam the city, but you and your doggo friends have found refuge in Central Bark. You’ll have to cooperate as a pack of dogs to sniff out hoomans in hiding and bring them back to safety. But beware! The danger of the city could turn your pack feral before you get a chance to build your forever home.

    GDBZ aims to provide players with an immersive dog's-eye-view of the zombie apocalypse. Track down the hoomans from their smells, lick one another for boosts of energy, and bark at anything and everything!
    
    On their turns, each player may take two actions, which can consist of running to different locations, playing energy cards from their hands, sniffing scent tokens, and giving each other licks in order to draw more energy. Each energy card has an ability, such as: Run, Herd, Bark, Chew, and Good Doggo, the last of which allows each dog to perform a unique and powerful ability. Some cards can be chained together for elaborate, tactical turns. At the end of each player's turn they will have to roll the dice in order to add another zombie to the board, which may eat unsuspecting hoomans or get into Central Bark.
    
    If too many hoomans are eaten or too many zombies get into Central Bark, the Feral Tracker will reach 10 - and we become wild dogs, forgetting our love of hoomanity. However, if the players rescue enough hoomans (6 on easier difficulties, and 8 on expert modes), we all win the game!",
    genre: "Co-operative Strategy",
    est_time: "60-90 minutes",
    user_id: 2,
    borrow: false, 
    available: false
)
Boardgame.create(
    name: "Dead of Winter: A Crossroads Game",
    picture_url: "https://cf.geekdo-images.com/g4mV4BH-ZrhMUVgil-yV1A__imagepage/img/CJ6erNGmKfFGhR6ZbxXbBI7XaoE=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3016500.jpg",
    num_players: "2-5",
    description: "Crossroads is a game series from Plaid Hat Games that tests a group of survivors' ability to work together and stay alive while facing crises and challenges from both outside and inside. Dead of Winter: A Crossroads Game, the first title in this series, puts 2-5 players in a small, weakened colony of survivors in a world in which most of humanity is either dead or diseased, flesh-craving monsters. Each player leads a faction of survivors, with dozens of different characters in the game.

    Dead of Winter is a meta-cooperative psychological survival game. This means players are working together toward one common victory condition, but for each individual player to achieve victory, they must also complete their personal secret objective, which could relate to a psychological tick that's fairly harmless to most others in the colony, a dangerous obsession that could put the main objective at risk, a desire for sabotage of the main mission, or (worst of all) vengeance against the colony! Games could end with all players winning, some winning and some losing, or all players losing. Work toward the group's goal, but don't get walked all over by a loudmouth who's looking out only for their own interests!
    
    Dead of Winter is an experience that can be accomplished only through the medium of tabletop games, a story-centric game about surviving through a harsh winter in an apocalyptic world. The survivors are all dealing with their own psychological imperatives, but must still find a way to work together to fight off outside threats, resolve crises, find food and supplies, and keep the colony's morale up.
    
    Dead of Winter has players making frequent, difficult, heavily-thematic, wildly-varying decisions that often have them deciding between what's best for the colony and what's best for themselves. The rulebook also includes a fully co-operative variant in which all players work toward the group objective with no personal goals.",
    genre: "Co-operative Strategy",
    est_time: "60-120 minutes",
    user_id: 2,
    borrow: true, 
    available: false
)
Boardgame.create(
    name: "7 Wonders",
    picture_url: "https://cf.geekdo-images.com/RvFVTEpnbb4NM7k0IF8V7A__imagepage/img/zruHYxY2_jx-796WgsDj7hitidQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic860217.jpg",
    num_players: "2-7",
    description: "You are the leader of one of the 7 great cities of the Ancient World. Gather resources, develop commercial routes, and affirm your military supremacy. Build your city and erect an architectural wonder which will transcend future times.

    7 Wonders lasts three ages. In each age, players receive seven cards from a particular deck, choose one of those cards, then pass the remainder to an adjacent player. Players reveal their cards simultaneously, paying resources if needed or collecting resources or interacting with other players in various ways. (Players have individual boards with special powers on which to organize their cards, and the boards are double-sided). Each player then chooses another card from the deck they were passed, and the process repeats until players have six cards in play from that age. After three ages, the game ends.
    
    In essence, 7 Wonders is a card development game. Some cards have immediate effects, while others provide bonuses or upgrades later in the game. Some cards provide discounts on future purchases. Some provide military strength to overpower your neighbors and others give nothing but victory points. Each card is played immediately after being drafted, so you'll know which cards your neighbor is receiving and how her choices might affect what you've already built up. Cards are passed left-right-left over the three ages, so you need to keep an eye on the neighbors in both directions.",
    genre: "Strategy",
    est_time: "30 minutes",
    user_id: 1,
    borrow: true, 
    available: true
)
Boardgame.create(
    name: "Everdell",
    picture_url: "https://cf.geekdo-images.com/fjE7V5LNq31yVEW_yuqI-Q__imagepage/img/ijYTk6KGtxLRdIvLsGar13ZHs4c=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3918905.png",
    num_players: "1-4",
    description: "Within the charming valley of Everdell, beneath the boughs of towering trees, among meandering streams and mossy hollows, a civilization of forest critters is thriving and expanding. From Everfrost to Bellsong, many a year have come and gone, but the time has come for new territories to be settled and new cities established. You will be the leader of a group of critters intent on just such a task. There are buildings to construct, lively characters to meet, events to host—you have a busy year ahead of yourself. Will the sun shine brightest on your city before the winter moon rises?

    Everdell is a game of dynamic tableau building and worker placement.
    
    On their turn a player can take one of three actions:
    
    a) Place a Worker: Each player has a collection of Worker pieces. These are placed on the board locations, events, and on Destination cards. Workers perform various actions to further the development of a player's tableau: gathering resources, drawing cards, and taking other special actions.
    
    b) Play a Card: Each player is building and populating a city; a tableau of up to 15 Construction and Critter cards. There are five types of cards: Travelers, Production, Destination, Governance, and Prosperity. Cards generate resources (twigs, resin, pebbles, and berries), grant abilities, and ultimately score points. The interactions of the cards reveal numerous strategies and a near infinite variety of working cities.
    
    c) Prepare for the next Season: Workers are returned to the players supply and new workers are added. The game is played from Winter through to the onset of the following winter, at which point the player with the city with the most points wins.",
    genre: "Strategy",
    est_time: "40-80 minutes",
    user_id: 1,
    borrow: true, 
    available: true
)
Boardgame.create(
    name: "Citadels",
    picture_url: "https://cf.geekdo-images.com/sHd0jkZZLDgixHjAXtn7kA__imagepage/img/BAc4tOD4A_Bu2QJ2lR_B_zmelto=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3119514.jpg",
    num_players: "2-8",
    description: "In Citadels, players take on new roles each round to represent characters they hire in order to help them acquire gold and erect buildings. The game ends at the close of a round in which a player erects their eighth building. Players then tally their points, and the player with the highest score wins.

    Players start the game with a number of building cards in their hand; buildings come in five colors, with the purple buildings typically having a special ability and the other colored buildings providing a benefit when you play particular characters. At the start of each round, the player who was king the previous round discards one of the eight character cards at random, chooses one, then passes the cards to the next player, etc. until each player has secretly chosen a character. Each character has a special ability, and the usefulness of any character depends upon your situation, and that of your opponents. The characters then carry out their actions in numerical order: the assassin eliminating another character for the round, the thief stealing all gold from another character, the wizard swapping building cards with another player, the warlord optionally destroys a building in play, and so on.
    
    On a turn, a player earns two or more gold (or draws two building cards then discards one), then optionally constructs one building (or up to three if playing the architect this round). Buildings cost gold equal to the number of symbols on them, and each building is worth a certain number of points. In addition to points from buildings, at the end of the game a player scores bonus points for having eight buildings or buildings of all five colors.
    
    The 2016 edition of Citadels includes twenty-seven characters — eight from the original Citadels, ten from the Dark City expansion, and nine new ones — along with thirty unique building districts, and the rulebook includes six preset lists of characters and districts beyond the starter list, each crafted to encourage a different style and intensity of gameplay.",
    genre: "Family",
    est_time: "30-60 minutes",
    user_id: 1,
    borrow: true, 
    available: true
)
Boardgame.create(
    name: "Carcassonne",
    picture_url: "https://cf.geekdo-images.com/okM0dq_bEXnbyQTOvHfwRA__imagepage/img/axGbn7f0x6UUb07DmzX9hg5TwIo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6544250.png",
    num_players: "2-5",
    description: 'Carcassonne is a tile-placement game in which the players draw and place a tile with a piece of southern French landscape on it. The tile might feature a city, a road, a cloister, grassland or some combination thereof, and it must be placed adjacent to tiles that have already been played, in such a way that cities are connected to cities, roads to roads, etcetera. Having placed a tile, the player can then decide to place one of their meeples on one of the areas on it: on the city as a knight, on the road as a robber, on a cloister as a monk, or on the grass as a farmer. When that area is complete, that meeple scores points for its owner.

    During a game of Carcassonne, players are faced with decisions like: "Is it really worth putting my last meeple there?" or "Should I use this tile to expand my city, or should I place it near my opponent instead, giving him a hard time to complete their project and score points?" Since players place only one tile and have the option to place one meeple on it, turns proceed quickly even if it is a game full of options and possibilities.',
    genre: "Family",
    est_time: "30-45 minutes",
    user_id: 1,
    borrow: true, 
    available: true
)
Boardgame.create(
    name: "Disney Villainous",
    picture_url: "https://cf.geekdo-images.com/7Ej5V5Dq92QdvVFvISfl_A__imagepage/img/fO_sFtYg4_0VYaC9Q-pWamXQM2c=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4216110.jpg",
    num_players: "2-5",
    description: "In Villainous, each player takes control of one of six Disney characters, each one a villain in a different Disney movie. Each player has their own villain deck, fate deck, player board, and 3D character.

    On a turn, the active player moves their character to a different location on their player board, takes one or more of the actions visible on that space (often by playing cards from their hand), then refills their hand to four cards. Cards are allies, items, effects, conditions, and (for some characters) curses. You need to use your cards to fulfill your unique win condition.
    
    One of the actions allows you to choose another player, draw two cards from that player's fate deck, then play one of them on that player's board, covering two of the four action spaces on one of that player's locations. The fate deck contains heroes, items, and effects from that villain's movie, and these cards allow other players to mess with that particular villain.",
    genre: "Family",
    est_time: "45-60 minutes",
    user_id: 1,
    borrow: true, 
    available: true
)
Boardgame.create(
    name: "Photosynthesis",
    picture_url: "https://cf.geekdo-images.com/HhkYuVxMy-XrRCBWmZ78Eg__imagepage/img/6MBUVKddkABPcAFFNLLV9P915ZA=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3364832.jpg",
    num_players: "2-4",
    description: "The sun shines brightly on the canopy of the forest, and the trees use this wonderful energy to grow and develop their beautiful foliage. Sow your crops wisely and the shadows of your growing trees could slow your opponents down, but don't forget that the sun revolves around the forest. Welcome to the world of Photosynthesis, the green strategy board game!",
    genre: "Abstract",
    est_time: "30-60 minutes",
    user_id: 1,
    borrow: true, 
    available: true
)
puts "🌱🌱🌱 Boardgames seeded!!! 🌱🌱🌱"