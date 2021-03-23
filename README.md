# Buen-Aire-Frontend developer notes

Setup:

The Frontend is developed with React Native Expo CLI. We choose Expo CLI and not Reactive Native CLI because we will not be writing code with native languages (Swift and Java); therefore, we don't need the extra functionality of being able to 
modify the native code directly that Reactive Native CLI provides. 


Dependencies:

Node version (12 or greater) 
- Installation: https://nodejs.org/en/

Expo CLI
- Run this command your terminal: 
	`npm i -g expo-cli`
	`sudo npm i -g expo-cli` (if need admistrative permission)
- If you are using window, you'll need a Bash Shell as your terminal. Any is fine. 

Expo Client
- Install the Expo Clinet app on your phone either with GoogleApp Store, or the IOS App Store. It will be used to view and test out the app directly on your phone. 



For enviroment setup, watch the first 20-minutes of this video by Pogramming with Mosh: https://www.youtube.com/watch?v=0-S5a0eXPoc 


IDE:

Any IDE will work just fine. VSCode, Visual Studio Community, CLion, etc. 

Running the app:

cd to the the app folder and run
- `npm start`

You can run the app either in Android emulator, IOS simulator (only if you have a Mac), on the web browser, or with the Expo Client App on your phone. 

To run the app in Android emulator, you have to install Andriod Studio. For more detial watch the video suggested above. 


Development and Code dependencies:

We make use of many open-source libraries from the react-native communities. Although,
all the dependencies should be included in the project; if some are missing, they can be installed into the project with 
`npm install [package_name]`
