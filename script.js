(() => {
    const toggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const mobileToggle = document.getElementById('mobile-nav-toggle');
    const nav = document.getElementById('nav');

    // Theme
    const saved = localStorage.getItem('gohuman-theme');
    if (saved) {
        html.dataset.theme = saved;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        html.dataset.theme = 'dark';
    }

    toggle.addEventListener('click', () => {
        const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
        html.dataset.theme = next;
        localStorage.setItem('gohuman-theme', next);
    });

    // Mobile nav
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        nav.classList.toggle('open');
    });

    // Close mobile nav on link click
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            nav.classList.remove('open');
        });
    });
})();
