puts "🌱 Seeding spices..."

Landlord.create!([
    {
        name: 'Tony Nyarangi',
        email: 'tonynyarangi@gmail.com',
        password-digest: '12345678',
        bio: "I’ve spent two decades excelling in the competitive landscape of Houston real estate, establishing a reputation as a well-respected and innovative agent."
    },
    {
        name: 'Evans Gitahi',
        email: 'evansgitahi@gmail.com',
        password-digest: 'qwertyuiop',
        bio: "As a San Diego native, I have intimate knowledge of the area and a strong desire to make my home your home."
    },
    {
        name: 'Gladys Kamau',
        email: 'gladyskamau@gmail.com',
        password-digest: '12345678',
        bio: "My business is built on communication, dedication, and transparency. This recipe has helped me rise to the top 5% of commercial real estate agents nationwide by sales volume."
    },
    {
        name: 'Bonaventure O.',
        email: 'bonaventureo@gmail.com',
        password-digest: 'qwertyuiop',
        bio: "With my sharp knowledge of the local market, I've helped over 500 families in the Lakeview area find their dream home — and I'm confident I can help you find yours too."
    }
])

puts "✅ Done seeding!"