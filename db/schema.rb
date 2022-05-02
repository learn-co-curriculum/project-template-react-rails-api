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

ActiveRecord::Schema.define(version: 2022_04_28_171937) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cities", force: :cascade do |t|
    t.string "city"
    t.string "region"
    t.string "country"
    t.string "currency"
    t.decimal "latitude"
    t.decimal "longitude"
    t.integer "elevation_meters"
    t.boolean "on_water"
    t.integer "population"
    t.float "monthly_after_tax_salary"
    t.float "apt_price_per_meter2_outside_city_center"
    t.float "apt_price_per_meter2_inside_city_center"
    t.float "monthly_rent_one_bdrm_outside_city_center"
    t.float "monthly_rent_one_bdrm_inside_city_center"
    t.float "monthly_utilities"
    t.float "monthly_internet"
    t.string "wikidata_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
