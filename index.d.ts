// Type definitions for sat-sol-sim
// Project: https://github.com/worksona/sat-sol-sim

export interface SatelliteConfiguration {
  LEO_COMM?: number;
  LEO_WEATHER?: number;
  MEO_NAV?: number;
  GEO_COMM?: number;
  MILITARY?: number;
}

export interface Position {
  x: number;
  y: number;
  z: number;
}

export interface Satellite {
  id: string;
  type: string;
  status: 'operational' | 'failed';
  position: Position;
  velocity: Position;
}

export interface SimulationState {
  paused: boolean;
  speed: number;
  time: number;
}

export interface VisualState {
  orbits: boolean;
  trails: boolean;
  negative: boolean;
  ui: boolean;
}

export interface CameraPreset {
  name: string;
  description: string;
  position: Position;
  target: Position;
}

export interface SystemInfo {
  version: string;
  scene?: {
    satellites: number;
    planets: number;
    children: number;
  };
}

export interface SimulationAPI {
  start(): SimulationAPI;
  pause(): SimulationAPI;
  reset(): SimulationAPI;
  setSpeed(speed: number): SimulationAPI;
  getSpeed(): number;
  isPaused(): boolean;
  getState(): SimulationState;
}

export interface CameraAPI {
  setPreset(index: number): CameraAPI;
  getCurrentPreset(): number;
  getPresets(): CameraPreset[];
  enableFreeMode(): CameraAPI;
  disableFreeMode(): CameraAPI;
  enableFollowEarth(): CameraAPI;
  disableFollowEarth(): CameraAPI;
  setPosition(x: number, y: number, z: number): CameraAPI;
  getPosition(): Position;
  lookAt(x: number, y: number, z: number): CameraAPI;
}

export interface SatellitesAPI {
  getAll(): Satellite[];
  getByType(type: string): Satellite[];
  getOperational(): Satellite[];
  getFailed(): Satellite[];
  failRandom(): SatellitesAPI;
  highlight(type: string): SatellitesAPI;
  unhighlight(): SatellitesAPI;
  setConfiguration(config: SatelliteConfiguration): SatellitesAPI;
  getConfiguration(): SatelliteConfiguration;
}

export interface VisualsAPI {
  showOrbits(): VisualsAPI;
  hideOrbits(): VisualsAPI;
  showTrails(): VisualsAPI;
  hideTrails(): VisualsAPI;
  enableNegativeMode(): VisualsAPI;
  disableNegativeMode(): VisualsAPI;
  showUI(): VisualsAPI;
  hideUI(): VisualsAPI;
  getVisualState(): VisualState;
}

export interface EventsAPI {
  on(eventName: string, callback: (data?: any) => void): EventsAPI;
  off(eventName: string, callback: (data?: any) => void): EventsAPI;
  emit(eventName: string, data?: any): EventsAPI;
}

export interface CelestialBodiesAPI {
  getSun(): any;
  getEarth(): any;
  getMoon(): any;
  getPlanet(name: string): any;
  getAllPlanets(): any[];
  setPlanetPosition(name: string, angle: number): CelestialBodiesAPI;
}

export interface UtilsAPI {
  getVersion(): string;
  exportConfiguration(): any;
  importConfiguration(config: any): UtilsAPI;
  takeScreenshot(): string | null;
  getSystemInfo(): SystemInfo;
}

export interface SolarSystemAPI {
  simulation: SimulationAPI;
  camera: CameraAPI;
  satellites: SatellitesAPI;
  visuals: VisualsAPI;
  events: EventsAPI;
  celestialBodies: CelestialBodiesAPI;
  utils: UtilsAPI;
}

declare const SolarSystemAPI: SolarSystemAPI;

export default SolarSystemAPI; 