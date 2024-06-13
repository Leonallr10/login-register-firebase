const express = require('express');
const router = express.Router();
const firebaseAdmin = require('firebase-admin');

const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/create-password', async (req, res) => {
    const { username, password } = req.body;
    const userRef = firebase.firestore().collection('users').doc(username);

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        await userRef.update({ password: hashedPassword });
        res.status(200).send('Password created successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
});


module.exports = router;

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    try {
        const userRef = db.collection('users').doc(username);
        const doc = await userRef.get();
        if (!doc.exists) {
            alert('No such user found');
            return;
        }
        const data = doc.data();
        if (data.password === password) {
            window.location.href = `user_details.html?username=${username}`;
        } else {
            alert('Incorrect password');
        }
    } catch (error) {
        console.error('Error logging in:', error);
    }
});
