<template>
<div id="pvp" class="pvp">
    <center>
    <table width=100% border=0 cellspacing=0 cellpadding=0>
    <tr><td>
        <center>
    <h1> PvP Events</h1>
    <div class="paper-background">
        <div class="portal">
            <img alt="slco" align="center" :src='portal'><br>
        </div>
        <div class="portal-txt">
        <ul>
        <li>There is a constant pvp battle raging on, which can be accessed from the vortex in your home base, or from Alt + B at any time.</li>
        <li>The battle rotates between the main event: one of our unique and captivating game modes in a large sized battlefield. Simulating some of lineage 2's best pvp experiences.</li>
        <li>In between the main event there will be one of our exciting minigames. Where you can get a quick reward in some quick fun!</li>
        <li>There is also plenty to do in your factions hometown between events, such as visit PvE zones with unique bosses, and use many useful npcs unlocked through our progression system.</li>
        <li>We have worked hard to create high quality modes over sheer quantity. Find more info about our modes below.</li>
        </ul>
        </div>
        <hr/>
        <div class="buttons">         
            <div class="pvpsnav buttonnav" id="pvpsnav">
            <router-link :class="{'router-link-active': $route.fullPath ==='/' || $route.fullPath === '/a'}"  :to="{  name: 'events', hash: '#events' }" >Main Events</router-link>
            <router-link :class="{'router-link-active': $route.fullPath ==='/' || $route.fullPath === '/a'}" :to="{ name: 'minigames', hash: '#minigames' }" >Minigames</router-link>
            </div>
        </div>
        <div id="pvpselect" class="pvpselect">     
        <transition mode="out-in" name="router-anim" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown" >
        <router-view></router-view>
        </transition>
        </div>
    </div>
    </center>
    </td></tr>
    </table>
    
    </center>
 </div>
</template>

<script>
export default {
  data() {
      return {
          portal: 'assets/portal-img.png',
      }
  }
}
</script>

<style scoped>
.portal{
    float:left;
}
.portal-txt{
    padding-left:30%;
    padding-bottom:2%;
}
h1 {
    width:90%;
}
hr {
    margin-bottom:1%;
}
</style>
