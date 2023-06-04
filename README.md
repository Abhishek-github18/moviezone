MovieZone Web Application : 
MovieZone is a web application that allows users to explore and interact with movie details. It provides various features and routes to enhance the user experience. Here is a breakdown of the different routes and functionalities available in the application:

Routes : 
Search (Home) (/) : 
The Search route serves as the home page of the application. It enables users to search for movie details by entering the movie title. The search results are displayed on the page, and users can click on each movie to view more detailed information.

Recommend (/recommend) : 
The Recommend route showcases trending movies to the users. It presents a collection of popular movies that are currently trending. Users can click on each movie to get a comprehensive description of the movie.

Page Navigation : 
At the bottom of the Recommend page, users can find navigation links to the Genre and Cast routes. This design allows for easy access to these related pages without having to navigate back to the main navigation bar. Users can seamlessly switch between the Recommend, Genre, and Cast routes to explore different movie-related content.

Genre(/recommend/genre) : 
The Genre route enables users to discover movies based on their preferred genres. Users can select one or multiple genre chips from the available options. Upon selection, the page will update and display movies that belong to the chosen genre(s). Users can further explore and interact with the movies based on their interests.

Cast(/recommend/cast) : 
The Cast route allows users to search for movies based on their favorite actors or actresses. Users can enter the name of the desired cast member in the search section. The page will present movies associated with the entered cast member. Users can click on each movie to access detailed information and further engage with the content.

CRUD (Create, Read, Update, Delete) (/crud) : 
The CRUD page consists of four main features for managing movie details:

Create: Users can add new movie information, such as the movie name, ID, poster, genre, cast, and overview. The "AddMovie" button at the top of the page opens a modal form where users can fill in the necessary details about the movie they want to add. The movie details are stored in the browser's local storage.

Read/Search: Users can search for the details of the movies they have added to the local storage using the "AddMovie" option. This feature is separate from the Search page, as it specifically searches for the movies added by the user.

Update: Users can update the details of existing movies stored in the local storage. After entering all the necessary details, users can update the movie information with the latest changes.

Delete: The Delete feature allows users to remove movie details that are no longer required. Users can select the movies they want to delete, and upon confirmation, the selected movies will be removed from the local storage.

Loader : 
The application includes a loader that runs continuously until the data has been fetched from the backend or the source of the data. The loader provides visual feedback to the user, indicating that the data is being retrieved and the page is loading.

Thank you for your interest in MovieZone! I hope you enjoy exploring and interacting with the various features and routes available in the application.
