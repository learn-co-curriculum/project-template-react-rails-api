puts "Creating Seeds"
Movie.create([
    { name: "Men In Black (1997)", location: "Brooklyn Battery Tunnel Vent Shaft, Hugh L. Carey Tunnel, Brooklyn, NY 11231", image:"https://lh5.googleusercontent.com/p/AF1QipOO3FA8Ia0h9ciRwQI8_zfMloxqUG2Fm-JTeSKB=w1080-k-no" },
     { name: "When Harry Met Sally (1989)", location: "205 E Houston St, New York, NY 10002", image:"https://www.fromthesquare.org/wp-content/uploads/2014/11/Katzs_Delicatessen.jpg" },
     { name: "Joker (2019)", location: "Step street connecting Shakespeare and Anderson avenues at West 167th Street in Highbridge in the Bronx, New York City.", image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/ef/47/f1/the-joker-stairs.jpg?w=1200&h=-1&s=1" },
     { name: "Rosemary's Baby (1968)", location: "1 W 72nd St, New York, NY 10023", image:"https://www.thoughtco.com/thmb/q0p6mUNizqsJqJId6o25VxGsITg=/3178x2118/filters:fill(auto,1)/TheDakota-Getty521871368-5c0c138146e0fb00014e9d9b.jpg" },
     { name: "Ghostbusters (1984)", location: " 14 N Moore St, New York, NY 10013", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Ghostbusters_Firehouse_crop.jpg/1200px-Ghostbusters_Firehouse_crop.jpg" }
     
   ])
   
   User.create([
    { user_name: "Yax", password: "1234" },
    { user_name: "Corey", password: "4321" }
  ])
  
  Fact.create([
    { fact:"The table at which the scene was filmed now has a plaque on it that reads, 'Where Harry met Sally...hope you have what she had!'", user_id:1, movie_id:2},
    { fact:"Used as the exterior site and exemplar of the film's 'Bamford'.", user_id:2, movie_id:4},
    { fact:"The MiB headquarters is actually a ventilator shaft for the Holland Tunnel!", user_id:1, movie_id:1},
    { fact:"Almost none of the scenes were filmed as scripted, most had at least one ad-lib. Most of Bill Murray's lines are ad-libs.", user_id:1, movie_id:5},
    { fact:"Known as the base for both Ghostbusters 1984 and remake 2016.", user_id:2, movie_id:5},
    { fact:"The film's climax takes place on the site in Flushing Meadows, New York, where the 1964 World's Fair was held.", user_id:2, movie_id:1}
  

  ])
  puts "Seeds Created you shall pass"