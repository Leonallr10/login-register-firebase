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
        const isPasswordMatch = await bcrypt.compare(password, data.password);
        if (isPasswordMatch) {
            window.location.href = `user_details.html?username=${username}`;
        } else {
            alert('Incorrect password');
        }
    } catch (error) {
        console.error('Error logging in:', error);
    }
});
