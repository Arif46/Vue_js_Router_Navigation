# route

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
-------------------------------------------------------------------------------------------------------------------------
#At first creat route.js file,

#route npm install
```npm install vue-router
```
#after installation then we will use (main.js)

import VueRouter from 'vue-router'

Vue.use(VueRouter)
#(route.js)- example for Route writing
export const routes = [
  {

      path:'',
      component:
  }
]
example:
import comHome from './components/Home.vue'
import comCustomer from './components/Customer/Customer.vue'

export const routes = [
    {
        path:'',
        component:comHome
    },
    {
       path:'/customer',
       component:comCustomer
    }
]

##after create route.js file then import (main.js)
example:
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import{routes} from './routes'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new  VueRouter({
  routes
  mode:'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

#new npm serve project then output