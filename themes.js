/**
 * sat-sol-sim Theme System
 * Comprehensive theming support across all pages
 * @author david@atomic47.co
 */

const SatSolSimThemes = {
    // Theme definitions
    themes: {
        'classic': {
            name: 'Classic Terminal',
            icon: '🟢',
            colors: {
                '--primary-bg': '#001122',
                '--secondary-bg': 'rgba(0, 17, 34, 0.95)',
                '--tertiary-bg': 'rgba(0, 0, 0, 0.8)',
                '--primary-text': '#00ff00',
                '--secondary-text': '#00ff88',
                '--accent-text': '#00ccff',
                '--border-color': '#00ff00',
                '--hover-bg': 'rgba(0, 255, 0, 0.1)',
                '--panel-bg': 'rgba(0, 17, 34, 0.9)',
                '--button-bg': '#003300',
                '--button-hover': '#004400',
                '--button-active': '#006600',
                '--input-bg': '#003300',
                '--error-color': '#ff3333',
                '--warning-color': '#ffff33',
                '--success-color': '#50fa7b',
                '--shadow-color': 'rgba(0, 255, 0, 0.3)',
                '--gradient-start': 'rgba(0, 17, 34, 0.9)',
                '--gradient-end': 'rgba(0, 34, 68, 0.7)'
            }
        },
        'cyberpunk': {
            name: 'Cyberpunk Neon',
            icon: '🟣',
            colors: {
                '--primary-bg': '#0a0a0a',
                '--secondary-bg': 'rgba(10, 10, 10, 0.95)',
                '--tertiary-bg': 'rgba(20, 0, 30, 0.8)',
                '--primary-text': '#ff00ff',
                '--secondary-text': '#ff44ff',
                '--accent-text': '#00ffff',
                '--border-color': '#ff00ff',
                '--hover-bg': 'rgba(255, 0, 255, 0.1)',
                '--panel-bg': 'rgba(20, 0, 30, 0.9)',
                '--button-bg': '#330033',
                '--button-hover': '#440044',
                '--button-active': '#660066',
                '--input-bg': '#330033',
                '--error-color': '#ff0080',
                '--warning-color': '#ffff00',
                '--success-color': '#00ff80',
                '--shadow-color': 'rgba(255, 0, 255, 0.3)',
                '--gradient-start': 'rgba(20, 0, 30, 0.9)',
                '--gradient-end': 'rgba(40, 0, 60, 0.7)'
            }
        },
        'ocean': {
            name: 'Ocean Blue',
            icon: '🔵',
            colors: {
                '--primary-bg': '#001e3c',
                '--secondary-bg': 'rgba(0, 30, 60, 0.95)',
                '--tertiary-bg': 'rgba(0, 20, 40, 0.8)',
                '--primary-text': '#00aaff',
                '--secondary-text': '#44ccff',
                '--accent-text': '#88ddff',
                '--border-color': '#00aaff',
                '--hover-bg': 'rgba(0, 170, 255, 0.1)',
                '--panel-bg': 'rgba(0, 30, 60, 0.9)',
                '--button-bg': '#003366',
                '--button-hover': '#004477',
                '--button-active': '#0066aa',
                '--input-bg': '#003366',
                '--error-color': '#ff4444',
                '--warning-color': '#ffaa00',
                '--success-color': '#44ff88',
                '--shadow-color': 'rgba(0, 170, 255, 0.3)',
                '--gradient-start': 'rgba(0, 30, 60, 0.9)',
                '--gradient-end': 'rgba(0, 60, 120, 0.7)'
            }
        },
        'forest': {
            name: 'Forest Green',
            icon: '🌿',
            colors: {
                '--primary-bg': '#0f1f0f',
                '--secondary-bg': 'rgba(15, 31, 15, 0.95)',
                '--tertiary-bg': 'rgba(10, 25, 10, 0.8)',
                '--primary-text': '#44ff44',
                '--secondary-text': '#66ff66',
                '--accent-text': '#88ff88',
                '--border-color': '#44ff44',
                '--hover-bg': 'rgba(68, 255, 68, 0.1)',
                '--panel-bg': 'rgba(15, 31, 15, 0.9)',
                '--button-bg': '#1a331a',
                '--button-hover': '#2a442a',
                '--button-active': '#3a553a',
                '--input-bg': '#1a331a',
                '--error-color': '#ff6666',
                '--warning-color': '#ffcc44',
                '--success-color': '#66ff66',
                '--shadow-color': 'rgba(68, 255, 68, 0.3)',
                '--gradient-start': 'rgba(15, 31, 15, 0.9)',
                '--gradient-end': 'rgba(30, 62, 30, 0.7)'
            }
        },
        'sunset': {
            name: 'Sunset Orange',
            icon: '🟠',
            colors: {
                '--primary-bg': '#2a1a0a',
                '--secondary-bg': 'rgba(42, 26, 10, 0.95)',
                '--tertiary-bg': 'rgba(35, 20, 5, 0.8)',
                '--primary-text': '#ff8844',
                '--secondary-text': '#ffaa66',
                '--accent-text': '#ffcc88',
                '--border-color': '#ff8844',
                '--hover-bg': 'rgba(255, 136, 68, 0.1)',
                '--panel-bg': 'rgba(42, 26, 10, 0.9)',
                '--button-bg': '#4a2a1a',
                '--button-hover': '#5a3a2a',
                '--button-active': '#6a4a3a',
                '--input-bg': '#4a2a1a',
                '--error-color': '#ff4444',
                '--warning-color': '#ffdd44',
                '--success-color': '#88ff44',
                '--shadow-color': 'rgba(255, 136, 68, 0.3)',
                '--gradient-start': 'rgba(42, 26, 10, 0.9)',
                '--gradient-end': 'rgba(84, 52, 20, 0.7)'
            }
        },
        'midnight': {
            name: 'Midnight Purple',
            icon: '🟣',
            colors: {
                '--primary-bg': '#1a0a2a',
                '--secondary-bg': 'rgba(26, 10, 42, 0.95)',
                '--tertiary-bg': 'rgba(20, 5, 35, 0.8)',
                '--primary-text': '#aa88ff',
                '--secondary-text': '#cc99ff',
                '--accent-text': '#ddaaff',
                '--border-color': '#aa88ff',
                '--hover-bg': 'rgba(170, 136, 255, 0.1)',
                '--panel-bg': 'rgba(26, 10, 42, 0.9)',
                '--button-bg': '#2a1a4a',
                '--button-hover': '#3a2a5a',
                '--button-active': '#4a3a6a',
                '--input-bg': '#2a1a4a',
                '--error-color': '#ff6666',
                '--warning-color': '#ffaa66',
                '--success-color': '#66ff88',
                '--shadow-color': 'rgba(170, 136, 255, 0.3)',
                '--gradient-start': 'rgba(26, 10, 42, 0.9)',
                '--gradient-end': 'rgba(52, 20, 84, 0.7)'
            }
        },
        'light': {
            name: 'Light Mode',
            icon: '☀️',
            colors: {
                '--primary-bg': '#ffffff',
                '--secondary-bg': 'rgba(255, 255, 255, 0.98)',
                '--tertiary-bg': 'rgba(248, 249, 250, 0.95)',
                '--primary-text': '#2c3e50',
                '--secondary-text': '#3498db',
                '--accent-text': '#2980b9',
                '--border-color': '#bdc3c7',
                '--hover-bg': 'rgba(52, 152, 219, 0.08)',
                '--panel-bg': 'rgba(255, 255, 255, 0.98)',
                '--button-bg': '#ecf0f1',
                '--button-hover': '#d5dbdb',
                '--button-active': '#3498db',
                '--input-bg': '#ffffff',
                '--error-color': '#e74c3c',
                '--warning-color': '#f39c12',
                '--success-color': '#27ae60',
                '--shadow-color': 'rgba(0, 0, 0, 0.08)',
                '--gradient-start': 'rgba(255, 255, 255, 0.95)',
                '--gradient-end': 'rgba(236, 240, 241, 0.9)'
            }
        }
    },

    // Current theme
    currentTheme: 'classic',

    // Initialize theme system
    init() {
        console.log('Theme system initialized');
        this.loadTheme();
        this.createThemeSelector();
        this.applyTheme(this.currentTheme);
    },

    // Load theme from localStorage
    loadTheme() {
        const saved = localStorage.getItem('sat-sol-sim-theme');
        if (saved && this.themes[saved]) {
            this.currentTheme = saved;
        }
    },

    // Save theme to localStorage
    saveTheme(themeName) {
        localStorage.setItem('sat-sol-sim-theme', themeName);
    },

    // Apply theme to the page
    applyTheme(themeName) {
        if (!this.themes[themeName]) return;

        const theme = this.themes[themeName];
        const root = document.documentElement;

        // Apply CSS custom properties
        Object.entries(theme.colors).forEach(([property, value]) => {
            root.style.setProperty(property, value);
        });

        // Update body class for special theme handling
        document.body.className = document.body.className.replace(/theme-\w+/g, '');
        document.body.classList.add(`theme-${themeName}`);

        this.currentTheme = themeName;
        this.saveTheme(themeName);

        // Update theme selector if it exists
        this.updateThemeSelector();

        // Dispatch theme change event
        window.dispatchEvent(new CustomEvent('themeChanged', {
            detail: { themeName, theme }
        }));
    },

    // Create theme selector UI
    createThemeSelector() {
        if (document.getElementById('theme-selector')) return;

        const selector = document.createElement('div');
        selector.id = 'theme-selector';
        selector.innerHTML = `
            <div class="theme-selector-toggle" id="theme-toggle">
                🎨
            </div>
            <div class="theme-selector-menu" id="theme-menu" style="display: none;">
                <div class="theme-selector-header">Choose Theme</div>
                <div class="theme-options">
                    ${Object.entries(this.themes).map(([key, theme]) => `
                        <div class="theme-option ${key === this.currentTheme ? 'active' : ''}" 
                             data-theme="${key}">
                            <span class="theme-icon">${theme.icon}</span>
                            <span class="theme-name">${theme.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        // Add styles for theme selector
        const style = document.createElement('style');
        style.textContent = `
            #theme-selector {
                position: fixed;
                top: 80px;
                right: 20px;
                z-index: 1001;
                font-family: 'Courier New', monospace;
            }

            .theme-selector-toggle {
                width: 40px;
                height: 40px;
                background: var(--panel-bg);
                border: 1px solid var(--border-color);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                font-size: 18px;
                transition: all 0.3s;
                backdrop-filter: blur(10px);
            }

            .theme-selector-toggle:hover {
                transform: scale(1.1);
                box-shadow: 0 0 15px var(--shadow-color);
            }

            .theme-selector-menu {
                position: absolute;
                top: 50px;
                right: 0;
                background: var(--panel-bg);
                border: 1px solid var(--border-color);
                border-radius: 8px;
                padding: 10px;
                min-width: 200px;
                backdrop-filter: blur(10px);
                box-shadow: 0 5px 20px var(--shadow-color);
            }

            .theme-selector-header {
                color: var(--secondary-text);
                font-size: 12px;
                margin-bottom: 8px;
                text-align: center;
                border-bottom: 1px solid var(--border-color);
                padding-bottom: 5px;
            }

            .theme-option {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 8px 12px;
                cursor: pointer;
                border-radius: 4px;
                transition: all 0.2s;
                color: var(--primary-text);
                font-size: 11px;
            }

            .theme-option:hover {
                background: var(--hover-bg);
            }

            .theme-option.active {
                background: var(--button-active);
                color: var(--secondary-text);
            }

            .theme-icon {
                font-size: 14px;
            }

            @media (max-width: 768px) {
                #theme-selector {
                    top: 60px;
                    right: 10px;
                }
                
                .theme-selector-toggle {
                    width: 35px;
                    height: 35px;
                    font-size: 16px;
                }
                
                .theme-selector-menu {
                    min-width: 180px;
                }
            }
        `;

        document.head.appendChild(style);
        document.body.appendChild(selector);

        // Add light mode specific styles
        this.addLightModeStyles();

        // Add event listeners
        this.setupThemeSelector();
    },

    // Setup theme selector event listeners
    setupThemeSelector() {
        const toggle = document.getElementById('theme-toggle');
        const menu = document.getElementById('theme-menu');
        const options = document.querySelectorAll('.theme-option');

        toggle.addEventListener('click', () => {
            menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
        });

        options.forEach(option => {
            option.addEventListener('click', () => {
                const themeName = option.dataset.theme;
                this.applyTheme(themeName);
                menu.style.display = 'none';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('#theme-selector')) {
                menu.style.display = 'none';
            }
        });
    },

    // Update theme selector active state
    updateThemeSelector() {
        const options = document.querySelectorAll('.theme-option');
        options.forEach(option => {
            option.classList.toggle('active', option.dataset.theme === this.currentTheme);
        });
    },

    // Get current theme
    getCurrentTheme() {
        return this.themes[this.currentTheme];
    },

    // Get all available themes
    getAvailableThemes() {
        return Object.keys(this.themes);
    },

    // Add light mode specific styles
    addLightModeStyles() {
        const lightModeStyle = document.createElement('style');
        lightModeStyle.id = 'light-mode-overrides';
        lightModeStyle.textContent = `
            /* Light Mode Specific Overrides */
            body.theme-light .stars {
                background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="10" cy="10" r="0.3" fill="gray" opacity="0.3"/><circle cx="30" cy="25" r="0.2" fill="gray" opacity="0.2"/><circle cx="50" cy="15" r="0.25" fill="gray" opacity="0.25"/><circle cx="70" cy="35" r="0.15" fill="gray" opacity="0.15"/><circle cx="85" cy="20" r="0.2" fill="gray" opacity="0.2"/><circle cx="20" cy="40" r="0.25" fill="gray" opacity="0.25"/><circle cx="60" cy="50" r="0.15" fill="gray" opacity="0.15"/><circle cx="40" cy="70" r="0.2" fill="gray" opacity="0.2"/><circle cx="80" cy="60" r="0.25" fill="gray" opacity="0.25"/><circle cx="15" cy="80" r="0.15" fill="gray" opacity="0.15"/></svg>') repeat;
                opacity: 0.1;
            }

            body.theme-light .feature-card,
            body.theme-light .api-card,
            body.theme-light .demo-card {
                background: rgba(255, 255, 255, 0.95) !important;
                border: 1px solid var(--border-color) !important;
                box-shadow: 0 4px 12px var(--shadow-color) !important;
            }

            body.theme-light .feature-card h3,
            body.theme-light .api-card h3,
            body.theme-light .demo-card h3 {
                color: var(--primary-text) !important;
            }

            body.theme-light .feature-card p,
            body.theme-light .api-card p,
            body.theme-light .demo-card p {
                color: var(--primary-text) !important;
                opacity: 0.8;
            }

            body.theme-light .feature-icon,
            body.theme-light .api-icon {
                filter: grayscale(0.2) brightness(0.8);
            }

            body.theme-light .code-block {
                background: #f8f9fa !important;
                border: 1px solid var(--border-color) !important;
                color: var(--primary-text) !important;
            }

            body.theme-light .terminal-content {
                background: #f8f9fa !important;
                color: var(--primary-text) !important;
            }

            body.theme-light .terminal-command {
                color: var(--accent-text) !important;
            }

            body.theme-light .terminal-comment {
                color: #6c757d !important;
            }

            body.theme-light .terminal-prompt {
                color: var(--secondary-text) !important;
            }

            body.theme-light .demo-card .features li {
                color: var(--primary-text) !important;
                opacity: 0.8;
            }

            body.theme-light .demo-card .launch-btn {
                background: var(--button-bg) !important;
                color: var(--primary-text) !important;
                border: 1px solid var(--border-color) !important;
            }

            body.theme-light .demo-card:hover .launch-btn {
                background: var(--button-hover) !important;
            }

            body.theme-light .info-box {
                background: rgba(255, 255, 255, 0.95) !important;
                border: 1px solid var(--border-color) !important;
            }

            body.theme-light .info-box h3 {
                color: var(--primary-text) !important;
            }

            body.theme-light .info-box ul li {
                color: var(--primary-text) !important;
                opacity: 0.8;
            }

            body.theme-light .method-card {
                background: rgba(255, 255, 255, 0.95) !important;
                border: 1px solid var(--border-color) !important;
            }

            body.theme-light .method-name {
                color: var(--accent-text) !important;
            }

            body.theme-light .method-description,
            body.theme-light .parameters,
            body.theme-light .returns {
                color: var(--primary-text) !important;
                opacity: 0.8;
            }

            body.theme-light .example-box {
                background: rgba(248, 249, 250, 0.95) !important;
                border: 1px solid var(--border-color) !important;
            }

            body.theme-light .example-title {
                color: var(--primary-text) !important;
            }

            /* Remove text shadows in light mode */
            body.theme-light h1,
            body.theme-light h2,
            body.theme-light h3,
            body.theme-light .logo,
            body.theme-light .stat-number,
            body.theme-light .highlight {
                text-shadow: none !important;
            }

            /* Adjust link hover effects for light mode */
            body.theme-light .nav-links a:hover,
            body.theme-light .footer-links a:hover {
                text-shadow: none !important;
                background: var(--hover-bg) !important;
            }

            /* Light mode button styles */
            body.theme-light .btn {
                box-shadow: 0 2px 4px var(--shadow-color) !important;
            }

            body.theme-light .btn:hover {
                box-shadow: 0 4px 8px var(--shadow-color) !important;
            }
        `;
        document.head.appendChild(lightModeStyle);
    }
};

// Auto-initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => SatSolSimThemes.init());
} else {
    SatSolSimThemes.init();
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SatSolSimThemes;
} 