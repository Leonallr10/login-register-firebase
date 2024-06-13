document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    try {
        const response = await fetch(`/user/details/${username}`);
        if (!response.ok) {
            throw new Error('User not found');
        }
        const data = await response.json();
        document.getElementById('user-details').innerHTML = `
            <p>Name: ${data.name}</p>
            <p>Email: ${data.email}</p>
            <p>Age: ${data.age}</p>
            <p>Date of Birth: ${data.dob}</p>
            <p>Gender: ${data.gender}</p>
            <p>Occupation: ${data.occupation}</p>
            <p>Address: ${data.address}</p>
            <p>Place: ${data.place}</p>
            <img src="${data.photoURL}" alt="User Photo">
        `;
    } catch (error) {
        console.error('Error fetching user details:', error);
    }
});
