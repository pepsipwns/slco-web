<template>
<div id="events" class="events">
    <center>
    <center>
    <h1> Main Events </h1> 
        <div class="pvpsnav" id="eventsnav">
            <transition name="router-anim" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutLeft">
            <div class="ascension-div" id="ascension-link" @click="showToggle">
                <keep-alive>
                <router-link :class="{'router-link-active': $route.fullPath ==='/' || $route.fullPath === '/a'}"  :to="{  name: 'ascension', hash: '#ascension', tag:'span' }" >
                    <div class="ascension-txt">Ascension</div>
                    <img alt="slco" :src='ascimg' align="right">    
                </router-link>
                </keep-alive>
                <transition name="fade" mode="out-in">
                <div id="ascension-view" class="ascension-view divinactive">
                    <router-view></router-view>
                </div>
                </transition>
            </div>
            </transition>
            <transition  name="router-anim" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
            <div class="battlegrounds-div" id="battlegrounds-link" @click="showToggle">
                <router-link :class="{'router-link-active': $route.fullPath ==='/' || $route.fullPath === '/a'}"  :to="{  name: 'battlegrounds', hash: '#battlegrounds', tag:'span' }" >
                    <div class="battlegrounds-txt">Battlegrounds</div>
                    <img alt="slco" :src='bgdimg' align="left">
                </router-link>
                <transition name="fade" mode="out-in">
                <div id="battlegrounds-view" class="battlegrounds-view divinactive">     
                    <router-view></router-view>
                </div>
                </transition>
            </div>
            </transition>   
        </div>
    </center>
    
    </center>
 </div>
</template>

<script>
export default {
    methods: {
        showToggle: function(){
          var x = document.activeElement;
          var ascensionDiv = document.getElementById('ascension-link');
          var battlegroundsDiv = document.getElementById('battlegrounds-link');
          var ascensionView = document.getElementById('ascension-view');
          var battlegroundsView = document.getElementById('battlegrounds-view');
          
          console.log('activeElement: ' + x.textContent);
          console.log('ascensionDiv: ' + ascensionDiv.classList);
          console.log('battlegroundsDiv: ' + battlegroundsDiv.classList);
          console.log('x.textContent: ' + x.textContent);
          if (x.textContent.startsWith('Battlegrounds')){
          console.log('xBattlegrounds ');
              // Deactivate ascension div and activate battleground div.
              if (ascensionDiv.classList.contains('divactive')) ascensionDiv.classList.remove('divactive');
              if (!ascensionDiv.classList.contains('divinactive')) ascensionDiv.classList.add('divinactive');
              if (battlegroundsDiv.classList.contains('divinactive')) battlegroundsDiv.classList.remove('divinactive');
              battlegroundsDiv.classList.add('divactive');
              // Activate the battlegrounds view and deactivate the asc view if its active
              if (ascensionView.classList.contains('divactive')) ascensionView.classList.remove('divactive');
              if (!ascensionView.classList.contains('divinactive')) ascensionView.classList.add('divinactive');
              setTimeout(function() { 
              if (battlegroundsView.classList.contains('divinactive')) battlegroundsView.classList.remove('divinactive');
              battlegroundsView.classList.add('divactive'); }, 1300);
          } else if (x.textContent.startsWith('Ascension')){
          console.log('xAscension ');
              // Deactivate battlegrounds div and activate asc div.
              if (battlegroundsDiv.classList.contains('divactive')) battlegroundsDiv.classList.remove('divactive');
              if (!battlegroundsDiv.classList.contains('divinactive')) battlegroundsDiv.classList.add('divinactive');
              if (ascensionDiv.classList.contains('divinactive')) ascensionDiv.classList.remove('divinactive');
              ascensionDiv.classList.add('divactive');
              // Activate the asc view and deactivate the battlegrounds view if its active
              if (battlegroundsView.classList.contains('divactive')) battlegroundsView.classList.remove('divactive');
              if (!battlegroundsView.classList.contains('divinactive')) battlegroundsView.classList.add('divinactive');
              setTimeout(function() {
              if (ascensionView.classList.contains('divinactive')) ascensionView.classList.remove('divinactive');
              ascensionView.classList.add('divactive'); }, 1300);
          }
        }
    },
  data() {
      return {
          ascimg: 'assets/ascension-img.png',
          bgdimg: 'assets/battlegrounds-img.png',
      }
  }
}
</script>

<style scoped>
h1 {
    margin-top: 0px;
    width: 80%;
}
.pvpsnav{
   display:flex;
    background-color:#363636;
   width:90%;
   height: 640px;
    margin:0px;
    padding:20px;
    -webkit-box-shadow: 0 8px 6px -6px black;
    -moz-box-shadow: 0 8px 6px -6px black;
    box-shadow: 0px 8px 10px -6px black;
    border: 2px solid #665216;
    font-weight: normal;
     border-radius: 5px; 
    -moz-border-radius: 5px; 
    -webkit-border-radius: 5px; 
    transition: all 1.3s ease;
}
.ascension-div {
    z-index: 999;
    display: inline-block;
    background-color:#363636;
    width:50%;
    margin:0px;
    padding:0px;
    position: relative;
    transition: all 1.3s ease;
}
.battlegrounds-div {
    z-index: 999;
    display: inline-block;
    background-color:#363636;
    width:50%;
    margin:0px;
    padding:0px;
    position: relative;
    transition: all 1.3s ease;
}
.ascension-div.divactive {
    width:90%;
}
.battlegrounds-div.divactive {
    width:90%;
}
.ascension-div.divinactive {
    padding:0px;
    width:10%;
}
.battlegrounds-div.divinactive {
    padding:0px;
    width:10%;
}
.ascension-div.divinactive a{
    writing-mode: vertical-lr;
    text-orientation: mixed;
    z-index: 999;
}
.battlegrounds-div.divinactive a{
    writing-mode: vertical-rl;
    text-orientation: mixed;
    z-index: 999;
}
.ascension-div.divinactive img{
    width:200px;
    max-width:100%;
    height:100%;
}
.battlegrounds-div.divinactive img{
    width:200px;
    max-width:100%;
    height:100%;
}
.ascension-div.divactive img{
    max-width:100%;
    height:100%;
    position: absolute;
    right: 0px;
    top: 0px;
}
.ascension-div.divactive img{
    max-width:100%;
    height:100%;
    position: absolute;
    right: 0px;
    top: 0px;
}
.ascension-div img{
    max-width:100%;
    height:100%;
    position: absolute;
    right: 0px;
    top: 0px;
}
.battlegrounds-div img{
    max-width:100%;
    height:100%;
    position: absolute;
    left: 0px;
    top: 0px;
}
.battlegrounds-txt {
    position: absolute;
    left: 10px;
    z-index: 999;
}
.ascension-txt {
    position: absolute;
    right: 10px;
    z-index: 999;
}
a{
    font-variant: small-caps;
    color: white;
    width:100%;
    height:100%;
    z-index: 999;
}
a:hover{
    color:aquamarine;
    z-index: 999;
}

.active {
    -moz-box-shadow:    none;
    -webkit-box-shadow: none;
    box-shadow:         none;
    background-color:#363636;
    color: white;
}
.battlegrounds-view {
    z-index: 998;
    display:inline-block;
    margin:0px;
    padding:0px;
    width:60%;
    height: 100%;
    transition: opacity 1s;
}
.battlegrounds-view.divinactive{
    z-index: 99;
    pointer-events: none;
    opacity: 0;
    transition: opacity 1s;
}
.battlegrounds-view.divactive{
    opacity: 1;
   width:60%;
   float: right;
   display:block;
}
.ascension-view {
    z-index: 998;
    display:block;
    margin:0px;
    padding:0px;
    width:60%;
    height: 100%;
    transition: opacity 2s;
}
.ascension-view.divinactive{
    z-index: 99;
    pointer-events: none;
    opacity: 0;
    transition: opacity 2s;
}
.ascension-view.divactive{
    opacity: 1;
   width:60%;
   display:block;
   float: left;
}
.fade-enter,.fade-leave-to {
	opacity:0;
}
.fade-enter-active,.fade-leave-active {
	transition: opacity 1s;
}
@media screen and (max-width: 1300px) {
    .battlegrounds-view {
        width:90%;
        height: 100%;
        transition: opacity 1s;
    }
    .battlegrounds-view.divinactive{
        opacity: 0;
        transition: opacity 1s;
    }
    .battlegrounds-view.divactive{
    width:90%;
    display:block;
    }
    .ascension-view {
        width:90%;
        transition: opacity 2s;
    }
    .ascension-view.divinactive{
        transition: opacity 2s;
    }
    .ascension-view.divactive{
    width:90%;
    }
}

@media screen and (max-width: 600px) {
    .battlegrounds-view {
    width:90%;
    height: 100%;
    transition: opacity 1s;
    }
    .battlegrounds-view.divinactive{
        opacity: 0;
        transition: opacity 1s;
    }
    .battlegrounds-view.divactive{
        width:95%;
        display:block;
    }
    .ascension-view {
        width:95%;
        float:left;
        transition: opacity 2s;
    }
    .ascension-view.divinactive{
        transition: opacity 2s;
    }
    .ascension-view.divactive{
    width:95%;
    float:left;
    }
    .ascension-div.divactive {
        width:95%;
    }
    .ascension-div.divinactive img{
        display:none;
    }
    .battlegrounds-div.divinactive img{
        display:none;
    }
    .battlegrounds-div.divactive {
        width:95%;
    }
    .ascension-div.divinactive {
        padding:0px;
        width:5%;
    }
    .battlegrounds-div.divinactive {
        padding:0px;
        width:5%;
    }
    .pvpsnav{
        height: 760px;
        width:80%;
        padding:16px;
        margin-left:0px;
    }
    
}

</style>
