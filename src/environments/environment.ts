// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAeTOyN-FeK4KJhxfv2meXPVh31qLb3Ke0',
    authDomain: 'fancy-cart.firebaseapp.com',
    databaseURL: 'https://fancy-cart.firebaseio.com',
    projectId: 'fancy-cart',
    storageBucket: 'fancy-cart.appspot.com',
    messagingSenderId: '42466470115'
  }
};
