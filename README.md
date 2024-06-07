# INEGI RSS News Reader App

This mobile application developed with React Native serves as an RSS news reader for the National Institute of Statistics and Geography (INEGI). It utilizes React Native for the user interface and Redux for state management.

* * *

## Key Features:
- **News Retrieval**: The application fetches news from INEGI via an RSS feed provided by the institute.
- **News Display**: News articles are displayed in a list format, featuring titles and descriptions, allowing users to browse through them.

## Core Components:
1. **Root Component**:
   - **Description**: This is the main component that wraps the entire application with the Redux `Provider` for easy access to the store throughout the application.
   - **Location**: `App.tsx`

2. **App Component**:
   - **Description**: This is the main component of the application that handles the retrieval and display of news.
   - **Features**:
     - Utilizes `useEffect` to fetch news when the application mounts.
     - Uses `axios` for making HTTP requests to the INEGI RSS feed.
     - Utilizes `xml2js` for parsing the XML of the RSS feed.
     - Employs Redux to store and update the state of news.
   - **Location**: `App.tsx`

3. **Reducers**:
   - **Description**: Defines how the application's state changes in response to actions dispatched to the Redux store.
   - **Location**: `reducers.js`

4. **State**:
   - **Description**: Defines interfaces for the application's state.
   - **Location**: `state.ts`

5. **Store**:
   - **Description**: Creates the Redux store, which serves as the container for the application's state.
   - **Location**: `store.js`

## How to Use:
1. Clone this repository to your local machine.
2. Ensure you have Node.js and npm installed.
3. Install dependencies using `npm install`.
4. Run the application on an emulator or device with `npm start`.

## Technologies Used:
- React Native
- Redux
- Axios
- xml2js


Description: Creates the Redux store, which serves as the container for the application's state.
Location: store.js


How to Use:
Clone this repository to your local machine.
Ensure you have Node.js and npm installed.
Install dependencies using npm install.
Run the application on an emulator or device with npm start.
Technologies Used:
React Native
Redux
Axios
xml2js

## App Previews

![Android App Screenshot](images/androidapppreview)
