<template>
<div id="minigames" class="minigames">
    <center>
    <table width=80% border=0 cellspacing=0 cellpadding=0>
    <tr><td height="30">
    </td></tr>
    <tr><td>
    <center>
    <h1> Minigames </h1> 
    <p> stuff about Ascension. loads of stuff here. stuff about capAscensionAscensionAscensionAscensionturables. loads of stuff here.  stuff about capturables. loads of stuff here. stuff about capturables. loads of stuff here.  stuff about capturables. loads of stuff here. stuff about capturables. loads of stuff here.  stuff about capturables. loads of stuff here. stuff about capturables. loads of stuff here.  stuff about capturables. loads of stuff here. stuff about capturables. loads of stuff here. </p> 
    <div class="minigamesnav buttonnav" id="minigamesnav">
    <router-link :class="{'router-link-active': $route.fullPath ==='/' || $route.fullPath === '/a'}"  :to="{  name: 'events', hash: '#events' }" >Main Events</router-link>
    <router-link :class="{'router-link-active': $route.fullPath ==='/' || $route.fullPath === '/a'}" :to="{ name: 'minigames', hash: '#minigames' }" >Minigames</router-link>
    </div>
    </center>
    </td></tr>
    </table>
    </center>
 </div>
</template>

<script>
export default {
  
}
</script>

<style>
</style>
