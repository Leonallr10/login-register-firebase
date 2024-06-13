document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const name = e.target.name.value;
    const age = e.target.age.value;
    const dob = e.target.dob.value;
    const gender = e.target.gender.value;
    const occupation = e.target.occupation.value;
    const address = e.target.address.value;
    const place = e.target.place.value;
    const photo = e.target.photo.files[0];

    if (!email || !name || !age || !dob || !gender || !occupation || !address || !place || !photo) {
        alert('All fields are required.');
        return;
    }

    try {
        const storageRef = firebase.storage().ref();
        const photoRef = storageRef.child('photos/' + photo.name);
        const snapshot = await photoRef.put(photo);
        const url = await snapshot.ref.getDownloadURL();

        await fetch('/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email, name, age, dob, gender, occupation, address, place, photoURL: url
            })
        });

        alert('Registration successful! Please create a password.');
        window.location.href = `create_password.html?username=${email}`;
    } catch (error) {
        console.error('Error registering user:', error);
        alert('Registration failed. Please try again.');
    }
});
