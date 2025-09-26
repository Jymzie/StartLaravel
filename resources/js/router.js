import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

Vue.use(VueRouter)


let router = new VueRouter({
    mode: 'history',
    // base: '/STR/',  
    //NOTE disable this and npm run dev for server deploy
    routes: [
        {
            path: '/home',
            name: 'home',
            component: () => import('./components/Home'),
        },
        {
            path: '/Grid',
            name: 'Grid',
            component: () => import('./components/Grid'),
        },
        {
            path: '/Draggable',
            name: 'Draggable',
            component: () => import('./components/Draggable'),
        },
        {
            path: '/Capture',
            name: 'Capture',
            component: () => import('./components/Capture'),
        },
        {
            path: '/Play',
            name: 'Play',
            component: () => import('./components/Play'),
        },
        {
            path: '/Queue',
            name: 'Queue',
            component: () => import('./components/Queue'),
        },
        {
            path: '/master',
            name: 'master',
            component: () => import('./components/Master'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./template/Login'),
        },
        {
            path: '/Test',
            name: 'Test',
            component: () => import('./components/Test'),
        },
        {
            path: '/error/:status_code?',
            name: 'error',
            component: () => import('./template/Error'),

            //NOTE Error page wont appear through direct link
            beforeEnter:(to,from,next) => {
                store.state.status != null ? next() : router.go(-1);
            }
        },
    ],
});

//ANCHOR router trappings
router.beforeEach((to, from, next) =>{
    if(to.name == null){
        next({name: 'home'})
    }
    else{
      next()  
    }
    // if(!store.state.session && to.name !== 'login'){
    //     next({name: 'login'})
    // }
    // else if(store.state.session && (to.name == 'login' || to.name == null)){
    //     next({name: 'home'})
    // }
    // else{
    //   next()  
    // }
})


export default router