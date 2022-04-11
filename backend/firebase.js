const {initializeApp, cert} = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');

// const serviceAccount = require('./serviceAccountKey.json');

const configObject = {
	projectId: process.env.FIREBASE_PROJECT_ID,
	clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
	privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
};

initializeApp({
	credential: cert(configObject)
});

const auth = getAuth();

module.exports = {auth};
