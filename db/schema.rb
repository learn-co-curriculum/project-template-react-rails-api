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

ActiveRecord::Schema.define(version: 2022_12_03_005917) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "employees", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "position"
    t.string "email"
    t.string "password"
    t.string "avatar"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "managers", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "position"
    t.string "email"
    t.string "password"
    t.string "avatar"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "projects", force: :cascade do |t|
    t.string "project_title"
    t.datetime "start_date"
    t.datetime "end_date"
    t.string "goal"
    t.string "steps"
    t.bigint "manager_id"
    t.bigint "employee_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["employee_id"], name: "index_projects_on_employee_id"
    t.index ["manager_id"], name: "index_projects_on_manager_id"
  end

end
