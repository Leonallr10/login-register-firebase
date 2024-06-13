const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const firebaseAdmin = require('firebase-admin');
const serviceAccount = require('path/to/your/serviceAccountKey.json');

require('dotenv').config();
const firebaseAdmin = require('firebase-admin');
const serviceAccount = require(process.env.SERVICE_ACCOUNT_PATH);

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`
});


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

app.use('/auth', authRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
