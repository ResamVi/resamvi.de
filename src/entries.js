/**
 * Register new entry step-by-step:
 * 1. In `entries` Ordner neue Datei erstellen `Newentry.vue`
 * 2. Put the name of the component definied in `Newentry.vue` in `order` array
 */
import Vue from 'vue';

import SoloEntry from './components/SoloEntry.vue';

/**
 * Routes to single-page entries used by VueRouter in main.js
 * 
 * Will be generated by loading each component in `entries` folder, 
 * using its name as `path` and appending them to the list of children
 */
const entries = {
  path: '/eintrag',
  component: SoloEntry,
  children: [],
};

// Register all components inside the `entries` folder globally
const requireComponent = require.context('./entries', false, /\w+\.vue$/);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  // Look for the component options on `.default`, which will
  // exist if the component was exported with `export default`,
  // otherwise fall back to module's root.
  const component = componentConfig.default || componentConfig;

  entries.children.push({ component, path: component.name });

  Vue.component(
    // Remove './'-prefix and '.vue'-suffix
    fileName.slice(2, fileName.length - 4),
    component,
  );
});

export const routes = [entries];

export const order = [
  '', // v-for is 1-indexed not 0-index
  'Electroqueens',
  'InfclassStats',
  'Speedtest',
  'Schlossparklauf18',
  'Ytpmv',
  'Pastmemories',
  'Spayle',
  'Jubilaeum',
  'Rheinuferlauf17',
  'Apfelkuchen',
  'Kaesekuchen',
  'Charityrun17',
  'Screenbounce',
  'Bouncingball',
  'Chocolatechipcookies',
  'Start',
  'Erster',
];
