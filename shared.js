// ============================================
// SMID PLATFORM - SHARED JAVASCRIPT
// Social Media Identification System
// ============================================

// ---------- Particle Network Background ----------
(function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        draw() {
            ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--primary').trim() || '#6366f1';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        particles = [];
        const count = Math.min(80, (canvas.width * canvas.height) / 15000);
        for (let i = 0; i < count; i++) particles.push(new Particle());
    }
    init();

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - dist / 150)})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }
    animate();
})();

// ---------- Theme System ----------
function setTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    document.querySelectorAll('.theme-btn').forEach(btn => btn.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');
    showNotification('Theme Changed', `${theme.charAt(0).toUpperCase() + theme.slice(1)} mode activated`, 'success');
    localStorage.setItem('smid_theme', theme);
}

function loadTheme() {
    const saved = localStorage.getItem('smid_theme') || 'dark';
    document.body.setAttribute('data-theme', saved);
    const btnMap = { dark: 0, light: 1, neon: 2 };
    const btns = document.querySelectorAll('.theme-btn');
    if (btns[btnMap[saved]]) btns[btnMap[saved]].classList.add('active');
}

// ---------- Mobile Menu ----------
function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
    document.querySelector('.hamburger').classList.toggle('active');
}

// ---------- Notifications ----------
function showNotification(title, text, type = 'info') {
    let container = document.getElementById('notificationContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notificationContainer';
        container.className = 'notification-container';
        document.body.appendChild(container);
    }
    const notif = document.createElement('div');
    notif.className = `notification ${type}`;
    notif.innerHTML = `<div class="notification-title">${title}</div><div class="notification-text">${text}</div>`;
    container.appendChild(notif);
    setTimeout(() => notif.classList.add('show'), 10);
    setTimeout(() => {
        notif.classList.remove('show');
        setTimeout(() => notif.remove(), 400);
    }, 4000);
}

// ---------- Cloud Storage ----------
const SMIDCloud = {
    data: [],

    load() {
        try {
            const saved = localStorage.getItem('smid_registrations');
            if (saved) this.data = JSON.parse(saved);
        } catch (e) { this.data = []; }
        this.updateStatus();
        return this.data;
    },

    save(record) {
        record.id = record.id || 'SMID-' + Math.random().toString(36).substr(2, 9).toUpperCase();
        record.timestamp = record.timestamp || new Date().toISOString();
        record.trustScore = record.trustScore || Math.floor(Math.random() * 15) + 85;
        this.data.push(record);
        localStorage.setItem('smid_registrations', JSON.stringify(this.data));
        this.updateStatus();
        return record;
    },

    getAll() { return this.data; },

    getLatest() { return this.data.length > 0 ? this.data[this.data.length - 1] : null; },

    getByCategory(cat) {
        return this.data.filter(r => r.category === cat);
    },

    delete(id) {
        this.data = this.data.filter(r => r.id !== id);
        localStorage.setItem('smid_registrations', JSON.stringify(this.data));
        this.updateStatus();
    },

    clear() {
        this.data = [];
        localStorage.removeItem('smid_registrations');
        this.updateStatus();
    },

    updateStatus() {
        const el = document.getElementById('savedCount');
        if (el) el.textContent = `(${this.data.length} saved)`;
    },

    export() {
        return JSON.stringify(this.data, null, 2);
    }
};

function showCloudInfo() {
    const count = SMIDCloud.data.length;
    showNotification('Cloud Storage', `${count} registration${count !== 1 ? 's' : ''} saved locally`, 'info');
}

// ---------- Navigation Helper ----------
function highlightNav() {
    const path = window.location.pathname;
    const page = path.split('/').pop().replace('.html', '') || 'index';
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') && a.getAttribute('href').includes(page)) {
            a.classList.add('active');
        }
    });
}

// ---------- Initialize ----------
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    SMIDCloud.load();
    highlightNav();
});
