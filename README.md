# bibliotech-tech-test

All of these coding challenges will require npm (https://nodejs.org/en/) to be installed.

ePub meta information extraction (required)

We have a large set of ePub files (over 1000) that need the metainformation (title/author) extracted. Attached are the first 5 files as a sample.  See https://www.dropbox.com/s/xwsbocrquj3kq3o/Test%20Epubs.zip?dl=0 for the epubs

Create a new node.js project with the package epub (https://www.npmjs.com/package/epub) as a dependency

Setup once node.js and npm is installed

npm init
npm install epub --save

Use the ePub module to read in the attached 5 files, output the following meta information template below (if present) as a JSON file called index.json in a folder structure with the ePub name then index.json for example 1.epub would be stored in /1/index.json

Meta Information template example:

{
	“title":"Horace: Odes and Epodes",
	"contributors":["Horace”]
}


(Required) Write some unit tests in mocha https://mochajs.org/ for the code above.

Polymer Starter Kit (required)

Download the polymer starter kit (https://github.com/PolymerElements/polymer-starter-kit)
 

Then can you then please add a login page to the starter kit (replace one of the current views or add your own) with a form that contains
An ‘email’ box which takes a valid email
A ‘password’ box which takes a valid password (over 8 characters)
A ‘confirm password’ box which is valid if the same as the password box
And a submit button that only allows a submit to occur if the email, password and confirm password boxes are valid
P.S. https://elements.polymer-project.org/elements/iron-form and https://elements.polymer-project.org/elements/paper-input may be very useful here.

(Recommended) Write tests for the above Polymer code using web component tester (https://github.com/Polymer/web-component-tester)
