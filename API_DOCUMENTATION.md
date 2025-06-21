# sat-sol-sim API Documentation

## Overview

The sat-sol-sim API provides comprehensive programmatic control over the 3D satellite and solar system simulator. This API enables developers to create custom applications, automate simulations, and build educational tools.

## Version
**Current Version:** 1.0.0

## Installation

```html
<!-- Include in your HTML after the main simulation -->
<script src="solar-system-api.js"></script>
```

## Quick Start

```javascript
// Basic usage - all methods are chainable
SolarSystemAPI
    .simulation.setSpeed(2.0)
    .camera.setPreset(3)
    .visuals.showTrails()
    .satellites.highlight('LEO_COMM');

// Event-driven programming
SolarSystemAPI.events.on('initialized', function(data) {
    console.log('Simulation ready!', data);
});
```

## API Reference

### 1. Simulation Control (SolarSystemAPI.simulation)

Controls the core simulation state, timing, and playback.

#### Methods

##### start()
Starts or resumes the simulation.
- **Returns:** this (chainable)

##### pause()
Pauses the simulation.
- **Returns:** this (chainable)

##### reset()
Resets the entire simulation to initial state.
- **Returns:** this (chainable)

##### setSpeed(speed)
Sets the simulation speed multiplier.
- **Parameters:** speed (number): Speed multiplier between 0.1 and 3.0
- **Returns:** this (chainable)

##### getSpeed()
Gets the current simulation speed.
- **Returns:** number - Current speed multiplier

##### isPaused()
Checks if the simulation is currently paused.
- **Returns:** boolean - True if paused

##### getState()
Gets comprehensive simulation state information.
- **Returns:** Object - Complete simulation state

### 2. Camera Control (SolarSystemAPI.camera)

Controls camera positioning, presets, and movement modes.

#### Camera Presets

| Index | Name | Description |
|-------|------|-------------|
| 0 | Sun View | Default view from Sun to Earth |
| 1 | Sun Close | 75% closer to Earth from Sun |
| 2 | Earth Close | Close orbit around Earth |
| 3 | Moon View | From Moon looking at Earth |
| 4 | Orbital View | Satellite constellation overview |
| 5 | Solar System | Wide view of entire solar system |
| 6 | Earth Polar | View from Earth's north pole |
| 7 | Random Satellite | Random satellite perspective |

#### Methods

##### setPreset(presetIndex)
Sets camera to a specific preset.
- **Parameters:** presetIndex (number): Preset index (0-7)
- **Returns:** this (chainable)

##### getCurrentPreset()
Gets the current camera preset index.
- **Returns:** number - Current preset index

##### getPresets()
Gets all available camera presets.
- **Returns:** Array - Array of preset objects

##### enableFreeMode() / disableFreeMode()
Enables/disables free camera mode for manual control.
- **Returns:** this (chainable)

##### enableFollowEarth() / disableFollowEarth()
Enables/disables Follow Earth mode (camera tracks Earth's orbit).
- **Returns:** this (chainable)

##### setPosition(x, y, z)
Sets camera position directly.
- **Parameters:** x, y, z (numbers): Coordinates
- **Returns:** this (chainable)

##### getPosition()
Gets current camera position.
- **Returns:** Object - Position with x, y, z coordinates

##### lookAt(x, y, z)
Points camera at specific coordinates.
- **Parameters:** x, y, z (numbers): Coordinates to look at
- **Returns:** this (chainable)

### 3. Satellite Management (SolarSystemAPI.satellites)

Manages satellite constellations, configuration, and status.

#### Satellite Types

- LEO_COMM - Low Earth Orbit Communications
- LEO_WEATHER - Weather Satellites
- MEO_NAV - Medium Earth Orbit Navigation (GPS)
- GEO_COMM - Geostationary Communications
- MILITARY - Military/Reconnaissance

#### Methods

##### getAll()
Gets information about all satellites.
- **Returns:** Array - Array of satellite objects

##### getByType(type)
Gets satellites of a specific type.
- **Parameters:** type (string): Satellite type
- **Returns:** Array - Array of matching satellites

##### getOperational() / getFailed()
Gets operational or failed satellites.
- **Returns:** Array - Array of satellites

##### failRandom()
Triggers a random satellite failure.
- **Returns:** this (chainable)

##### highlight(type) / unhighlight()
Highlights satellites of a specific type or removes all highlighting.
- **Parameters:** type (string): Satellite type to highlight
- **Returns:** this (chainable)

##### setConfiguration(config)
Sets satellite constellation configuration.
- **Parameters:** config (Object): Configuration with satellite counts
- **Returns:** this (chainable)

##### getConfiguration()
Gets current satellite configuration.
- **Returns:** Object - Current satellite counts by type

### 4. Visual Controls (SolarSystemAPI.visuals)

Controls visual elements like orbits, trails, UI, and special effects.

#### Methods

##### showOrbits() / hideOrbits()
Shows/hides orbital rings.
- **Returns:** this (chainable)

##### showTrails() / hideTrails()
Shows/hides satellite trails.
- **Returns:** this (chainable)

##### enableNegativeMode() / disableNegativeMode()
Enables/disables negative lighting mode (inverted colors).
- **Returns:** this (chainable)

##### showUI() / hideUI()
Shows/hides UI panels.
- **Returns:** this (chainable)

##### getVisualState()
Gets current visual settings.
- **Returns:** Object - Current visual state

### 5. Event System (SolarSystemAPI.events)

Provides event-driven programming capabilities.

#### Available Events

- initialized - Fired when API is ready
- Custom events can be created

#### Methods

##### on(eventName, callback)
Subscribes to an event.
- **Parameters:** eventName (string), callback (function)
- **Returns:** this (chainable)

##### off(eventName, callback)
Unsubscribes from an event.
- **Parameters:** eventName (string), callback (function)
- **Returns:** this (chainable)

##### emit(eventName, data)
Emits an event to all subscribers.
- **Parameters:** eventName (string), data (any)
- **Returns:** this (chainable)

### 6. Utilities (SolarSystemAPI.utils)

Provides utility functions for configuration, screenshots, and system information.

#### Methods

##### getVersion()
Gets API version.
- **Returns:** string - Version string

##### exportConfiguration()
Exports complete simulation configuration.
- **Returns:** Object - Complete configuration

##### importConfiguration(config)
Imports and applies configuration.
- **Parameters:** config (Object): Configuration to apply
- **Returns:** this (chainable)

##### takeScreenshot()
Takes a screenshot of the current simulation.
- **Returns:** string - Base64 encoded PNG data URL

##### getSystemInfo()
Gets system information and performance stats.
- **Returns:** Object - System information

## Example Usage

### Basic Control
```javascript
// Speed up simulation and switch camera
SolarSystemAPI.simulation.setSpeed(2.5);
SolarSystemAPI.camera.setPreset(4);
```

### Automated Sequence
```javascript
function autoDemo() {
    SolarSystemAPI.visuals.hideUI();
    
    setTimeout(() => SolarSystemAPI.camera.setPreset(0), 1000);
    setTimeout(() => SolarSystemAPI.camera.setPreset(2), 3000);
    setTimeout(() => SolarSystemAPI.camera.setPreset(4), 5000);
    setTimeout(() => SolarSystemAPI.visuals.showUI(), 7000);
}

SolarSystemAPI.events.on('initialized', autoDemo);
```

### Configuration Management
```javascript
// Save current state
const config = SolarSystemAPI.utils.exportConfiguration();
localStorage.setItem('myConfig', JSON.stringify(config));

// Restore later
const savedConfig = JSON.parse(localStorage.getItem('myConfig'));
SolarSystemAPI.utils.importConfiguration(savedConfig);
```

## Browser Compatibility

- Modern Browsers: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- WebGL Required for 3D rendering
- ES6 Features used

## License

MIT License - See main project for details.
