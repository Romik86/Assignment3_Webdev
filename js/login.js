document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', async function(event) {
        event.preventDefault();

        // Get form values
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        const userData = {
            Email: email,
            Password: password
        };

        try {
            // Make POST request to the login API
            const response = await fetch('http://localhost:5145/api/Account/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            const data = await response.json();

            if (response.ok && data.message === 'Login successful') {
                // Store the user's first name in localStorage
                localStorage.setItem('firstName', data.firstName);
                // Redirect to the home page after successful login
                window.location.href = '/html/index.html';
            } else {
                alert('Login failed: ' + data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during login. Please try again.');
        }
    });
});
