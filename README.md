This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To run this application:

Clone or check out this repo to your local device. Once saved, run "npm install", then "npm start".
This runs the game in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br />

## About the project

This game was developed using React.js from specs provided by WillowTree. The purpose of this project is to highlight my coding skills and abilities. My development background is primarily in ColdFusion, Javascript and jQuery, but I felt React would be a better library to use for this particular application. While I am fairly new to using React, I am pleased with the results. 

## Application highlights

Some of the NPM packages I used in the functionality of the game are:<br />

* **random-n:** This selects random items from an array. I used this to get the six options from the JSON API, then again to get a single "answer" option form the subset. I felt this was more efficient than getting the answer first, then trying to get five other options without also selecting the already-chosen answer among the options subset.<br />

* **React Router:** This package allowed me to use URLs to navigate to various components rather than having everything running under the root, which made testing difficult. <br />

* **React Bootstrap:** I have developed websites that use Bootstrap, so this was familiar territory for me. The "shorthand" syntax took some getting used to, but being familiar with the Bootstrap framework was helpful.<br />

## For futher development

There are some features I'd hoped to implement, but was unable to due to time constraints. <br />

* **Timer:** I tried using several NPM timer packages as well as a simple setInterval function to run a round timer. But I wasn't able to get it to function like I wanted. I may continue to work on this post-submission.<br />

* **Option tracking:** The randomizer I use doesn't keep track of which employees have been selected as the options or answer, so there is a fair amount of repetition. With more time I would explore maintaining an array of previously loaded employees to omit from further rounds. 

* **Image filter:** Some records in the dataset do not include images. Others have generic images, oddly-sized images, etc. I'd hoped to find a package that could do things like face recognition (filtering out images that didn't have a face in them) and  
dimension normalization (to make the image dimensions consistent). These both seemed rather complex and were not something I feel I have the time or prowess to tackle right now.

## Conclusion

In conclusion, I am very happy with the work done thus far on this project, and I look forward to talking through my coding thoughts and processes with the WillowTree team. 
