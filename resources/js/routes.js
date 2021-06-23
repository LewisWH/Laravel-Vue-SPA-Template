const Home = () => import('./components/Home.vue' /* webpackChunkName: "resource/js/components/home" */)

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    }
]