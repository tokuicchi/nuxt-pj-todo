import firebase from 'firebase'

const config = {
  projectId: process.env.FIREBASE_PROJECT_ID
}

if (!forebase.apps.lengh) {
  firebase.initializeApp(config)
}

export default firebase