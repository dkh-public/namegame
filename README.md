This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To run this application:

Clone or check out this repo to your local device. Once saved, run "npm install", then "npm start".
This runs the game in the development mode. 
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br />

## About the project

This game was developed using React.js from specs provided by WillowTree. The purpose of this project is to highlight my coding skills and abilities. React.js is not my primary coding language. To be honest, 
I'm still learning it. ColdFusion is and has been my main language for several years, with JavaScript and jQuery being a close second and third in my current position at the UVA Health System. However, I 
felt it would be better to attempt this project in a language more relevant to the position at WillowTree rather than the languages I'm more comfortable in. I have been learning as I've been going with this
project and am extremely happy with the results so far.

## Application highlights

My goal with this application was to learn as much about React as I could and to implement components and functions into the game as efficiently as I could. While there may be some superfluous code here and there, 
I tried to be as concise as possible when manipulating the virtual DOM and passing state from one component to another. <br />

Some of the NPM packages I used in the functionality of the game are:<br />

* **random-n:** This selects random items from an array. I used this to get the six options from the JSON API, then again to get a single "answer option form the subset. I felt this was more efficient than getting the
answer first, then trying to get five other options without also selecting the already-chosen answer among the options subset.<br />

* **React Router:** This package allowed me to use URLs to navigate to various components rather than having everything running under the root, which made testing difficult. <br />

* **React Bootstrap:** I have developed websites that use Bootstrap, so this was familiar territory for me. I was able to more quickly set up the look and feel that I'd be able to using straight HTML DIVs.<br />

## For futher development

There are some features I'd hoped to implement, but was unable to due to time constraints. <br />

* **Timer:** I tried using several NPM timer packages as well as a simple setInterval function to run a round timer. But for some reason I couldn't get it working correctly.<br />

* **Name filter:** Due to the random nature of the option selection, some rounds don't offer enough options whose gender matches the answer, making it rather easy to determine who is (or is not) the correct answer. 
I found an NPM package that provides a list of traditionally male and female names. Using these lists to filter off of would add the ability to sort options by gender. However, it would have many issues: names that are not
in the language sets the filter uses, gender-ambiguous names, etc. 

* **Image filter:** Some records in the dataset do not include images. Others have generic images, oddly-sized images, etc. I'd hoped to find a package that could do things like face recognition (filtering out images that didn't have a face in them) and  
dimension normalization (to make the image dimensions consistent). These both seemed rather complex and were not something I feel I have the time or prowess to tackle right now.

## Conclusion

In conclusion, I am proud of the work done thus far on this project, and I look forward to talking through my coding processes with the WillowTree team. 
