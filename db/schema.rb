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

ActiveRecord::Schema.define(version: 2022_04_21_090544) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "characters", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name"
    t.integer "str"
    t.integer "ag"
    t.integer "intel"
    t.integer "exp"
    t.integer "exp_gain"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "level"
    t.string "charClass"
    t.integer "armor"
    t.integer "weapon"
    t.integer "trinket"
    t.integer "atk"
    t.index ["user_id"], name: "index_characters_on_user_id"
  end

  create_table "enemies", force: :cascade do |t|
    t.string "name"
    t.integer "attack"
    t.integer "level"
    t.integer "defense"
    t.string "sprite"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "items", force: :cascade do |t|
    t.bigint "character_id", null: false
    t.string "itemType"
    t.integer "str"
    t.integer "ag"
    t.integer "intel"
    t.integer "exp_gain"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "atk"
    t.index ["character_id"], name: "index_items_on_character_id"
  end

  create_table "random_events", force: :cascade do |t|
    t.string "situation"
    t.string "prompt_1"
    t.string "prompt_2"
    t.string "effect_1"
    t.string "effect_2"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "imageurl"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "characters", "users"
  add_foreign_key "items", "characters"
end
