import comHome from './components/Home.vue'
import comCustomer from './components/Customer/Customer.vue'

export const routes = [
    {
        //path hosse amra ki dekate chai
        //componen hosse je component show korate chai
        //jto gula path nibo sob gular jnno object create korte hobbe
        path:'',
        component:comHome
    },
    {
       path:'/customer/:id',
       component:comCustomer
    }
]