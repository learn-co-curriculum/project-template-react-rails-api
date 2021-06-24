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

ActiveRecord::Schema.define(version: 2021_06_24_144551) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "profiles", force: :cascade do |t|
    t.integer "weight"
    t.integer "desired_weight"
    t.integer "bmi"
    t.integer "exercise"
    t.integer "therapy"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "psychologist_appointments", force: :cascade do |t|
    t.string "subject"
    t.datetime "startTime"
    t.datetime "endTime"
    t.integer "user_id"
    t.integer "psychologist_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "psychologists", force: :cascade do |t|
    t.string "image_url"
    t.string "name"
    t.string "gender"
    t.string "about_me"
    t.string "language"
    t.float "rating"
    t.string "specialty"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "trainer_appointments", force: :cascade do |t|
    t.string "subject"
    t.datetime "start_time"
    t.datetime "end_time"
    t.integer "user_id"
    t.integer "trainer_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "trainers", force: :cascade do |t|
    t.string "image_url"
    t.string "name"
    t.string "gender"
    t.string "about_me"
    t.string "language"
    t.float "rating"
    t.string "specialty"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "hobbies"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
