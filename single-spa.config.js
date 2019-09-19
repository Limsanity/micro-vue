import { registerApplication, start } from 'single-spa'

registerApplication(
  // Name of our single-spa application
  'hello',
  // loadingFunction
  () => import('./src/hello/src/main.js'),
  // activityFunction
  (location) => location.pathname === "" || 
    location.pathname === "/" || 
    location.pathname.startsWith('/hello')
);

registerApplication(
  // Name of our single-spa application
  'world',
  // loadingFunction 
  () => import('./src/world/src/main.js'),
  // activityFunction
  (location) => location.pathname === "" || 
    location.pathname === "/" || 
    location.pathname.startsWith('/world')
);

start();