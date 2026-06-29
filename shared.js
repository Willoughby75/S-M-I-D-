// ---------- SECURE AUTH SYSTEM ----------
// This URL will point to your Kimi AI Python backend once deployed (e.g., Render, Heroku)
const API_BASE_URL = 'https://api.your-smid-backend.com'; 

const SMIDAuth = {
    // We no longer store users in local arrays. The Python backend handles the database.

    async signup(name, email, password) {
        if (!name || !email || !password) {
            showNotification(SMIDi18n.t('notification_error'), 'Please fill all fields', 'error');
            return false;
        }
        if (password.length < 6) {
            showNotification(SMIDi18n.t('notification_error'), 'Password must be at least 6 characters', 'error');
            return false;
        }

        try {
            // Send secure POST request to your Python backend
            const response = await fetch(`${API_BASE_URL}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                showNotification(SMIDi18n.t('notification_error'), data.message || 'Registration failed', 'error');
                return false;
            }

            showNotification(SMIDi18n.t('notification_success'), `Welcome, ${name}! Your account has been created. Please login.`, 'success');
            setTimeout(() => window.location.href = 'login.html', 1500);
            return true;

        } catch (error) {
            console.error("Signup Error:", error);
            showNotification(SMIDi18n.t('notification_error'), 'Server error. Please try again later.', 'error');
            return false;
        }
    },

    async login(email, password) {
        if (!email || !password) {
            showNotification(SMIDi18n.t('notification_error'), 'Please fill all fields', 'error');
            return false;
        }

        try {
            // Send credentials to backend
            const response = await fetch(`${API_BASE_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                showNotification(SMIDi18n.t('notification_error'), data.message || 'Invalid credentials', 'error');
                return false;
            }

            // SECURE STORAGE: Save the JWT token and user data to sessionStorage, not localStorage
            // This ensures data is wiped when the browser tab closes
            sessionStorage.setItem('smid_token', data.token);
            sessionStorage.setItem('smid_current_user', JSON.stringify(data.user));

            showNotification(SMIDi18n.t('notification_success'), `Welcome back, ${data.user.name}!`, 'success');
            updateAuthNav();

            // Redirect to dashboard on success
            setTimeout(() => window.location.href = 'dashboard.html', 1000);
            return true;

        } catch (error) {
            console.error("Login Error:", error);
            showNotification(SMIDi18n.t('notification_error'), 'Server error. Please try again later.', 'error');
            return false;
        }
    },

    logout() {
        // Wipe all session data
        sessionStorage.removeItem('smid_token');
        sessionStorage.removeItem('smid_current_user');

        showNotification(SMIDi18n.t('notification_info'), 'You have been logged out.', 'info');
        updateAuthNav();
        setTimeout(() => window.location.href = 'index.html', 500);
    },

    getUser() {
        return JSON.parse(sessionStorage.getItem('smid_current_user') || 'null');
    },

    getToken() {
        return sessionStorage.getItem('smid_token');
    },

    isLoggedIn() {
        return !!this.getToken();
    }
};

// ---------- SECURE PAGE INIT & ROUTE GUARD ----------
function enforceSecurityGuard() {
    const protectedPages = ['dashboard.html', 'idcard.html'];
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // If user is trying to access a protected page but has no token, kick them out
    if (protectedPages.includes(currentPage) && !SMIDAuth.isLoggedIn()) {
        window.location.replace('login.html');
        return false; // Stop execution
    }

    // If a logged-in user tries to go to the login/register page, send them to dashboard
    const authPages = ['login.html', 'register.html'];
    if (authPages.includes(currentPage) && SMIDAuth.isLoggedIn()) {
        window.location.replace('dashboard.html');
        return false;
    }
    return true;
}

function initPage() {
    // 1. Run the security check FIRST
    if (!enforceSecurityGuard()) return; 

    // 2. Proceed with normal page setup
    SMIDi18n.load();
    SMIDi18n.apply();
    loadTheme();
    updateAuthNav();
    SMIDCloud.updateBadge();
    initSearch();

    // Set active nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Set current language display
    const currentLang = document.getElementById('currentLang');
    if (currentLang) {
        const names = { en: 'English', fr: 'Français', es: 'Español', pt: 'Português', yo: 'Yorùbá', ar: 'العربية', zh: '中文' };
        currentLang.textContent = names[SMIDi18n.current] || 'English';
    }

    // Mark active lang option
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.getAttribute('data-lang') === SMIDi18n.current);
    });
}

document.addEventListener('DOMContentLoaded', initPage);
