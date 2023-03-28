# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding data"

first_listing = Listing.create(apartment_name: "The Orchard", address: "505 Main Street, Smithtown", price: "1575", contact_info: "Jackie at x5567", website: "rent@theorchard.com", comment: "Beautiful and near train. Favorite so far")
second_listing = Listing.create(apartment_name: "Clifford Apartments", address: "2347 Roseland Ave, Clifford", price: "1250", contact_info: "Sandy 554-7788", website: "cliffordapartments@gmail.com", comment: "Good price and Sandy was super nice, but very small apartment")
third_listing = Listing.create(apartment_name: "Luxury in Smithtown", address: "1050 Shell Road", price: "2500", contact_info: "Robert at x5778", website: "listings@luxurysmithtown.com", comment: "Clean and large apartment, but very expensive")
fourth_listing = Listing.create(apartment_name: "Rosefield Apartments", address: "108 Main Street, Smithtown", price: "1480", contact_info: "Carey at x5221", website: "newrentals@rosefieldapartments.com", comment: "Building was dark and dirty")
fifth_listing = Listing.create(apartment_name: "Manor Apartments", address: "8796 West Lane, River Glen", price: "1500", contact_info: "Phil 554-3344", website: "manorapartments@gmail.com", comment: "Bland but very clean")

first_category = Category.create(category_name: "In Progress")
second_category = Category.create(category_name: "Not Selected")
third_category = Category.create(category_name: "Accepted")

first_connector = Connector.create(listing: first_listing, category: first_category)
second_connector = Connector.create(listing: second_listing, category: first_category)
third_connector = Connector.create(listing: third_listing, category: first_category)
fourth_connector = Connector.create(listing: fourth_listing, category: second_category)
fifth_connector = Connector.create(listing: fifth_listing, category: third_category)

puts "Done seeding"