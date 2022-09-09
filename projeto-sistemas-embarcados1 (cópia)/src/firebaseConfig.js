import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const config = {
    apiKey: "AIzaSyApQvtyR1sHeeDm5mTmuClOhTDuu8XsQjI",
    authDomain: "esp32-firebase-project-32b1b.firebaseapp.com",
    databaseURL: "https://esp32-firebase-project-32b1b-default-rtdb.firebaseio.com",
    projectId: "esp32-firebase-project-32b1b",
    storageBucket: "esp32-firebase-project-32b1b.appspot.com",
    messagingSenderId: "678460532956",
    appId: "1:678460532956:web:f3a2100755bc0005212c19"
};

export const app = initializeApp(config);
export const database = getDatabase(app);