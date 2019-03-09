import './bootstrap';
import Vue from 'vue';
import Vuetify from 'vuetify';

//Router info
import Routes from '@/routes.js'

//Components
import App from '@/views/App';

Vue.use(Vuetify);

const app = new Vue({
    el: '#app',
    router: Routes,
    render: h => h(App),
});

export default app;