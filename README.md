# Note Taker Challenge
The note taker app is a front end application where you can enter a note or delete a previously created note. The notes are saved in a json file so if you load the app you should see all notes you have previously created (and not deleted).

## Description
This challenge was mostly about creating API routes and middleware to connect our Front end to the express.js backend. Most of the Front end was provided in the starter code, however there were a couple bugs around the readonly attribute persisting and the note.title populating as the note.text that needed to be addressed.

## Additional Information
### Notes
Creating the APIs was pretty straightforward, having the front end mostly built was nice because the complexity of debugging and troubleshooting is starting to become more and more difficult. I did struggle with getting the Delete route to work I had set the notes array from the db.json file to be a 'const' and once I changed it to 'let' I was able to get the delete functionality to work.
### Screenshot
The image below are of Saved Notes in the NoteTaker app

![NoteTaker Notes](./public/assets/images/NoteTaker_Notes.png?raw=true "Notes")

### Access Application

* https://github.com/IsiBee/noteTaker-challenge - Github Repo
* https://shrouded-brushlands-55734.herokuapp.com/ - Deployed App - Heroku