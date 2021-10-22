(function (window) {
    'use strict';
    var App = window.App || {};

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const FirebaseConfig = {
        apiKey: "AIzaSyDIRPEvw56ep7Gv2A1rDOu0rwGAbPilNAM",
        authDomain: "coffeerun-40dcd.firebaseapp.com",
        projectId: "coffeerun-40dcd",
        storageBucket: "coffeerun-40dcd.appspot.com",
        messagingSenderId: "522363496331",
        appId: "1:522363496331:web:cdd31f3437fbd123fbf18e",
        measurementId: "G-EHTXCJRR1T"
    };

    App.FirebaseConfig = FirebaseConfig;
    firebase.initializeApp(App.FirebaseConfig);

    //App.FirebaseConfig = FirebaseConfig;
    //firebase.initializeApp(App.FirebaseConfig);

    window.App = App;

})(window);