// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
    firebase: {
      databaseURL: '<your-database-URL>',//??
      measurementId: '<your-measurement-id>',//??

      apiKey: "AIzaSyB4Lhts1r7bN04s4sTzInH5Jr-6FmYyKsc",
      authDomain: "ring-of-fire-de48f.firebaseapp.com",
      projectId: "ring-of-fire-de48f",
      storageBucket: "ring-of-fire-de48f.appspot.com",
      messagingSenderId: "994901377837",
      appId: "1:994901377837:web:dbfcaaa07e8382c632c9a4"
    }
  };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
