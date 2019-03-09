<template>
    <div id="info" class="info">
        <center>
        <table width=95% height=100% border=0 cellspacing=0 cellpadding=0>
            <tr><td>
                <center>
                <transition mode="out-in" name="router-anim" enter-active-class="animated slideInUp" >
                        <keep-alive>
                        <router-view/>
                        </keep-alive>
                    </transition>
                </center>
            </td></tr>
        </table>
        <div id="pagebottom">
        </div>
        </center>
    </div>
</template>

<script>

export default {
  name: 'Info'
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

.info {
    display: inline-block;
  z-index: 555;
  background-color: rgba(51, 51, 51, 0.85);
  position: relative; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  bottom: 0;
  margin-left: 15%;
  width: 70%; /* Full width */
  height: 100%;
  font-family: 'Titillium Web', sans-serif;
   -moz-box-shadow:    inset 0 0 10px #000000;
   -webkit-box-shadow: inset 0 0 10px #000000;
   box-shadow:         inset 0 0 10px #000000;
    line-height: 120%;
}

h1{
    font-size: 40px;
    color: #f2f2f2;
    display: inline-block;
    overflow: hidden;
    background-color: #333;
    margin:0;
    margin-top:10px;
    text-align:center;
    position: relative; /* Set the navbar to fixed position */
    width:100%;
    -webkit-box-shadow: 0 8px 6px -6px black;
    -moz-box-shadow: 0 8px 6px -6px black;
    box-shadow: 0px 8px 10px -6px black;
    border: 2px solid #665216;
    font-weight: normal;
     border-radius: 5px; 
    -moz-border-radius: 5px; 
    -webkit-border-radius: 5px; 
    font-variant: small-caps;
    line-height: 120%;
}

h2{
    font-size: 30px;
    color: #24110d;
    display: inline-block;
    overflow: hidden;
    margin:0;
    padding-left: 4px;
    padding-right: 4px;
    margin-bottom: 10px;
    text-align:center;
    position: relative; 
    font-weight: bold;
    font-variant: small-caps;
    border: 2px solid #665216;
     border-radius: 5px; 
    -moz-border-radius: 5px; 
    -webkit-border-radius: 5px;
    line-height: 130%; 
}

p{
    font-size: 16px;
    color: black;
    display: inline-block;
    overflow: hidden;
    margin:0;
    padding-left: 4%;
    padding-right: 4%;
    margin-top:10px;
    padding-top:20px;
    padding-bottom:20px;
    margin-left:4%;
    margin-right:4%;
    text-align:center;
    position: relative; 
    width:88%;
    background-image:  linear-gradient(to right, #737161 1%,#D9D6B8 50%,#737161 100%);
    background-color: #8c8a77;
    -webkit-box-shadow: inset 0px 0px 55px 10px rgba(0,0,0,0.75);
    -moz-box-shadow: inset 0px 0px 55px 10px rgba(0,0,0,0.75);
    box-shadow: inset 0px 0px 25px 5px rgba(0,0,0,0.75);
    border: 2px solid #363636;
    font-weight: normal;
     border-radius: 5px; 
    -moz-border-radius: 5px; 
    -webkit-border-radius: 5px; 
    z-index: 99999;
    font-size: 17px;
    font-variant:normal;
    font-family: 'Titillium Web', sans-serif;
}
 /* Same as above but for things that want to use <hr>s */
.paper-background{ 
    font-size: 16px;
    color: black;
    display: inline-block;
    overflow: hidden;
    background-image:  linear-gradient(to right, #737161 1%,#D9D6B8 50%,#737161 100%);
    background-color: #8c8a77;
    margin:0;
    padding-left: 2%;
    padding-right:2%;
    margin-top:10px;
    padding-top:20px;
    padding-bottom:20px;
    text-align:center;
    position: relative;
    width:88%;
    -webkit-box-shadow: inset 0px 0px 55px 10px rgba(0,0,0,0.75);
    -moz-box-shadow: inset 0px 0px 55px 10px rgba(0,0,0,0.75);
    box-shadow: inset 0px 0px 25px 5px rgba(0,0,0,0.75);
    border: 2px solid #363636;
    font-weight: normal;
     border-radius: 5px; 
    -moz-border-radius: 5px; 
    -webkit-border-radius: 5px; 
    font-size: 17px;
    font-variant:normal;
    font-family: 'Titillium Web', sans-serif;
}

.cardbg {
  z-index: 555;
  background-color: rgba(51, 51, 51, 0.85);
  top: 0;
  bottom: 0;
  width: 100%;
   font-family: 'Titillium Web', sans-serif;
   -moz-box-shadow:    inset 0 0 10px #000000;
   -webkit-box-shadow: inset 0 0 10px #000000;
   box-shadow:         inset 0 0 10px #000000;
}

.buttonnav {
    overflow: hidden;
    background-color: #333;
    padding-bottom: 4px;
    text-align:center;
    position: relative; /* Set the navbar to fixed position */
    width: 50%; /* Full width */
    -webkit-box-shadow: 0 8px 6px -6px black;
    -moz-box-shadow: 0 8px 6px -6px black;
    box-shadow: 0px 8px 10px -6px black;
    border-radius: 10px; 
    -moz-border-radius: 10px; 
    -webkit-border-radius: 10px; 
}

/* Style the links inside the navigation bar */
.buttonnav a {
    display: inline-block;
    color: #f2f2f2;
    width: 45%;
    margin-top:5px;
    margin-right: 10px;
    padding: 8px 0px;
    text-decoration: none;
    font-size: 18px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    border-radius: 5px; 
    -moz-border-radius: 5px; 
    -webkit-border-radius: 5px; 
    border: 2px solid #7F6A2D;
}

/* Change the color of links on hover */
.buttonnav a:hover {
    -moz-box-shadow:    inset 0 0 10px #000000;
    -webkit-box-shadow: inset 0 0 10px #000000;
    box-shadow:         inset 0 0 10px #000000;
    background-color: #4980df;
    color: black;
}

/* Add an active class to highlight the current page */
.active {
    -moz-box-shadow:    inset 0 0 16px #000000;
    -webkit-box-shadow: inset 0 0 16px #000000;
    box-shadow:         inset 0 0 16px #000000;
    background-color: #ba7429;
    color: white;
}

@media screen and (max-width: 1326px) {
    
.info {
    width:100%;
    margin-left:0px;
}
.buttonnav {
    overflow: hidden;
    background-color: #333;
    padding-bottom: 4px;
    text-align:center;
    position: relative; /* Set the navbar to fixed position */
    width: 100%; /* Full width */
    -webkit-box-shadow: 0 8px 6px -6px black;
    -moz-box-shadow: 0 8px 6px -6px black;
    box-shadow: 0px 8px 10px -6px black;
    border-radius: 10px; 
    -moz-border-radius: 10px; 
    -webkit-border-radius: 10px; 
}
}
</style>
