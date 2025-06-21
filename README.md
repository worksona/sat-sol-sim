# sat-sol-sim

[![npm version](https://badge.fury.io/js/sat-sol-sim.svg)](https://badge.fury.io/js/sat-sol-sim)
[![npm downloads](https://img.shields.io/npm/dm/sat-sol-sim.svg)](https://www.npmjs.com/package/sat-sol-sim)
[![license](https://img.shields.io/npm/l/sat-sol-sim.svg)](https://github.com/worksona/sat-sol-sim/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

A powerful, lightweight 3D satellite and solar system simulator for web applications. Built with Three.js for high-performance WebGL rendering.

## 🚀 Quick Installation

```bash
npm install sat-sol-sim three
```

## 📦 Basic Usage

```javascript
import { SatSolSim } from 'sat-sol-sim';

const container = document.getElementById('sim-container');
const simulation = new SatSolSim(container, 800, 600);
simulation.start();
```

## ✨ Features

- 🌍 **Realistic planetary motion** - Accurate orbital mechanics
- 🛰️ **Satellite tracking** - Real-time satellite constellation support  
- 🎮 **Interactive controls** - Mouse/touch navigation
- 📱 **Responsive** - Works on desktop and mobile
- ⚡ **High performance** - Optimized WebGL rendering
- 🔧 **Full API** - Comprehensive programmatic control
- 📘 **TypeScript** - Complete type definitions included

## 📚 Documentation

- **[Full API Documentation](https://github.com/worksona/sat-sol-sim#readme)**
- **[Live Examples](https://worksona.github.io/sat-sol-sim/examples/)**
- **[GitHub Repository](https://github.com/worksona/sat-sol-sim)**

## 🔧 Requirements

- Three.js >= 0.128.0 (peer dependency)
- Modern browser with WebGL support

## 📄 License

MIT © [David Olsson](https://github.com/worksona)

---

*For complete documentation, examples, and demos, visit the [GitHub repository](https://github.com/worksona/sat-sol-sim).* 