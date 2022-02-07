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

ActiveRecord::Schema.define(version: 2022_02_03_173008) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "applicants", force: :cascade do |t|
    t.string "firstName"
    t.string "lastName"
    t.string "dob"
    t.string "email"
    t.string "phone"
    t.string "rent_own"
    t.string "home_type"
    t.string "length_address"
    t.text "yard_description"
    t.string "children"
    t.string "pet_allergy"
    t.boolean "approved"
    t.text "lifestyle"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "fosters", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "phone"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "meetups", force: :cascade do |t|
    t.date "date"
    t.string "time"
    t.string "location"
    t.text "reason"
    t.bigint "pet_id", null: false
    t.bigint "foster_id", null: false
    t.bigint "applicant_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["applicant_id"], name: "index_meetups_on_applicant_id"
    t.index ["foster_id"], name: "index_meetups_on_foster_id"
    t.index ["pet_id"], name: "index_meetups_on_pet_id"
  end

  create_table "pet_applications", force: :cascade do |t|
    t.bigint "pet_id", null: false
    t.bigint "applicant_id", null: false
    t.string "applicant_email"
    t.string "status"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["applicant_id"], name: "index_pet_applications_on_applicant_id"
    t.index ["pet_id"], name: "index_pet_applications_on_pet_id"
  end

  create_table "pet_fosters", force: :cascade do |t|
    t.bigint "pet_id", null: false
    t.bigint "foster_id", null: false
    t.boolean "active"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["foster_id"], name: "index_pet_fosters_on_foster_id"
    t.index ["pet_id"], name: "index_pet_fosters_on_pet_id"
  end

  create_table "pets", force: :cascade do |t|
    t.string "name"
    t.string "status"
    t.string "image"
    t.string "species"
    t.string "breed"
    t.string "age"
    t.integer "height"
    t.integer "weight"
    t.boolean "fixed"
    t.string "energy_level"
    t.string "coat_type"
    t.string "coat_color"
    t.boolean "good_w_kids"
    t.boolean "good_w_cats"
    t.boolean "behavioral_issues"
    t.text "description"
    t.string "rabies_vaccine"
    t.string "FVRCP_vaccine"
    t.string "distemper_parvo_vaccine"
    t.boolean "dewormed"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "firstName"
    t.string "lastName"
    t.string "password_digest"
    t.string "role"
    t.string "phone"
    t.integer "applicant_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "meetups", "applicants"
  add_foreign_key "meetups", "fosters"
  add_foreign_key "meetups", "pets"
  add_foreign_key "pet_applications", "applicants"
  add_foreign_key "pet_applications", "pets"
  add_foreign_key "pet_fosters", "fosters"
  add_foreign_key "pet_fosters", "pets"
end
