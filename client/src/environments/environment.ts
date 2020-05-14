// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const firebaseConfig = {
  apiKey: 'AIzaSyCzvvOAbQqL0gpoFDEh2l0udbeImy_eniI',
  authDomain: 'just-play-e164d.firebaseapp.com',
  databaseURL: 'https://just-play-e164d.firebaseio.com',
  projectId: 'just-play-e164d',
  storageBucket: 'just-play-e164d.appspot.com',
  messagingSenderId: '613856005414',
  appId: '1:613856005414:web:bc358333a7e721143045e7',
  measurementId: 'G-3KEKMCZ04R',
};

export const environment = {
  production: false,
  firebase: firebaseConfig,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
