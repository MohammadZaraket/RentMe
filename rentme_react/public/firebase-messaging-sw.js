
// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyDbB1ktOk-9aCMwx3sFebRusVBp86BkOnI",
    authDomain: "rentme-c5f6d.firebaseapp.com",
    projectId: "rentme-c5f6d",
    storageBucket: "rentme-c5f6d.appspot.com",
    messagingSenderId: "508553252190",
    appId: "1:508553252190:web:4ed3219421b805ce0f53cf"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});