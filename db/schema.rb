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

ActiveRecord::Schema.define(version: 2021_08_19_195735) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "child_chores", force: :cascade do |t|
    t.integer "reward"
    t.integer "time_to_complete"
    t.boolean "is_completed"
    t.bigint "user_id", null: false
    t.bigint "chore_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["chore_id"], name: "index_child_chores_on_chore_id"
    t.index ["user_id"], name: "index_child_chores_on_user_id"
  end

  create_table "chores", force: :cascade do |t|
    t.string "chore_name"
    t.string "description"
    t.integer "min_age"
    t.bigint "household_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["household_id"], name: "index_chores_on_household_id"
  end

  create_table "households", force: :cascade do |t|
    t.string "last_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "email"
    t.string "username"
    t.string "password_digest"
    t.boolean "is_parent"
    t.bigint "household_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["household_id"], name: "index_users_on_household_id"
  end

  add_foreign_key "child_chores", "chores"
  add_foreign_key "child_chores", "users"
  add_foreign_key "chores", "households"
  add_foreign_key "users", "households"
end
