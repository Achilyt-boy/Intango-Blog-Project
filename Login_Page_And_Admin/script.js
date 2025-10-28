 let currentRole = 'journalist';

        // Demo credentials for both roles
        const credentials = {
            admin: {
                username: 'admin',
                password: 'admin123'
            },
            journalist: {
                username: 'journalist',
                password: 'journalist123'
            }
        };

        function switchRole(role) {
            currentRole = role;
            
            // Update active tab
            document.querySelectorAll('.role-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            event.target.classList.add('active');

            // Update placeholders
            const usernamePlaceholder = role === 'admin' ? 'Enter admin username' : 'Enter journalist username';
            const passwordPlaceholder = role === 'admin' ? 'Enter admin password' : 'Enter journalist password';
            
            document.getElementById('username').placeholder = usernamePlaceholder;
            document.getElementById('password').placeholder = passwordPlaceholder;

            // Update demo credentials
            document.getElementById('demoUsername').textContent = credentials[role].username;
            document.getElementById('demoPassword').textContent = credentials[role].password;

            // Update button text
            const buttonText = role === 'admin' ? 'Sign In as Admin' : 'Sign In as Journalist';
            document.getElementById('submitBtn').textContent = buttonText;

            // Clear error message
            hideError();

            // Clear form
            document.getElementById('loginForm').reset();
        }

        function handleLogin(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Validate credentials
            if (username === credentials[currentRole].username && 
                password === credentials[currentRole].password) {
                // Successful login
                showSuccess();
            } else {
                // Failed login
                showError('Invalid username or password. Please try again.');
            }
        }

        function showError(message) {
            const errorElement = document.getElementById('errorMessage');
            errorElement.textContent = message;
            errorElement.classList.add('show');
        }

        function hideError() {
            const errorElement = document.getElementById('errorMessage');
            errorElement.classList.remove('show');
        }

        function showSuccess() {
            hideError();
            alert(`✅ Successfully logged in as ${currentRole}!\n\nWelcome to Greenwood School News Management System.`);
            
            // In a real application, you would redirect to the dashboard here
            // window.location.href = '/dashboard';
        }