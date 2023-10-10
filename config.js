export default {
  app_local: true,
  app_local_url: 'http://localhost:8000/',
  app_live_url: '',
  app_api_base_url: '',
  app_api_debug_url: 'http://localhost:8000/',
  globalFirebaseConfig: {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: '...',
    databaseURL: '...',
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: '...',
    messagingSenderId: '...',
    appId: process.env.FIREBASE_APPID
  }
}
