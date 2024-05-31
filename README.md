# Main Info
This code is structured similar to how we use it in ETM. The main html file is `runner.html` and the main javascript code is `testfile.js`. There is no main xml file like we use in our widgets, instead you will need the Live Server extension by Ritwick Dey (v5.7.9 as of May 31, 2024). You can then run Live Server on the html file and it will launch the html inside of your default browser, to launch there is a "Go Live" button in the bottorm right corner of vs code when in the html file. 

## Current State
Right now I am able to:
- read an xml file into our unit tests using 'fs' (Node.js's file system package) and 'jsdom' which allows us to use DOM objects.
- test Artifact

I am unable to:
- test note (equivalent to testscript, testcase, testplan, etc...) in a way that will allow both our unit tests and the widget to run.
    - I can get either the unit tests to function or the widget to function.
    - Adding `const Artifact = require('./artifact')` to the top of the note.js file will allow the unit tests to see Artifact and thus pass, but doing so will break the widget because then note.js would need to be a module to recognize the require and as far as I have seen setting the note file as a module will not work long term for us. In our widgets we would then need to set every class file that inherits as a module and we can only set one module per xml file, so that would not work for us. 

## Needed VS Code Extensions
- Live Server (Ritwick Dey)

## Needed Packages
- Node.js
- npm (should come with Node.js)
- From the folder where you copy the code
    - jest (npm install --save-dev jest)
    - jsdom (npm install --save-dev jsdom)

## Other Helpful VS Code Extensions
- npm Intellisense (Christian Kohler)
