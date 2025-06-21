/**
 * Solar System API v1.0.0
 * A comprehensive JavaScript API for controlling the 3D Solar System Satellite Simulation
 * 
 * @author Solar System Simulation Team
 * @version 1.0.0
 * @license MIT
 */

/**
 * Global Solar System API
 * Provides comprehensive control over the 3D solar system simulation
 * All methods are chainable for fluid programming experience
 */
window.SolarSystemAPI = {
    // Core simulation controls
    simulation: {
        /**
         * Start or resume the simulation
         * @returns {Object} this - for method chaining
         */
        start: function() {
            if (typeof paused !== 'undefined') {
                paused = false;
                updateUI();
            }
            return this;
        },
        
        /**
         * Pause the simulation
         * @returns {Object} this - for method chaining
         */
        pause: function() {
            if (typeof paused !== 'undefined') {
                paused = true;
                updateUI();
            }
            return this;
        },
        
        /**
         * Reset the entire simulation to initial state
         * @returns {Object} this - for method chaining
         */
        reset: function() {
            if (typeof resetSimulation === 'function') {
                resetSimulation();
            }
            return this;
        },
        
        /**
         * Set simulation speed
         * @param {number} speed - Speed multiplier (0.1 to 3.0)
         * @returns {Object} this - for method chaining
         */
        setSpeed: function(speed) {
            if (speed >= 0.1 && speed <= 3 && typeof simulationSpeed !== 'undefined') {
                simulationSpeed = speed;
                const speedSlider = document.getElementById('simulation-speed');
                if (speedSlider) {
                    speedSlider.value = speed;
                    if (typeof updateSimulationSpeed === 'function') {
                        updateSimulationSpeed();
                    }
                }
            }
            return this;
        },
        
        /**
         * Get current simulation speed
         * @returns {number} Current speed multiplier
         */
        getSpeed: function() {
            return typeof simulationSpeed !== 'undefined' ? simulationSpeed : 1.0;
        },
        
        /**
         * Check if simulation is paused
         * @returns {boolean} True if paused
         */
        isPaused: function() {
            return typeof paused !== 'undefined' ? paused : false;
        },
        
        /**
         * Get comprehensive simulation state
         * @returns {Object} Current simulation state
         */
        getState: function() {
            return {
                paused: typeof paused !== 'undefined' ? paused : false,
                speed: typeof simulationSpeed !== 'undefined' ? simulationSpeed : 1.0,
                earthOrbitAngle: typeof earthOrbitAngle !== 'undefined' ? earthOrbitAngle : 0,
                moonOrbitAngle: typeof moonOrbitAngle !== 'undefined' ? moonOrbitAngle : 0,
                showOrbits: typeof showOrbits !== 'undefined' ? showOrbits : true,
                showTrails: typeof showTrails !== 'undefined' ? showTrails : false,
                negativeLighting: typeof negativeLighting !== 'undefined' ? negativeLighting : false
            };
        }
    },
    
    // Camera system
    camera: {
        /**
         * Set camera to a specific preset
         * @param {number} presetIndex - Index of camera preset (0-7)
         * @returns {Object} this - for method chaining
         */
        setPreset: function(presetIndex) {
            if (typeof setCameraPreset === 'function') {
                setCameraPreset(presetIndex);
            }
            return this;
        },
        
        /**
         * Get current camera preset index
         * @returns {number} Current preset index
         */
        getCurrentPreset: function() {
            return typeof currentCameraPreset !== 'undefined' ? currentCameraPreset : 0;
        },
        
        /**
         * Get all available camera presets
         * @returns {Array} Array of preset objects
         */
        getPresets: function() {
            if (typeof cameraPresets !== 'undefined') {
                return cameraPresets.map((preset, index) => ({
                    index: index,
                    name: preset.name,
                    description: preset.description
                }));
            }
            return [];
        },
        
        /**
         * Enable free camera mode for manual control
         * @returns {Object} this - for method chaining
         */
        enableFreeMode: function() {
            if (typeof toggleFreeMode === 'function' && typeof freeMode !== 'undefined' && !freeMode) {
                toggleFreeMode();
            }
            return this;
        },
        
        /**
         * Disable free camera mode
         * @returns {Object} this - for method chaining
         */
        disableFreeMode: function() {
            if (typeof toggleFreeMode === 'function' && typeof freeMode !== 'undefined' && freeMode) {
                toggleFreeMode();
            }
            return this;
        },
        
        /**
         * Enable Follow Earth mode
         * @returns {Object} this - for method chaining
         */
        enableFollowEarth: function() {
            if (typeof toggleFollowEarth === 'function' && typeof followEarth !== 'undefined' && !followEarth) {
                toggleFollowEarth();
            }
            return this;
        },
        
        /**
         * Disable Follow Earth mode
         * @returns {Object} this - for method chaining
         */
        disableFollowEarth: function() {
            if (typeof toggleFollowEarth === 'function' && typeof followEarth !== 'undefined' && followEarth) {
                toggleFollowEarth();
            }
            return this;
        },
        
        /**
         * Set camera position directly
         * @param {number} x - X coordinate
         * @param {number} y - Y coordinate
         * @param {number} z - Z coordinate
         * @returns {Object} this - for method chaining
         */
        setPosition: function(x, y, z) {
            if (typeof camera !== 'undefined' && camera.position) {
                camera.position.set(x, y, z);
            }
            return this;
        },
        
        /**
         * Get current camera position
         * @returns {Object} Position object with x, y, z coordinates
         */
        getPosition: function() {
            if (typeof camera !== 'undefined' && camera.position) {
                return {
                    x: camera.position.x,
                    y: camera.position.y,
                    z: camera.position.z
                };
            }
            return { x: 0, y: 0, z: 0 };
        },
        
        /**
         * Point camera at specific coordinates
         * @param {number} x - X coordinate to look at
         * @param {number} y - Y coordinate to look at
         * @param {number} z - Z coordinate to look at
         * @returns {Object} this - for method chaining
         */
        lookAt: function(x, y, z) {
            if (typeof camera !== 'undefined' && camera.lookAt) {
                camera.lookAt(x, y, z);
            }
            return this;
        }
    },
    
    // Satellite management
    satellites: {
        /**
         * Get all satellites information
         * @returns {Array} Array of satellite objects
         */
        getAll: function() {
            if (typeof satellites !== 'undefined') {
                return satellites.map(sat => ({
                    id: sat.userData.id,
                    type: sat.userData.type,
                    status: sat.userData.status,
                    health: sat.userData.health,
                    position: sat.position,
                    class: sat.userData.class
                }));
            }
            return [];
        },
        
        /**
         * Get satellites by specific type
         * @param {string} type - Satellite type (LEO_COMM, LEO_WEATHER, etc.)
         * @returns {Array} Array of matching satellites
         */
        getByType: function(type) {
            return this.getAll().filter(sat => sat.type === type);
        },
        
        /**
         * Get all operational satellites
         * @returns {Array} Array of operational satellites
         */
        getOperational: function() {
            return this.getAll().filter(sat => sat.status === 'operational');
        },
        
        /**
         * Get all failed satellites
         * @returns {Array} Array of failed satellites
         */
        getFailed: function() {
            return this.getAll().filter(sat => sat.status === 'failed');
        },
        
        /**
         * Trigger random satellite failure
         * @returns {Object} this - for method chaining
         */
        failRandom: function() {
            if (typeof randomFailure === 'function') {
                randomFailure();
            }
            return this;
        },
        
        /**
         * Highlight satellites of specific type
         * @param {string} type - Satellite type to highlight
         * @returns {Object} this - for method chaining
         */
        highlight: function(type) {
            if (typeof highlightSatelliteClass === 'function') {
                highlightSatelliteClass(type);
            }
            return this;
        },
        
        /**
         * Remove highlighting from all satellites
         * @returns {Object} this - for method chaining
         */
        unhighlight: function() {
            if (typeof unhighlightAllSatellites === 'function') {
                unhighlightAllSatellites();
            }
            return this;
        },
        
        /**
         * Set satellite constellation configuration
         * @param {Object} config - Configuration object with satellite counts
         * @returns {Object} this - for method chaining
         */
        setConfiguration: function(config) {
            Object.keys(config).forEach(key => {
                const inputId = {
                    'LEO_COMM': 'leo-comm',
                    'LEO_WEATHER': 'weather',
                    'MEO_NAV': 'nav',
                    'GEO_COMM': 'geo-comm',
                    'MILITARY': 'military'
                }[key];
                
                if (inputId) {
                    const input = document.getElementById(inputId);
                    if (input) {
                        input.value = config[key];
                    }
                }
            });
            
            if (typeof applySatelliteConfig === 'function') {
                applySatelliteConfig();
            }
            return this;
        },
        
        /**
         * Get current satellite configuration
         * @returns {Object} Current satellite counts by type
         */
        getConfiguration: function() {
            return {
                LEO_COMM: parseInt(document.getElementById('leo-comm')?.value || 0),
                LEO_WEATHER: parseInt(document.getElementById('weather')?.value || 0),
                MEO_NAV: parseInt(document.getElementById('nav')?.value || 0),
                GEO_COMM: parseInt(document.getElementById('geo-comm')?.value || 0),
                MILITARY: parseInt(document.getElementById('military')?.value || 0)
            };
        }
    },
    
    // Visual controls
    visuals: {
        /**
         * Show orbital rings
         * @returns {Object} this - for method chaining
         */
        showOrbits: function() {
            if (typeof toggleOrbits === 'function' && typeof showOrbits !== 'undefined' && !showOrbits) {
                toggleOrbits();
            }
            return this;
        },
        
        /**
         * Hide orbital rings
         * @returns {Object} this - for method chaining
         */
        hideOrbits: function() {
            if (typeof toggleOrbits === 'function' && typeof showOrbits !== 'undefined' && showOrbits) {
                toggleOrbits();
            }
            return this;
        },
        
        /**
         * Show satellite trails
         * @returns {Object} this - for method chaining
         */
        showTrails: function() {
            if (typeof toggleTrails === 'function' && typeof showTrails !== 'undefined' && !showTrails) {
                toggleTrails();
            }
            return this;
        },
        
        /**
         * Hide satellite trails
         * @returns {Object} this - for method chaining
         */
        hideTrails: function() {
            if (typeof toggleTrails === 'function' && typeof showTrails !== 'undefined' && showTrails) {
                toggleTrails();
            }
            return this;
        },
        
        /**
         * Enable negative lighting mode
         * @returns {Object} this - for method chaining
         */
        enableNegativeMode: function() {
            if (typeof toggleNegativeLighting === 'function' && typeof negativeLighting !== 'undefined' && !negativeLighting) {
                toggleNegativeLighting();
            }
            return this;
        },
        
        /**
         * Disable negative lighting mode
         * @returns {Object} this - for method chaining
         */
        disableNegativeMode: function() {
            if (typeof toggleNegativeLighting === 'function' && typeof negativeLighting !== 'undefined' && negativeLighting) {
                toggleNegativeLighting();
            }
            return this;
        },
        
        /**
         * Show UI panels
         * @returns {Object} this - for method chaining
         */
        showUI: function() {
            if (typeof toggleUI === 'function' && typeof uiVisible !== 'undefined' && !uiVisible) {
                toggleUI();
            }
            return this;
        },
        
        /**
         * Hide UI panels
         * @returns {Object} this - for method chaining
         */
        hideUI: function() {
            if (typeof toggleUI === 'function' && typeof uiVisible !== 'undefined' && uiVisible) {
                toggleUI();
            }
            return this;
        },
        
        /**
         * Get current visual state
         * @returns {Object} Current visual settings
         */
        getVisualState: function() {
            return {
                orbits: typeof showOrbits !== 'undefined' ? showOrbits : true,
                trails: typeof showTrails !== 'undefined' ? showTrails : false,
                negative: typeof negativeLighting !== 'undefined' ? negativeLighting : false,
                ui: typeof uiVisible !== 'undefined' ? uiVisible : true
            };
        }
    },
    
    // Event system
    events: {
        callbacks: {},
        
        /**
         * Subscribe to an event
         * @param {string} eventName - Name of event to listen for
         * @param {Function} callback - Function to call when event fires
         * @returns {Object} this - for method chaining
         */
        on: function(eventName, callback) {
            if (!this.callbacks[eventName]) {
                this.callbacks[eventName] = [];
            }
            this.callbacks[eventName].push(callback);
            return this;
        },
        
        /**
         * Unsubscribe from an event
         * @param {string} eventName - Name of event to stop listening for
         * @param {Function} callback - Specific callback to remove
         * @returns {Object} this - for method chaining
         */
        off: function(eventName, callback) {
            if (this.callbacks[eventName]) {
                const index = this.callbacks[eventName].indexOf(callback);
                if (index > -1) {
                    this.callbacks[eventName].splice(index, 1);
                }
            }
            return this;
        },
        
        /**
         * Emit an event to all subscribers
         * @param {string} eventName - Name of event to emit
         * @param {*} data - Data to pass to event handlers
         * @returns {Object} this - for method chaining
         */
        emit: function(eventName, data) {
            if (this.callbacks[eventName]) {
                this.callbacks[eventName].forEach(callback => {
                    try {
                        callback(data);
                    } catch (error) {
                        console.error('Event callback error:', error);
                    }
                });
            }
            return this;
        }
    },
    
    // Utility functions
    utils: {
        /**
         * Get API version
         * @returns {string} Version string
         */
        getVersion: function() {
            return "1.0.0";
        },
        
        /**
         * Export complete simulation configuration
         * @returns {Object} Complete configuration object
         */
        exportConfiguration: function() {
            return {
                simulation: SolarSystemAPI.simulation.getState(),
                satellites: SolarSystemAPI.satellites.getConfiguration(),
                visuals: SolarSystemAPI.visuals.getVisualState(),
                camera: {
                    preset: typeof currentCameraPreset !== 'undefined' ? currentCameraPreset : 0,
                    freeMode: typeof freeMode !== 'undefined' ? freeMode : false,
                    followEarth: typeof followEarth !== 'undefined' ? followEarth : false,
                    position: SolarSystemAPI.camera.getPosition()
                }
            };
        },
        
        /**
         * Import and apply configuration
         * @param {Object} config - Configuration object to apply
         * @returns {Object} this - for method chaining
         */
        importConfiguration: function(config) {
            if (config.simulation && config.simulation.speed) {
                SolarSystemAPI.simulation.setSpeed(config.simulation.speed);
            }
            
            if (config.satellites) {
                SolarSystemAPI.satellites.setConfiguration(config.satellites);
            }
            
            if (config.visuals) {
                const visuals = SolarSystemAPI.visuals.getVisualState();
                if (config.visuals.orbits !== visuals.orbits) {
                    SolarSystemAPI.visuals[config.visuals.orbits ? 'showOrbits' : 'hideOrbits']();
                }
                if (config.visuals.trails !== visuals.trails) {
                    SolarSystemAPI.visuals[config.visuals.trails ? 'showTrails' : 'hideTrails']();
                }
                if (config.visuals.negative !== visuals.negative) {
                    SolarSystemAPI.visuals[config.visuals.negative ? 'enableNegativeMode' : 'disableNegativeMode']();
                }
            }
            
            if (config.camera && config.camera.preset !== undefined) {
                SolarSystemAPI.camera.setPreset(config.camera.preset);
            }
            
            return this;
        },
        
        /**
         * Take screenshot of current simulation
         * @returns {string} Base64 encoded PNG image data URL
         */
        takeScreenshot: function() {
            if (typeof renderer !== 'undefined' && renderer.domElement) {
                return renderer.domElement.toDataURL('image/png');
            }
            return null;
        },
        
        /**
         * Get system information and performance stats
         * @returns {Object} System information object
         */
        getSystemInfo: function() {
            const info = {
                version: this.getVersion(),
                timestamp: Date.now()
            };
            
            if (typeof renderer !== 'undefined') {
                info.renderer = renderer.info;
            }
            
            if (typeof scene !== 'undefined') {
                info.scene = {
                    children: scene.children.length
                };
            }
            
            if (typeof satellites !== 'undefined') {
                info.scene.satellites = satellites.length;
            }
            
            if (typeof planets !== 'undefined') {
                info.scene.planets = Object.keys(planets).length;
            }
            
            info.camera = {
                position: SolarSystemAPI.camera.getPosition(),
                preset: typeof currentCameraPreset !== 'undefined' ? currentCameraPreset : 0
            };
            
            return info;
        }
    },
    
    /**
     * Initialize the API (called automatically when simulation loads)
     * @private
     */
    _initialize: function() {
        setTimeout(() => {
            this.events.emit('initialized', {
                timestamp: Date.now(),
                version: this.utils.getVersion()
            });
        }, 100);
        
        console.log(`
🌟 Solar System API v${this.utils.getVersion()} Ready! 🌟

Example usage:
SolarSystemAPI.simulation.setSpeed(2.0);
SolarSystemAPI.camera.setPreset(3);
SolarSystemAPI.visuals.hideUI();
SolarSystemAPI.satellites.highlight('LEO_COMM');

API Modules:
- simulation: Control playback, speed, state
- camera: Camera presets, positioning, modes  
- satellites: Manage satellite constellations
- visuals: Toggle orbits, trails, UI, negative mode
- events: Subscribe to simulation events
- utils: Export/import, screenshots, system info

Try: SolarSystemAPI.utils.getSystemInfo()
        `);
    }
};

// Auto-initialize when window loads
if (typeof window !== 'undefined') {
    window.addEventListener('load', function() {
        setTimeout(() => {
            if (window.SolarSystemAPI && window.SolarSystemAPI._initialize) {
                window.SolarSystemAPI._initialize();
            }
        }, 200);
    });
}

// Helper function to update UI elements (referenced by API)
function updateUI() {
    const pauseBtn = document.querySelector('button[onclick="togglePause()"]');
    if (pauseBtn && typeof paused !== 'undefined') {
        pauseBtn.textContent = paused ? '▶️ RESUME' : '⏸️ PAUSE';
    }
}
