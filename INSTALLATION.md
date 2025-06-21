# Installation Guide

## NPM Installation

Install the package using npm:

```bash
npm install sat-sol-sim
```

## Usage

### Browser (ES6 Modules)

```javascript
import SolarSystemAPI from 'sat-sol-sim';

// Initialize and control the simulation
SolarSystemAPI.simulation.setSpeed(2.0);
SolarSystemAPI.camera.setPreset(3);
SolarSystemAPI.satellites.highlight('LEO_COMM');
```

### Browser (Script Tag)

```html
<!-- Include the library -->
<script src="node_modules/sat-sol-sim/sat-sol-sim.js"></script>

<!-- Or use CDN -->
<script src="https://unpkg.com/sat-sol-sim@latest/sat-sol-sim.min.js"></script>

<script>
  // Access via global variable
  SolarSystemAPI.simulation.start();
  SolarSystemAPI.camera.setPreset(2);
</script>
```

### Node.js (CommonJS)

```javascript
const SolarSystemAPI = require('sat-sol-sim');

// Use in Node.js environment (limited functionality without DOM)
const config = SolarSystemAPI.utils.exportConfiguration();
console.log('API Version:', SolarSystemAPI.utils.getVersion());
```

## Dependencies

This package has a peer dependency on Three.js:

```bash
npm install three
```

## Quick Start Example

```html
<!DOCTYPE html>
<html>
<head>
    <title>Solar System Simulation</title>
    <style>
        body { margin: 0; padding: 0; overflow: hidden; }
        #simulation { width: 100vw; height: 100vh; }
    </style>
</head>
<body>
    <div id="simulation"></div>
    
    <!-- Three.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    
    <!-- Sat Sol Sim -->
    <script src="https://unpkg.com/sat-sol-sim@latest/sat-sol-sim.min.js"></script>
    
    <script>
        // Wait for the simulation to initialize
        SolarSystemAPI.events.on('initialized', () => {
            console.log('Simulation ready!');
            
            // Start with a nice view
            SolarSystemAPI.camera.setPreset(5); // Solar system overview
            SolarSystemAPI.simulation.setSpeed(1.5);
            SolarSystemAPI.visuals.showOrbits();
            
            // Highlight different satellite types every 3 seconds
            const types = ['LEO_COMM', 'MEO_NAV', 'GEO_COMM', 'MILITARY', 'LEO_WEATHER'];
            let currentType = 0;
            
            setInterval(() => {
                SolarSystemAPI.satellites.highlight(types[currentType]);
                currentType = (currentType + 1) % types.length;
            }, 3000);
        });
    </script>
</body>
</html>
```

## API Overview

The library provides several modules:

- `simulation` - Control playback, speed, and state
- `camera` - Camera presets, positioning, and modes  
- `satellites` - Manage satellite constellations
- `visuals` - Toggle orbits, trails, UI, and effects
- `celestialBodies` - Access planets, sun, moon data
- `events` - Subscribe to simulation events
- `utils` - Export/import configurations, screenshots

## TypeScript Support

TypeScript definitions are included:

```typescript
import SolarSystemAPI, { SatelliteConfiguration } from 'sat-sol-sim';

const config: SatelliteConfiguration = {
  LEO_COMM: 50,
  MEO_NAV: 24,
  GEO_COMM: 6
};

SolarSystemAPI.satellites.setConfiguration(config);
```

## Assets

The package includes necessary assets:
- `earth-texture.jpg` - Earth texture
- `sats.csv` - Satellite data
- Documentation files

These are automatically included when you install the package.

## Troubleshooting

### Three.js Not Found
Make sure Three.js is loaded before the simulation:
```bash
npm install three
```

### DOM Not Available
Some features require a browser environment with DOM access. In Node.js, only utility functions will work.

### Module Loading Issues
The library supports both CommonJS and ES6 modules. If you have issues, try:
```javascript
// ES6
import SolarSystemAPI from 'sat-sol-sim';

// CommonJS
const SolarSystemAPI = require('sat-sol-sim');

// Browser global
// Just include the script tag, SolarSystemAPI will be available globally
``` 