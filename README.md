
### Installations required:	

•	Node.js Or NPM (Node Package Manager)
•	VS Code (Optional) — A code editor.

### To run:

 Open your terminal in the root folder and run this command:
 npm install
 Then type: 
 npm start

### About the App

The application fetches information about the artist i.e. the artist’s Facebook profile link which the user can visit, name and picture based on the user input and dynamically updates the web page. User can view artist events by clicking on the View Events button and if there is an upcoming event, its venue, city, country, date will be displayed for the user to see. User can also view the offer regarding each event.

### Application Design and Architecture

The application is divided into 2 main sections: pages and components. There are 2 pages: the landing page and the artist’s events page. The landing page contains different components like the navigation bar, hero component, the artist search component which in turn contains the form component where the user inputs an artist name. On user input, an artist information display component is rendered on the landing page which contains the artist’s image, his/her Facebook profile link and a view events button. When the user clicks on the events button, Events page is rendered which contains a navigation bar (for the user to be navigated back to the home page), a count of the upcoming artist events and a list of information regarding each of the upcoming events. User can also view offer of an event if there is any by clicking on the view offer button under each event.

### Bonus Features
1. Cache - Persist the last entered artist and events across browser reloads/refreshes - Implemented
2. View Offers feature

