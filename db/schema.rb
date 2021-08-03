# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_08_03_154841) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.integer "patient_id"
    t.integer "doctor_id"
    t.string "time"
    t.boolean "patient_intake_complete"
    t.boolean "appointment_complete"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "doctors", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "img_url"
    t.string "phone_number"
    t.string "bio"
    t.string "city"
    t.string "specialty"
    t.float "rating"
    t.integer "years_of_experience"
  end

  create_table "intakes", force: :cascade do |t|
    t.integer "appointment_id"
    t.string "onset"
    t.string "location"
    t.string "duration"
    t.string "characteristics"
    t.string "aggravating_factors"
    t.string "relieving_factors"
    t.string "timing_and_severity"
    t.string "blood_pressure"
    t.float "bmi"
    t.string "weight"
    t.string "height"
    t.float "temperature"
    t.integer "pulse"
    t.integer "oxygen_saturation"
    t.string "bsa"
    t.string "doctor_notes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "reason_for_visit"
  end

  create_table "patients", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "img_url"
    t.string "phone_number"
    t.string "date_of_birth"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.integer "role_id"
    t.string "role_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["role_type", "role_id"], name: "index_users_on_role_type_and_role_id"
  end

end
