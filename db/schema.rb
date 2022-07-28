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

ActiveRecord::Schema.define(version: 2022_07_28_191948) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "rec_centers", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "phone"
    t.text "description"
    t.time "opens_at"
    t.time "closes_at"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "reservation_types", force: :cascade do |t|
    t.string "reservation_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "reservations", force: :cascade do |t|
    t.bigint "reservation_type_id", null: false
    t.bigint "resource_id", null: false
    t.bigint "user_id", null: false
    t.datetime "datetime_start"
    t.datetime "datetime_end"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["reservation_type_id"], name: "index_reservations_on_reservation_type_id"
    t.index ["resource_id"], name: "index_reservations_on_resource_id"
    t.index ["user_id"], name: "index_reservations_on_user_id"
  end

  create_table "resources", force: :cascade do |t|
    t.bigint "rec_center_id", null: false
    t.string "name"
    t.bigint "sports_type_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["rec_center_id"], name: "index_resources_on_rec_center_id"
    t.index ["sports_type_id"], name: "index_resources_on_sports_type_id"
  end

  create_table "sports_types", force: :cascade do |t|
    t.string "sports_type"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email_address"
    t.string "password_digest"
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "reservations", "reservation_types"
  add_foreign_key "reservations", "resources"
  add_foreign_key "reservations", "users"
  add_foreign_key "resources", "rec_centers"
  add_foreign_key "resources", "sports_types"
end
