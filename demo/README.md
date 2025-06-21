# Solar System API Demos

This directory contains comprehensive examples and demonstrations of the Solar System API capabilities.

## Demo Files

### Basic Examples
- `basic-control.html` - Simple API usage examples
- `camera-tour.html` - Automated camera tour demonstration
- `satellite-management.html` - Satellite constellation management

### Advanced Examples
- `educational-presentation.html` - Educational presentation system
- `performance-monitoring.html` - Performance monitoring and analytics
- `configuration-manager.html` - Save/load simulation configurations

### Interactive Examples
- `api-playground.html` - Interactive API testing environment
- `custom-scenarios.html` - Custom scenario builder

## Running the Demos

1. Ensure the main simulation (`satellite_simulation.html`) is accessible
2. Include both the simulation and API files in your project
3. Open any demo file in a modern web browser
4. Check the browser console for API interactions and logs

## Requirements

- Modern web browser with WebGL support
- Three.js r128 or compatible
- Solar System API v1.0.0+

## Creating Custom Demos

Each demo follows this basic structure:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Demo Name</title>
    <style>/* Custom styles */</style>
</head>
<body>
    <!-- Demo UI -->
    
    <!-- Include simulation -->
    <iframe src="../satellite_simulation.html" width="100%" height="600"></iframe>
    
    <!-- Include API -->
    <script src="../solar-system-api.js"></script>
    
    <!-- Demo code -->
    <script>
        SolarSystemAPI.events.on('initialized', function() {
            // Your demo code here
        });
    </script>
</body>
</html>
```

## API Learning Path

1. Start with `basic-control.html` for fundamental concepts
2. Explore `camera-tour.html` for camera system understanding
3. Try `satellite-management.html` for constellation control
4. Advance to `educational-presentation.html` for complex scenarios
5. Use `api-playground.html` for experimentation

## Contributing

Feel free to add your own demo examples! Follow the existing naming convention and document your demos in this README.
