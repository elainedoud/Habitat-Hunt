<h1>Habitat Hunt<h1>

<h2>Description<h2>: 
This web application makes it easier for an apartment hunter (or house hunter) to keep track of different listing options.  The motivation was my own anxiety about needing to 
find a new apartment.  I remembered it was a stressful process keeping track of potential listings, who I had spoken to, and comparing price vs. location.  

Habitat Hunt makes it easy for the user to add apartment listings (including contact numbers and the user's comments) as well as organize the listings according to categories. The categories for listings are In Progress, Not Selected, and Accepted.


<h2>Technology Used<h2>:
The web application is a React.js frontend built on a Ruby on Rails backend.  There are Ruby models which are supported by PostgreSQL and connected with a join table. I have also added TypeScript to help prevent bugs during further development.


<h2>Challenges<h2>:
Initially I had difficulty displaying the listings by category on separate pages of the web application.  Because of how my models where setup, I would have to drill down multiple layers into my React code to pull the listings by category.  I resolved this by creating methods for each category within the Listing Controller.  This allowed me to query for the appropriate category and then send that data to my frontend.  An additional challenge was adding TypeScript to my application because it was my first time working with interfaces for props.


<h2>Features<h2>:
Category Pages - Separate pages display the three different categories of listings.
New Listing Form - Form to add additional apartment listing to the application.


<h2>Goal for Future Development<h2>:
- Add functionality so user can easily update the category of an existing listing
- Allow users to delete a listing
- Create an option for users to see listings in one column (rather than two)


<h2>To View<h2>: 
- Clone directory
- Install NPM package
- On one port (in one terminal) run Rails (rails s)
- In another port (in another terminal) run NPM (start npm --prefix client)