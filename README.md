# Buen-Aire-Frontend

## Trello board

The Trello board for the project can be found here: https://trello.com/b/coQLFlNl/main-board

The board includes items that apply to both the frontend and backend repos.

The board should be publicly visible. If you have problems viewing the board, please contact one of the previous team members for help.

You should be able to export or copy the board to your own Trello account (Google for the Trello documentation on how to do this). If this fails, contact one of the previous team members to ask for an invitation to become a board member (hopefully any of us can do this, though it may be restricted to the board admin).

You may instead want to transfer the remaining backlog items to GitHub. In this case, you will have to decide if you want to move all of the issues to the frontend repo, or attempt to split up the issues between the frontend and backend repos (keep in mind that some of the issues relate to both the frontend and the backend, but you could just move these more general issues to the frontend repo).

If you want to transfer the remaining backlog items to GitHub, then for each Trello card, you should:
* Create a new GitHub issue (in either the frontend or backend repo, as appropriate) with the same title as the Trello card.
* Remember to click on the Trello card to view the full description and copy it to the GitHub issue.

Good luck!

## General notes

The Frontend is developed with React Native Expo CLI. We choose Expo CLI and not Reactive Native CLI because we will not be writing code with native languages (Swift and Java); therefore, we don't need the extra functionality of being able to 
modify the native code directly that Reactive Native CLI provides. 

Dependencies:

Node version 12 or greater
- Installation: https://nodejs.org/en/

Expo CLI
- Run this command: `npm i -g expo-cli`
- If you are using Windows, you'll need a Bash Shell as your terminal. Any is fine. 

Expo Client
- Install the Expo Client app on your phone either with GoogleApp Store, or the IOS App Store. It will be used to view and test out the app directly on your phone. 

For environment setup, watch the first 20-minutes of this video by Programming with Mosh: https://www.youtube.com/watch?v=0-S5a0eXPoc 

IDE: Any IDE will work just fine. VSCode, Visual Studio Community, CLion, etc. 

To install app dependencies, run `npm install` within the app folder. To start the app, run `npm start` within the app folder.

You can run the app either in Android emulator, IOS simulator (only if you have a Mac), on the web browser, or with the Expo Client App on your phone. 

To run the app in Android emulator, you have to install Android Studio. For more details watch the video suggested above. 
