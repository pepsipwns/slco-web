<template>
<div id="features">
 <h1> Features </h1>
 <div class="features-info">
    <div class="features-king-img">
        <img alt="slco" align="left" :src='kingimg'>
    </div>
    <div class="features-info-txt">
        <div class="paper-background">
        This is a classic faction server, you will begin the game by selecting your faction, 
        <font class="faction-font" color="#F1AB31">The Royal Phoenix Crusade</font> or those who opose them, <font class="faction-font" color="#2897E5">The Furian Rebellion</font>. <br><br>
        <hr/>
        <div class="listdiv">
        <ul>
            <li>High Five Client.</li>
            <li>Starting Level 76.</li>
            <li>Starting Gear B Grade.</li>
            <li>Toggle for CP/MP/HP recovery.</li>
            <li>Res Scroll as Skill added.</li>
            <li>Retail enchant rates.</li>
            <li>Indepth rank system.</li>
            <li>Any Grade can be Elemented.</li>
            <li>1 Element per piece + Max 60/150.</li>
            <li>All classes viable with constant balance.</li>
            <li>Debuff mechanics tweaked.</li>
            <li>Many new ways to cleanse debuffs.</li>
            <li>Useless armor sets made useful.</li>
            <li>Inspired from classic faction servers.</li>
            <li>3 'Disposition' buff sets for flexible combat styles.</li>
            <ul>
            <li><font color="#206317">Aegis</font> a defensive buff set.</li>
            <li><font color="#63130F">Vengeance</font> an offensive buff set.</li>
            <li><font color="#6C2973">Swift</font> a speedy buff set.</li>
            </ul>
        </ul>
        </div>
        </div>
    </div>
    <div class="features-queen-img">
        <img alt="slco" align="right" :src='queenimg'>
    </div>
</div>
 <div class="featuresnav" id="featurenav">
 <router-link :class="{'router-link-active': $route.fullPath ==='/' || $route.fullPath === '/a'}"  :to="{  name: 'pvp', hash: '#pvp', tag:'img' }" >PvP<img alt="slco" :src='pvpimg'></router-link>
 <router-link :class="{'router-link-active': $route.fullPath ==='/' || $route.fullPath === '/a'}" :to="{ name: 'pve', hash: '#pve' }" >PvE<img alt="slco" :src='pveimg'></router-link>
 <router-link :class="{'router-link-active': $route.fullPath ==='/' || $route.fullPath === '/a'}" :to="{ name: 'balance', hash: '#balance' }" >Balance<img alt="slco" :src='balanceimg'></router-link>
 <router-link :class="{'router-link-active': $route.fullPath ==='/' || $route.fullPath === '/a'}" :to="{ name: 'progression', hash: '#progression' }" >Progression<img alt="slco" :src='progressionimg'></router-link>
 <br>
 </div>
 <div class="featuresimgs" id="featuresimgs">
</div>
 <transition mode="out-in" name="router-anim" enter-active-class="animated flipInX" leave-active-class="animated flipOutX" >
 <router-view></router-view>
 </transition>
</div>
</template>

<script>
export default {
  name: 'features',
  data() {
      return {
          pvpimg: 'assets/pvp-img.png',
          pveimg: 'assets/pve-img.png',
          balanceimg: 'assets/balance-img.png',
          progressionimg: 'assets/progression-img.png',
          kingimg: 'assets/phoenix-king.png',
          queenimg: 'assets/furian-queen.png',
      }
  }
}
</script>

<style>
.listdiv{
    padding-left:3%;
}
hr { 
    display: block;
    overflow: hidden;
    border-style: inset;
    border-width: 1px;
    border-color:#121212;
}

ul{
  color: #121212;
  list-style-type:initial;
  font-weight: bold;
  font-size:16px;
  padding-bottom:2px;
  padding-left:10%;
}

ul:hover{
    padding-bottom:0px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.listdiv{
    height:310px;
    padding-top:3%;
}

li { 
    text-align:left;
    padding-left:2%;
}

.faction-font{
  text-shadow: 1px 1px black;
  
}

.features-info{
    display:block;
    width:100%;
}
h1{
    margin-top: 5px;
}
.features-queen-img{
    display: inline-block;
    vertical-align: top;
    width:22%;
}

.features-king-img{
    display: inline-block;
    vertical-align: top;
    width:22%;
}

.features-info-txt{
    display: inline-block;
    width:55%;
    margin-bottom:1%;
    
}
.featuresimgs {
    overflow: hidden;
    background-color: #333;
    margin:0;
    margin-top:1%;
    text-align:center;
    position: relative; /* Set the navbar to fixed position */
    width: 100%; /* Full width */
    -webkit-box-shadow: 0 8px 6px -6px black;
    -moz-box-shadow: 0 8px 6px -6px black;
    box-shadow: 0px 8px 10px -6px black;
}

@media screen and (max-width: 900px) {
  .featuresimgs {display: none;}
  .features-queen-img { display: none;}
  .features-king-img { display: none;}
  .features-info-txt { width:100%;}
}

@media only screen and (max-width: 1600) and (min-width: 900) {
  .featuresimgs {width:50%;}
  .features-queen-img { display: none;}
  .features-king-img { display: none;}
  .features-info-txt { width:100%;}
}

/* features navigation - images with text */
.featuresnav {
    overflow: hidden;
    background-color: #333333;
    margin:0;
    margin-top:0%;
    text-align:center;
    position: relative; /* Set the navbar to fixed position */
    width: 100%; /* Full width */
    -webkit-box-shadow: 0 8px 6px -6px black;
    -moz-box-shadow: 0 8px 6px -6px black;
    box-shadow: 0px 8px 10px -6px black;
    border: 2px solid #665216;
    font-weight: normal;
     border-radius: 5px; 
    -moz-border-radius: 5px; 
    -webkit-border-radius: 5px; 
}

/* Font in the features navigation */
.featuresnav a {
    display: inline-block;
    border: 0px solid #000000;
    color: #f2f2f2;
    width: 22%;
    margin-top: 16px;
    padding: 10px 4px;
    text-decoration: none;
    font-size: 18px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

/* Change the style of fonts on hover */
.featuresnav a:hover {
    color: black;
    text-align: center;
    margin-top: 0px;
    padding: 10px 4px;
    background: #333333; /* Old browsers */
    text-decoration: none;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.featuresnav a.active,.featuresnav a.active:hover{
    color: black;
    font-size: 26px;
    text-align: center;
    margin-top: 0px;
    padding: 10px 4px;
    background: #333333; /* Old browsers */
    text-decoration: none;       
}

.featuresnav img {
    background: #333333; /* Old browsers */
    width: 100%;
    opacity: 0.5;
    -webkit-filter: grayscale(100%);
    filter: alpha(opacity=80); /* For IE8 and earlier */
}

.featuresnav img:hover {
    background: #333333; /* Old browsers */
    width: 105%;    
    opacity: 0.9;
    -webkit-filter: grayscale(50%);
    filter: alpha(opacity=90); /* For IE8 and earlier */
}

.featuresnav .active img,.featuresnav .active img:hover {
    background: #333333; /* Old browsers */
    width: 110%;
    opacity: 1;
    -webkit-filter: grayscale(0%);
    filter: alpha(opacity=100); /* For IE8 and earlier */
}

.featuresnav .active {
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    background-color: #333;
    color: white;
}
</style>

