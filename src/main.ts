import './assets/main.css'

import { createRouter, createWebHashHistory } from 'vue-router';
import { createApp } from 'vue';

  // 1. Define route components.
  // These can be imported from other files
  const Home = { template: '<div>Home</div>' }
  const About = { template: '<div>About</div>' }

  // 2. Define some routes
  const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ]

  // 3. Create the router instance and pass the `routes` option
  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

  // 5. Create and mount the root instance.
  const app = createApp({})
  // Make sure to _use_ the router instance to make the
  // whole app router-aware.
  app.use(router)

  app.mount('#app')
