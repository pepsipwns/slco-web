import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './views/Home.vue'
import About from './views/About.vue'
import Features from './views/Features.vue'
import Download from './views/Download.vue'
import PvP from './views/features/PvP.vue'
import PvE from './views/features/PvE.vue'
import Balance from './views/features/Balance.vue'
import Progression from './views/features/Progression.vue'
import Events from './views/features/pvp/Events.vue'
import Minigames from './views/features/pvp/Minigames.vue'
import Battlegrounds from './views/features/pvp/events/Battlegrounds.vue'
import Ascension from './views/features/pvp/events/Ascension.vue'
import Login from "./views/Login.vue"
import Secure from "./views/Secure.vue"

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'hash',
    routes: [
        {
          path: '/',
          name: '#header',
          component: Home
        },
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/about',
          name: 'about',
          component: About
        },
        {
          path: '/features',
          name: 'features',
          component: Features,
          children: [
            { path: '/pvp', name:'pvp', component: PvP, children: 
            [
              { path: '/events', name: 'events', component: Events, children: 
              [
                { path: '/battlegrounds', name: 'battlegrounds', component: Battlegrounds},
                { path: '/ascension', name: 'ascension', component: Ascension}
              ]},
              { path: '/minigames', name: 'minigames', component: Minigames},
            ] },
            { path: '/pve', name:'pve', component: PvE },
            { path: '/balance', name:'balance', component: Balance },
            { path: '/progression', name:'progression', component: Progression },
          ]
        },
        {
          path: '/download',
          name: 'download',
          component: Download
        }
      ],
    beforeRouteLeave(to, from, next){
        if (from.hash == ''){
        console.log('beforefound');
        }
        next()
    },
    scrollBehavior (to, from, savedPosition) {
        if (from.hash == to.hash){
        console.log("found")
        }
        if (to.hash) {
        savedPosition = from.hash;
        var position = 0;
        console.log('to.hash: '+to.hash)
        console.log('from.hash: '+from.hash)
        
        //Set the hash to savedPosition if on the same hash
        if (document.querySelector(to.hash) == null){
            console.log('null')
            position = document.querySelector(savedPosition).offsetTop
        } else {
        position = document.querySelector(to.hash).offsetTop
        }
        //If from / directory
        if (from.hash == ''){
            console.log('from.hash == null')
        }
        if (to.hash == '#ascension' || to.hash == '#battlegrounds'){
            position = position + document.querySelector('#info').offsetTop + document.querySelector('#pvp').offsetTop + document.querySelector("#events").offsetTop;
        }
        if (to.hash == '#events' || to.hash == '#minigames'){
            position = position + document.querySelector('#info').offsetTop + document.querySelector('#pvp').offsetTop;
        }
        if (to.hash == '#pvp' || to.hash == '#pve' || to.hash == '#balance' || to.hash == '#progression' ){
            position = position + document.querySelector('#info').offsetTop;
        }
        if (to.hash == '#info'){
            position = position - 76;
        }
        if ((to.hash == '#events' && from.hash == '#battlegrounds') || (to.hash == '#events' && from.hash == '#ascension')){
            var ascensionDiv = document.getElementById('ascension-link');
            var battlegroundsDiv = document.getElementById('battlegrounds-link');
            var ascensionView = document.getElementById('ascension-view');
            var battlegroundsView = document.getElementById('battlegrounds-view');
            if (ascensionDiv.classList.contains('divactive')) ascensionDiv.classList.remove('divactive');
            if (ascensionDiv.classList.contains('divinactive')) ascensionDiv.classList.remove('divinactive');
            if (battlegroundsDiv.classList.contains('divinactive')) battlegroundsDiv.classList.remove('divinactive');
            if (battlegroundsDiv.classList.contains('divactive')) battlegroundsDiv.classList.remove('divactive');
        }
        console.log('position: '+position)
        return window.scrollTo({ 
            top: position, 
            behavior: 'smooth' 
        })
    } else { return {x: 0, y: 0} }
    },
    linkExactActiveClass: 'active'
});

export default router;