const API_BASE = '/api/auth'; 

//SIGNUP
document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const res = await fetch(`${API_BASE}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
        }),
    });

    const data = await res.json();
    alert(data.message || 'Signup complete!');

});

// Login
document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const res = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: document.getElementById('login-email').value,
            password: document.getElementById('login-password').value,
        }),
    });

    const data = await res.json();

    if (data.token) {
        localStorage.setItem('token', data.token);
        document.getElementById('status').innerText = '✅ Logged in successfully!';
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1000);
    } else {
        alert(data.message || 'Login failed');
    }
      
});
