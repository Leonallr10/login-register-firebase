router.post('/register', async (req, res) => {
    const { email, name, age, dob, gender, occupation, address, place, photoURL } = req.body;

    if (!email || !name || !age || !dob || !gender || !occupation || !address || !place || !photoURL) {
        return res.status(400).send('All fields are required');
    }

    try {
        const userRef = firebase.firestore().collection('users').doc(email);
        await userRef.set({
            email, name, age, dob, gender, occupation, address, place, photoURL
        });
        res.status(200).send('User registered successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.get('/details/:username', async (req, res) => {
    const { username } = req.params;
    try {
        const userRef = firebase.firestore().collection('users').doc(username);
        const doc = await userRef.get();
        if (!doc.exists) {
            return res.status(404).send('User not found');
        }
        res.status(200).json(doc.data());
    } catch (error) {
        res.status(400).send(error.message);
    }
});


module.exports = router;
