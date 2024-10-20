document.getElementById('registerForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const fullName = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    const user = {
        FullName: fullName,
        Email: email,
        PasswordHash: password // send the password to hash it in the server
    };

    try {
        const response = await fetch('http://localhost:5145/api/Account/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (response.ok) {
            alert('Registration successful');
            window.location.href = '/html/login.html'; // Redirect to login page after successful registration
        } else {
            const errorData = await response.json();
            console.error('Error:', errorData);
            alert('Registration failed: ' + JSON.stringify(errorData));
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Registration failed');
    }
});
