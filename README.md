# 🌌 Solar System Satellite Simulation

A stunning, interactive 3D solar system simulation featuring realistic planetary motion, satellite constellations, and comprehensive programmatic control through a powerful JavaScript API.

![Solar System Demo](https://img.shields.io/badge/Status-Ready-brightgreen) ![Version](https://img.shields.io/badge/Version-1.0.0-blue) ![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Features

### 🪐 **Complete Solar System**
- **8 Planets** with realistic colors, sizes, and orbital mechanics
- **Sun** with dynamic flame animation and proper lighting
- **Earth-Moon System** with satellite constellations
- **Saturn's Rings** with translucent beauty
- **Accurate Orbital Speeds** from Mercury's race to Neptune's crawl

### 🛰️ **Advanced Satellite System**
- **5 Satellite Classes**: LEO Communications, Weather, GPS/Navigation, GEO Communications, Military
- **Real-time Orbital Mechanics** with proper inclinations and speeds
- **Interactive Highlighting** - click and hold satellite types to highlight constellations
- **Failure Simulation** with visual indicators and status tracking
- **Customizable Constellations** with live configuration

### 📷 **Professional Camera System**
- **8 Camera Presets**: Sun View, Sun Close, Earth Close, Moon View, Orbital, Solar System, Polar, Random Satellite
- **Free Mode** for manual navigation with WASD controls
- **Follow Earth** mode that tracks orbital motion
- **Touch Controls** for mobile devices with pinch-to-zoom
- **Smooth Transitions** between all modes

### 🎨 **Stunning Visuals**
- **Glowing Stars** with soft circular particles and additive blending
- **Animated Sun** with multiple translucent flame layers
- **Satellite Trails** with configurable length and opacity
- **Orbital Ring Indicators** for all satellite classes
- **Negative Mode** for artistic inverse lighting effects

### 🎛️ **Complete UI System**
- **Collapsible Interface** with professional animations
- **Real-time Status** displaying active/failed satellites
- **Speed Control** from 0.1x to 3.0x simulation speed
- **Visual Toggles** for orbits, trails, and UI elements
- **Touch-Optimized** controls for mobile devices

### 🚀 **Comprehensive API**
- **Full Programmatic Control** over every simulation aspect
- **Chainable Methods** for elegant scripting
- **Event System** for custom interactions
- **Import/Export** configurations
- **Screenshot Capture** functionality

## 🎯 Use Cases

### 📚 **Educational**
- **Astronomy Classes** - Visualize orbital mechanics and satellite coverage
- **Physics Demonstrations** - Show gravitational effects and motion
- **Space Science** - Understand satellite constellations and their purposes
- **Interactive Learning** - Engage students with hands-on exploration

### 🎬 **Presentations & Media**
- **Scientific Presentations** - Professional visualizations for conferences
- **Documentary Production** - Capture stunning space footage
- **Marketing Materials** - Showcase space technology and services
- **Interactive Exhibits** - Museum and planetarium installations

### 💼 **Professional Applications**
- **Satellite Network Planning** - Visualize constellation coverage
- **Mission Planning** - Understand orbital mechanics and timing
- **Training Simulations** - Educate operators on satellite behavior
- **Research Visualization** - Present complex orbital data

### 🎮 **Entertainment & Art**
- **Interactive Art Installations** - Beautiful space-themed experiences
- **Game Development** - Reference for realistic space environments
- **Creative Projects** - Generate artistic space imagery
- **Relaxation** - Meditative exploration of the cosmos

## 🚀 Quick Start

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/solar-system-simulation.git
cd solar-system-simulation

# Open in browser
open satellite_simulation.html
```

### Basic Usage
```javascript
// Access the global API
const api = window.SolarSystemAPI;

// Control simulation
api.simulation.setSpeed(2.0);
api.simulation.pause();

// Navigate camera
api.camera.setPreset(3); // Solar system view
api.camera.enableFreeMode();

// Manage satellites
api.satellites.highlight('LEO_COMM');
api.satellites.setConfiguration({LEO_COMM: 100});

// Control visuals
api.visuals.hideUI();
api.visuals.enableNegativeMode();
```

## 🧪 Standalone API & Interactive Demos

The Solar System API is now available as a **standalone module** (`solar-system-api.js`) that can be integrated into any web project. Explore our comprehensive demo collection to learn API capabilities:

### 📚 **Demo Collection**
- **[Demo Hub](demo/index.html)** - Central hub showcasing all demos and API features
- **[Basic Control Demo](demo/basic-control.html)** - Interactive buttons for learning fundamental API usage
- **[Automated Camera Tour](demo/camera-tour.html)** - Guided tour through the solar system with pause/resume
- **[API Playground](demo/api-playground.html)** - Live code editor with examples and real-time execution

### 🚀 **Integration Example**
```html
<!-- Embed in your project -->
<iframe src="satellite_simulation.html" width="100%" height="600"></iframe>
<script src="solar-system-api.js"></script>

<script>
SolarSystemAPI.events.on('initialized', function() {
    // Your custom code here
    SolarSystemAPI.simulation.setSpeed(2.0);
    SolarSystemAPI.camera.setPreset(4);
});
</script>
```

### 📖 **Documentation**
- **[Complete API Documentation](API_DOCUMENTATION.md)** - Comprehensive reference with examples
- **[Demo Source Code](demo/)** - Learn from working examples

## 📖 API Documentation

### Core Modules

#### `SolarSystemAPI.simulation`
Control simulation playback and state.

```javascript
// Playback control
api.simulation.start()           // Resume simulation
api.simulation.pause()           // Pause simulation
api.simulation.reset()           // Reset to initial state

// Speed control
api.simulation.setSpeed(speed)   // Set speed (0.1 - 3.0)
api.simulation.getSpeed()        // Get current speed

// State queries
api.simulation.isPaused()        // Check if paused
api.simulation.getState()        // Get complete state object
```

#### `SolarSystemAPI.camera`
Complete camera positioning and mode control.

```javascript
// Preset management
api.camera.setPreset(index)      // Set camera preset (0-7)
api.camera.getCurrentPreset()    // Get active preset index
api.camera.getPresets()          // List all available presets

// Mode control
api.camera.enableFreeMode()      // Enable manual control
api.camera.disableFreeMode()     // Return to preset mode
api.camera.enableFollowEarth()   // Track Earth's orbital motion
api.camera.disableFollowEarth()  // Disable Earth following

// Direct positioning
api.camera.setPosition(x, y, z)  // Set camera position
api.camera.getPosition()         // Get current position
api.camera.lookAt(x, y, z)       // Point camera at coordinates
```

#### `SolarSystemAPI.celestialBodies`
Access and control celestial objects.

```javascript
// Individual bodies
api.celestialBodies.getSun()           // Get sun data
api.celestialBodies.getEarth()         // Get Earth data
api.celestialBodies.getMoon()          // Get Moon data
api.celestialBodies.getPlanet(name)    // Get specific planet

// Planetary system
api.celestialBodies.getAllPlanets()              // Get all planets
api.celestialBodies.setPlanetPosition(name, angle)  // Position planet
```

#### `SolarSystemAPI.satellites`
Comprehensive satellite constellation management.

```javascript
// Data retrieval
api.satellites.getAll()           // All satellites
api.satellites.getByType(type)    // Filter by type
api.satellites.getOperational()   // Only working satellites
api.satellites.getFailed()        // Only failed satellites

// Visual control
api.satellites.highlight(type)    // Highlight satellite class
api.satellites.unhighlight()      // Remove all highlights

// Simulation control
api.satellites.failRandom()       // Cause random failure
api.satellites.setConfiguration(config)  // Update constellation
api.satellites.getConfiguration() // Get current setup
```

#### `SolarSystemAPI.visuals`
Control visual elements and effects.

```javascript
// Display toggles
api.visuals.showOrbits()          // Show orbital rings
api.visuals.hideOrbits()          // Hide orbital rings
api.visuals.showTrails()          // Show satellite trails
api.visuals.hideTrails()          // Hide satellite trails

// Special effects
api.visuals.enableNegativeMode()  // Invert lighting
api.visuals.disableNegativeMode() // Normal lighting

// Interface control
api.visuals.showUI()              // Show control panels
api.visuals.hideUI()              // Hide control panels
api.visuals.getVisualState()      // Get current visual settings
```

#### `SolarSystemAPI.events`
Custom event system for advanced interactions.

```javascript
// Event subscription
api.events.on(eventName, callback)    // Subscribe to event
api.events.off(eventName, callback)   // Unsubscribe
api.events.emit(eventName, data)      // Emit custom event

// Example usage
api.events.on('satelliteFailure', (data) => {
    console.log('Satellite failed:', data);
});
```

#### `SolarSystemAPI.utils`
Utility functions and advanced features.

```javascript
// Configuration management
api.utils.exportConfiguration()   // Export current state
api.utils.importConfiguration(config)  // Import saved state

// Media capture
api.utils.takeScreenshot()        // Capture current view

// System information
api.utils.getSystemInfo()         // Get technical details
api.utils.getVersion()            // Get API version
```

## 🎮 Controls

### Desktop Controls
- **Mouse Drag**: Look around
- **WASD**: Move camera (in Free Mode)
- **Q/E**: Move up/down
- **Shift**: Fast movement
- **Space**: Reset camera view
- **Click**: Select satellites for details

### Touch Controls
- **Single Touch Drag**: Look around
- **Pinch**: Zoom in/out
- **Tap**: Select satellites
- **Two Finger Drag**: Advanced navigation

### UI Controls
- **📋 Toggle**: Hide/show all UI panels
- **Camera Presets**: 8 strategic viewing positions
- **🎮 Free Mode**: Manual camera control
- **🌍 Follow Earth**: Track orbital motion
- **🌑 Negative**: Artistic lighting inversion

## 🛠️ Configuration

### Satellite Configuration
Customize constellation sizes for each satellite class:

```javascript
api.satellites.setConfiguration({
    LEO_COMM: 50,      // Low Earth Orbit Communications
    LEO_WEATHER: 25,   // Weather satellites
    MEO_NAV: 32,       // GPS/Navigation constellation
    GEO_COMM: 30,      // Geostationary communications
    MILITARY: 22       // Military/reconnaissance
});
```

### Visual Settings
```javascript
// Configure visual elements
api.visuals.showOrbits();
api.visuals.showTrails();
api.simulation.setSpeed(1.5);
```

### Camera Presets
- **0**: Sun View - Default perspective from Sun to Earth
- **1**: Sun Close - 75% closer view from Sun
- **2**: Earth Close - Intimate satellite observation
- **3**: Moon View - Camera positioned at Moon
- **4**: Orbital View - Perfect constellation overview
- **5**: Solar System - Wide cosmic perspective
- **6**: Earth Polar - Top-down pole view
- **7**: Random Satellite - Random satellite perspective

## 🎨 Advanced Examples

### Automated Tour
```javascript
// Create an automated tour of the solar system
function solarSystemTour() {
    api.visuals.hideUI();
    
    const presets = [5, 0, 1, 2, 4, 3, 6, 7];
    let currentIndex = 0;
    
    const tourInterval = setInterval(() => {
        api.camera.setPreset(presets[currentIndex]);
        currentIndex++;
        
        if (currentIndex >= presets.length) {
            clearInterval(tourInterval);
            api.visuals.showUI();
        }
    }, 4000);
}
```

### Constellation Analysis
```javascript
// Analyze satellite constellation coverage
function analyzeConstellations() {
    const types = ['LEO_COMM', 'MEO_NAV', 'GEO_COMM', 'MILITARY', 'LEO_WEATHER'];
    
    types.forEach(type => {
        const sats = api.satellites.getByType(type);
        const operational = sats.filter(s => s.status === 'operational');
        
        console.log(`${type}: ${operational.length}/${sats.length} operational`);
        
        // Highlight each constellation briefly
        api.satellites.highlight(type);
        setTimeout(() => api.satellites.unhighlight(), 2000);
    });
}
```

### Custom Event Handling
```javascript
// Monitor simulation events
api.events.on('initialized', (data) => {
    console.log('Simulation started:', data);
});

api.events.on('satelliteFailure', (satellite) => {
    console.log('Mission control: Satellite failure detected', satellite);
    // Implement custom failure response
});
```

### Configuration Presets
```javascript
// Save and load different scenarios
const scenarios = {
    educational: {
        satellites: { LEO_COMM: 24, MEO_NAV: 24, GEO_COMM: 3 },
        visuals: { orbits: true, trails: false },
        camera: { preset: 2 }
    },
    
    realistic: {
        satellites: { LEO_COMM: 120, MEO_NAV: 32, GEO_COMM: 40, MILITARY: 50 },
        visuals: { orbits: false, trails: true },
        camera: { preset: 4 }
    },
    
    presentation: {
        satellites: { LEO_COMM: 50, MEO_NAV: 24 },
        visuals: { orbits: true, trails: false, ui: false },
        camera: { preset: 5 }
    }
};

// Load a scenario
function loadScenario(name) {
    const scenario = scenarios[name];
    api.utils.importConfiguration(scenario);
}
```

## 🔧 Technical Specifications

### Requirements
- **Browser**: Modern browser with WebGL support
- **JavaScript**: ES6+ support
- **Three.js**: Included via CDN (r128)
- **Performance**: GPU acceleration recommended

### Performance Optimization
- **LOD System**: Automatic detail reduction at distance
- **Efficient Rendering**: Optimized draw calls and materials
- **Memory Management**: Proper cleanup and garbage collection
- **Mobile Optimization**: Touch-friendly controls and performance

### Browser Compatibility
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile browsers with WebGL

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup
```bash
# Fork and clone the repository
git clone https://github.com/yourusername/solar-system-simulation.git
cd solar-system-simulation

# Make changes and test
# Submit pull request
```

### Areas for Contribution
- 🌍 Additional planetary textures
- 🛰️ More satellite types and behaviors
- 📱 Enhanced mobile experience
- 🎨 Visual effects and shaders
- 📊 Data export and analysis tools

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Three.js** for the incredible 3D rendering engine
- **NASA** for planetary data and inspiration
- **Space agencies worldwide** for satellite constellation data
- **Contributors** who make this project amazing

## 📞 Support

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/yourusername/solar-system-simulation/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/yourusername/solar-system-simulation/discussions)
- 📧 **Contact**: your.email@example.com

---

**Made with ❤️ for space enthusiasts, educators, and developers worldwide.**

🌌 *Explore the cosmos, one satellite at a time.* 🛰️ 