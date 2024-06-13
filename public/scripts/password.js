document.getElementById('password-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;
    const confirmPassword = e.target['confirm-password'].value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }

    try {
        await fetch('/auth/create-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        alert('Password created successfully');
        window.location.href = 'index.html';
    } catch (error) {
        console.error('Error creating password:', error);
        alert('Password creation failed. Please try again.');
    }
});
