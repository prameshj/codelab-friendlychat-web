/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyAjIgoZ347bfy4EK4n-mvj17Ot5Ukf8w8k",
  authDomain: "pavithrar-firebase-dev.firebaseapp.com",
  projectId: "pavithrar-firebase-dev",
  storageBucket: "pavithrar-firebase-dev.appspot.com",
  messagingSenderId: "565097540951",
  appId: "1:565097540951:web:4bab82139adce74f4fe212",
  measurementId: "G-CQ0XBH83CH"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
