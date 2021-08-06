#seed
puts "Destroying existing seed data and resetting id counts..."

User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
Doctor.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('doctors')
Patient.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('patients')
Appointment.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('appointments')
Intake.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('intakes')

puts "Seeding Doctors..."

Doctor.create!([
    {
        first_name: "Stephen", 
        last_name: "Strange",
        img_url: "",
        phone_number: "(304) 555-0492",
        bio: "Doctor Stephen Vincent Strange M.D., Ph.D is the sorcerer and a Master of the Mystic Arts. Originally a brilliant, although arrogant, neurosurgeon, Strange got into a car accident which resulted with his hands becoming crippled. When all Western medicine failed him, Strange embarked on a journey that led him into Kamar-Taj where Strange had made the discovery of magic and alternate dimensions, being trained by the Ancient One.",
        city: "New York",
        specialty: "Neurosurgery",
        rating: 2,
        years_of_experience: 15
    },
    {
        first_name: "Ivo",
        last_name: "Robotnik",
        phone_number: "(129) 555-0439",
        img_url: "",
        bio: "Dr. Ivo Robotnik, better known by the alias Dr. Eggman, is the main antagonist of the Sonic the Hedgehog series. He is a human scientist and the arch-nemesis of Sonic the Hedgehog. This large scientist with an IQ of 300[2] dreams of dominating the world, but his constant plots to create his Eggman Empire are always thwarted by Sonic and his friends.",
        city: "Green Hills",
        specialty: "Automata",
        rating: 1,
        years_of_experience: 30
    },
    {
        first_name: "Andre",
        last_name: "Dre",
        phone_number: "(429)555-9403",
        img_url: "",
        bio: "Andre Romelle Young, known professionally as Dr. Dre, is an American rapper, audio engineer, record producer, and entrepreneur. He is the founder and CEO of Aftermath Entertainment and Beats Electronics, and previously co-founded, co-owned, and was the president of Death Row Records.",
        city: "Los Angeles",
        specialty: "Rap",
        rating: 4,
        years_of_experience: 25
    },
    {
        first_name: "Doogie",
        last_name: "Howser",
        phone_number: "(629) 555-8473",
        img_url: "",
        bio: "Possessing a genius intellect and an eidetic memory, Howser participates in a longitudinal study of child prodigies until his 18th birthday. He earned a perfect score on the SAT at the age of six, completed high school in nine weeks, graduated from Princeton University in 1983 at age 10, and finished medical school four years later. At age 14, Howser was the youngest licensed doctor in the country.",
        city: "Los Angeles",
        specialty: "Pediatrics",
        rating: 5,
        years_of_experience: 2
    },
    {
        first_name: "Gregory",
        last_name: "House",
        phone_number: "(804)555-9493",
        img_url: "",
        bio: "Dr. Gregory House, M.D. leads a team of diagnosticians as the Head of Diagnostic Medicine at the Princeton-Plainsboro Teaching Hospital in Princeton, New Jersey.",
        city: "New Jersey",
        specialty: "Diagnostics",
        rating: 2,
        years_of_experience: 40
    }
])

p1 = Doctor.all[0]
p2 = Doctor.all[1]
p3 = Doctor.all[2]
p4 = Doctor.all[3]
p5 = Doctor.all[4]

puts "Seeding Patients..."

Patient.create!([
    {
        first_name: "Jane",
        last_name: "Villanueva",
        img_url: "",
        phone_number: "(339) 555-8473",
        date_of_birth: "08/12/1992"
    },
    {
        first_name: "Rebecca",
        last_name: "Bunch",
        img_url: "",
        phone_number: "(395) 555-4849",
        date_of_birth: "02/09/1987"
    },
    {
        first_name: "Moira",
        last_name: "Rose",
        img_url: "",
        phone_number: "(204) 555-3945",
        date_of_birth: "04/28/1960"
    },
    {
        first_name: "Alfred",
        last_name: "Miles",
        img_url: "",
        phone_number: "(938) 555-9494",
        date_of_birth: "06/20/1982"
    },
    {
        first_name: "Bob",
        last_name: "Belcher",
        img_url: "",
        phone_number: "(739) 222-8384",
        date_of_birth: "11/10/1975"
    }
])

d1 = Patient.all[0]
d2 = Patient.all[1]
d3 = Patient.all[2]
d4 = Patient.all[3]
d5 = Patient.all[4]

puts "Seeding Users..."

User.create!([
    {
        username: "sorceror_supreme",
        password_digest: BCrypt::Password.create('cape'),
        role_id: d1.id,
        role_type: "Doctor"
    },
    {
        username: "eggman",
        password_digest: BCrypt::Password.create('sonic'),
        role_id: d2.id,
        role_type: "Doctor"
    },
    {
        username: "compton_king",
        password_digest: BCrypt::Password.create('nwa'),
        role_id: d3.id,
        role_type: "Doctor"
    },
    {
        username: "young_doc",
        password_digest: BCrypt::Password.create('harris'),
        role_id: d4.id,
        role_type: "Doctor"
    },
    {
        username: "pillboy",
        password_digest: BCrypt::Password.create('cane'),
        role_id: d5.id,
        role_type: "Doctor"
    },
    {
        username: "hopeless_romantic",
        password_digest: BCrypt::Password.create('telenovela'),
        role_id: p1.id,
        role_type: "Patient"
    },
    {
        username: "pretzel_girl",
        password_digest: BCrypt::Password.create('westcovina'),
        role_id: p2.id,
        role_type: "Patient"
    },
    {
        username: "moira_rose",
        password_digest: BCrypt::Password.create('wigs'),
        role_id: p3.id,
        role_type: "Patient"
    },
    {
        username: "paperboi",
        password_digest: BCrypt::Password.create('atlanta'),
        role_id: p4.id,
        role_type: "Patient"
    },
    {
        username: "burger_king",
        password_digest: BCrypt::Password.create('linda'),
        role_id: p5.id,
        role_type: "Patient"
    }
])

u1 = User.all[0]
u2 = User.all[1]
u3 = User.all[2]
u4 = User.all[3]
u5 = User.all[4]
u6 = User.all[5]
u7 = User.all[6]
u8 = User.all[7]
u9 = User.all[8]
u10 = User.all[9]

puts "Seeding Appointments..."

Appointment.create!([
    {
        patient_id: p1.id,
        doctor_id: d1.id,
        time: "08/12/2021 10:00",
        patient_intake_complete: true,
        appointment_complete: false
    },
    {
        patient_id: p1.id,
        doctor_id: d2.id,
        time: "09/14/2021 12:00",
        patient_intake_complete: true,
        appointment_complete: false
    },
    {
        patient_id: p2.id,
        doctor_id: d1.id,
        time: "10/20/2021 18:00",
        patient_intake_complete: true,
        appointment_complete: false
    },
    {
        patient_id: p1.id,
        doctor_id: d4.id,
        time: "12/05/2021 14:00",
        patient_intake_complete: true,
        appointment_complete: false
    },
    {
        patient_id: p3.id,
        doctor_id: d1.id,
        time: "09/23/2021 15:00",
        patient_intake_complete: true,
        appointment_complete: false
    },
    {
        patient_id: p1.id,
        doctor_id: d3.id,
        time: "12/30/2021 11:00",
        patient_intake_complete: true,
        appointment_complete: false
    },
    {
        patient_id: p4.id,
        doctor_id: d1.id,
        time: "11/19/2021 15:30",
        patient_intake_complete: true,
        appointment_complete: false
    },
    {
        patient_id: p4.id,
        doctor_id: d1.id,
        time: "08/08/2021 09:30",
        patient_intake_complete: true,
        appointment_complete: false
    },
    {
        patient_id: p1.id,
        doctor_id: d3.id,
        time: "10/01/2021 11:30",
        patient_intake_complete: true,
        appointment_complete: false
    },
    {
        patient_id: p5.id,
        doctor_id: d1.id,
        time: "09/26/2021 18:00",
        patient_intake_complete: true,
        appointment_complete: false
    },
    {
        patient_id: p1.id,
        doctor_id: d1.id,
        time: "10/20/2021 14:00",
        patient_intake_complete: true,
        appointment_complete: true
    },
    {
        patient_id: p1.id,
        doctor_id: d2.id,
        time: "11/30/2021 11:00",
        patient_intake_complete: true,
        appointment_complete: true
    },
    {
        patient_id: p1.id,
        doctor_id: d3.id,
        time: "09/03/2021 19:00",
        patient_intake_complete: true,
        appointment_complete: true
    }
])

a1 = Appointment.all[0]
a2 = Appointment.all[1]
a3 = Appointment.all[2]
a4 = Appointment.all[3]
a5 = Appointment.all[4]
a6 = Appointment.all[5]
a7 = Appointment.all[6]
a8 = Appointment.all[7]
a9 = Appointment.all[8]
a10 = Appointment.all[9]
a11 = Appointment.all[10]
a12 = Appointment.all[11]
a13 = Appointment.all[12]

puts "Seeding Intakes..."

Intake.create!([
    {
        appointment_id: a1.id,
        onset: "This morning",
        location: "My chest",
        duration: "Half a day",
        characteristics: "Achey, feels like there's a weight on my chest",
        aggravating_factors: "Running, climbing stairs, deep breaths",
        relieving_factors: "In the shower, the steam helps",
        timing_and_severity: "Constant, mild",
        blood_pressure: nil,
        bmi: nil,
        weight: nil,
        height: nil,
        temperature: nil,
        pulse: nil,
        oxygen_saturation: nil,
        bsa: nil,
        doctor_notes: nil,
        reason_for_visit: "Chest pains"
    },
    {
        appointment_id: a2.id,
        onset: "Earlier this week",
        location: "My sinuses",
        duration: "4 days",
        characteristics: "Hard to breathe, congested, nose constantly running",
        aggravating_factors: "Being outdoors, waking up in the morning",
        relieving_factors: "Nasal decongestant, putting pressure on my face",
        timing_and_severity: "Mornings, mild",
        blood_pressure: nil,
        bmi: nil,
        weight: nil,
        height: nil,
        temperature: nil,
        pulse: nil,
        oxygen_saturation: nil,
        bsa: nil,
        doctor_notes: nil,
        reason_for_visit: "Allergies & Sinus Congestion"
    },
    {
        appointment_id: a3.id,
        onset: "Yesterday",
        location: "All over",
        duration: "1 day",
        characteristics: "Aches and soreness, fatigue, headaches",
        aggravating_factors: "Loud noises",
        relieving_factors: "Peace and quiet",
        timing_and_severity: "Middle of the day, moderate",
        blood_pressure: nil,
        bmi: nil,
        weight: nil,
        height: nil,
        temperature: nil,
        pulse: nil,
        oxygen_saturation: nil,
        bsa: nil,
        doctor_notes: nil,
        reason_for_visit: "Unexpected fatigue and lethargy"
    },
    {
        appointment_id: a4.id,
        onset: "A month ago",
        location: "My back",
        duration: "30 days",
        characteristics: "Sharp pain when bending over and lifting, at random points",
        aggravating_factors: "Manual labor, sitting in front of my computer all day",
        relieving_factors: "Lying down flat",
        timing_and_severity: "Randomly throughout the day, severe",
        blood_pressure: nil,
        bmi: nil,
        weight: nil,
        height: nil,
        temperature: nil,
        pulse: nil,
        oxygen_saturation: nil,
        bsa: nil,
        doctor_notes: nil,
        reason_for_visit: "Acute back pain"
    },
    {
        appointment_id: a5.id,
        onset: "Last night",
        location: "My head",
        duration: "1 day",
        characteristics: "Migraine, throbbing, hard to focus",
        aggravating_factors: "Having to think",
        relieving_factors: "Being mindless",
        timing_and_severity: "Constant, moderate",
        blood_pressure: nil,
        bmi: nil,
        weight: nil,
        height: nil,
        temperature: nil,
        pulse: nil,
        oxygen_saturation: nil,
        bsa: nil,
        doctor_notes: nil,
        reason_for_visit: "Uncontrollable headache"
    },
    {
        appointment_id: a6.id,
        onset: "A few days ago",
        location: "All over",
        duration: "5 days",
        characteristics: "Miserable, body feels sensitive",
        aggravating_factors: "Being too active",
        relieving_factors: "Drinking water",
        timing_and_severity: "Mornings, mild",
        blood_pressure: nil,
        bmi: nil,
        weight: nil,
        height: nil,
        temperature: nil,
        pulse: nil,
        oxygen_saturation: nil,
        bsa: nil,
        doctor_notes: nil,
        reason_for_visit: "Suspected cold or flu based on symptoms"
    },
    {
        appointment_id: a7.id,
        onset: "Over the weekend",
        location: "No pain",
        duration: "3 days",
        characteristics: "Feeling distraught, constantly stressed and worried",
        aggravating_factors: "Work, bills, rent",
        relieving_factors: "Yoga",
        timing_and_severity: "Unsure, moderate",
        blood_pressure: nil,
        bmi: nil,
        weight: nil,
        height: nil,
        temperature: nil,
        pulse: nil,
        oxygen_saturation: nil,
        bsa: nil,
        doctor_notes: nil,
        reason_for_visit: "Stress and anxiety, difficult to control"
    },
    {
        appointment_id: a8.id,
        onset: "Last Monday",
        location: "My fingertips",
        duration: "7 days",
        characteristics: "Numbness, uncontrollable shaking",
        aggravating_factors: "Things requiring finger dexterity like typing, playing the piano",
        relieving_factors: "Peppermind hand cream, running my hands under cold water",
        timing_and_severity: "When aggravated, mild",
        blood_pressure: nil,
        bmi: nil,
        weight: nil,
        height: nil,
        temperature: nil,
        pulse: nil,
        oxygen_saturation: nil,
        bsa: nil,
        doctor_notes: nil,
        reason_for_visit: "Arthiritic hand pain"
    },
    {
        appointment_id: a9.id,
        onset: "Saturday night",
        location: "My stomach",
        duration: "3 days",
        characteristics: "Sharp pain, constantly hungry but have no appetite",
        aggravating_factors: "Eating, too much movement in the day",
        relieving_factors: "Milk, Tums",
        timing_and_severity: "Evenings before bed, moderate",
        blood_pressure: nil,
        bmi: nil,
        weight: nil,
        height: nil,
        temperature: nil,
        pulse: nil,
        oxygen_saturation: nil,
        bsa: nil,
        doctor_notes: nil,
        reason_for_visit: "Stomach / Digestive issues"
    },
    {
        appointment_id: a10.id,
        onset: "I can't recall",
        location: "Everywhere",
        duration: "Multiple days",
        characteristics: "Feverish, constantly hot or cold, feeling unmotivated",
        aggravating_factors: "Being awake",
        relieving_factors: "Sleeping",
        timing_and_severity: "It's neverending, severe",
        blood_pressure: nil,
        bmi: nil,
        weight: nil,
        height: nil,
        temperature: nil,
        pulse: nil,
        oxygen_saturation: nil,
        bsa: nil,
        doctor_notes: nil,
        reason_for_visit: "General inquiry on recent health concerns"
    },
    {
        appointment_id: a11.id,
        onset: "A month ago",
        location: "My back",
        duration: "30 days",
        characteristics: "Sharp pain when bending over and lifting, at random points",
        aggravating_factors: "Manual labor, sitting in front of my computer all day",
        relieving_factors: "Lying down flat",
        timing_and_severity: "Randomly throughout the day, severe",
        blood_pressure: nil,
        bmi: nil,
        weight: nil,
        height: nil,
        temperature: nil,
        pulse: nil,
        oxygen_saturation: nil,
        bsa: nil,
        doctor_notes: nil,
        reason_for_visit: "Acute back pain"
    },
    {
        appointment_id: a12.id,
        onset: "Yesterday",
        location: "All over",
        duration: "1 day",
        characteristics: "Aches and soreness, fatigue, headaches",
        aggravating_factors: "Loud noises",
        relieving_factors: "Peace and quiet",
        timing_and_severity: "Middle of the day, moderate",
        blood_pressure: nil,
        bmi: nil,
        weight: nil,
        height: nil,
        temperature: nil,
        pulse: nil,
        oxygen_saturation: nil,
        bsa: nil,
        doctor_notes: nil,
        reason_for_visit: "Aches and pains"
    },
    {
        appointment_id: a13.id,
        onset: "Earlier this week",
        location: "My sinuses",
        duration: "4 days",
        characteristics: "Hard to breathe, congested, nose constantly running",
        aggravating_factors: "Being outdoors, waking up in the morning",
        relieving_factors: "Nasal decongestant, putting pressure on my face",
        timing_and_severity: "Mornings, mild",
        blood_pressure: nil,
        bmi: nil,
        weight: nil,
        height: nil,
        temperature: nil,
        pulse: nil,
        oxygen_saturation: nil,
        bsa: nil,
        doctor_notes: nil,
        reason_for_visit: "Suspected sinus infection"
    }
])

puts "🌱 Done seeding!"