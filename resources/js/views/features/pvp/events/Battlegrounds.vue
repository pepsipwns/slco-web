<template>
<div id="battlegrounds" class="battlegrounds">
    <center>
    <table width=100% border=0 cellspacing=0 cellpadding=0>
    <tr><td height="30">
    </td></tr>
    <tr><td>
    <div class="events-text">
        <center>
        <h2>Dion Battleground</h2>
        </center>
        <table width=100% height=100 border=0 cellspacing=0 cellpadding=0>
        <tr>
            <td width=100%>
                <table width=100% height=100% border=0 cellspacing=0 cellpadding=0>
                <tr>
                    <td width=25%><button id="town0" v-bind:class="[town0Class]" @click="capture($event, $data.town0Class)"> </button>
                    </td>
                    <td width=25%><button id="town1" v-bind:class="[town1Class]" @click="capture($event, $data.town1Class)"> </button>
                    </td>
                    <td width=25%><button id="town2" v-bind:class="[town2Class]" @click="capture($event, $data.town2Class)"> </button>
                    </td>
                    <td width=25%><button id="town3" v-bind:class="[town3Class]" @click="capture($event, $data.town3Class)"> </button>
                    </td>
                </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td width=100%>
                    <img alt="slco" :src='display' align="center">
            </td>
        </tr>
        </table>
        <br>
        <center>
        <ul>
            <li>This mode consists of a series of maps.
            </li>
            <li>For example Dion Battleground has: Floran Fortress, Floran Village, Dion Castle and Dion Town.
            </li>
            <li>The event would begin with the two factions owning the central two maps. <font class="faction-font" color="#F1AB31">Floran Village</font> and <font class="faction-font" color="#2897E5">Dion Castle</font>.
            </li>
            <li>Each factions objective is to capture the enemy town, whilst defending their own.
            </li>
            <li>Each town is defended by guards, some are enhanced guards.
            </li>
            <li>To capture a town you must destroy the Town Center.
            </li>
            <li>If Dion Castle was captured, the next fight would be between Dion Castle and Dion Town.
            </li>
            <li>Once a faction captures all of the maps, they win the event.
            </li>
        </ul>
        </center>
     </div>
    </td></tr>
    </table>
    </center>
 </div>
</template>

<script>
export default {
    data() {
         return {
            display: 'assets/battlegrounds-display.png',
            town0Class: 'phx-inactive',
            town1Class: 'phx-active',
            town2Class: 'fur-active',
            town3Class: 'fur-inactive'
         }
    },
  methods: {
      capture: function(e, d) {
          var id = e.target.id;
          console.log(id);
          console.log(d);
          if (d == 'phx-active'){
            if (id == 'town0'){
                console.log('town0Class ='+this.$data.town0Class);
                this.$data.town0Class = 'fur-inactive';
                this.$data.town1Class = 'fur-inactive';
                this.$data.town2Class = 'fur-inactive';
                this.$data.town3Class = 'fur-inactive';
                 setTimeout(() => {
                this.$data.town0Class = 'winner';
                this.$data.town1Class = 'winner';
                this.$data.town2Class = 'winner';
                this.$data.town3Class = 'winner';
                 }, 1200);
                setTimeout(() => {
                this.$data.town0Class = 'phx-inactive';
                this.$data.town1Class = 'phx-active';
                this.$data.town2Class = 'fur-active';
                this.$data.town3Class = 'fur-inactive';
                 }, 2600);
            }
            if (id == 'town1'){
                console.log('town1Class ='+this.$data.town1Class);
            this.$data.town0Class = 'phx-active';
            this.$data.town1Class = 'fur-active';
            this.$data.town2Class = 'fur-inactive';
            }
            if (id == 'town2'){
                console.log('town2Class ='+this.$data.town2Class);
                this.$data.town0Class = 'phx-inactive';
                this.$data.town1Class = 'phx-active';
                this.$data.town2Class = 'fur-active';
                this.$data.town3Class = 'fur-inactive';
            }
          }
          if (d == 'fur-active'){
            if (id == 'town1'){
                console.log('town2Class ='+this.$data.town2Class);
                this.$data.town0Class = 'phx-inactive';
                this.$data.town1Class = 'phx-active';
                this.$data.town2Class = 'fur-active';
                this.$data.town3Class = 'fur-inactive';
            }
            if (id == 'town2'){
                console.log('town2Class ='+this.$data.town2Class);
                this.$data.town1Class = 'phx-inactive';
                this.$data.town2Class = 'phx-active';
                this.$data.town3Class = 'fur-active';
            }
            if (id == 'town3'){
                console.log('town3Class ='+this.$data.town3Class);
                this.$data.town0Class = 'phx-inactive';
                this.$data.town1Class = 'phx-inactive';
                this.$data.town2Class = 'phx-inactive';
                this.$data.town3Class = 'phx-inactive';
                 setTimeout(() => {
                this.$data.town0Class = 'winner';
                this.$data.town1Class = 'winner';
                this.$data.town2Class = 'winner';
                this.$data.town3Class = 'winner';
                 }, 1200);
                 setTimeout(() => {
                this.$data.town0Class = 'phx-inactive';
                this.$data.town1Class = 'phx-active';
                this.$data.town2Class = 'fur-active';
                this.$data.town3Class = 'fur-inactive';
                 }, 2600);
            }
          }
          if (d == 'fur-inactive' || d == 'phx-inactive'){
                console.log('town3Class ='+this.$data.town3Class);
                this.$data.town0Class = 'phx-inactive';
                this.$data.town1Class = 'phx-active';
                this.$data.town2Class = 'fur-active';
                this.$data.town3Class = 'fur-inactive';
          }
          console.log('this.$data.town0Class: '+this.$data.town0Class);
          console.log('this.$data.town1Class: '+this.$data.town1Class);
          console.log('this.$data.town2Class: '+this.$data.town2Class);
          console.log('this.$data.town3Class: '+this.$data.town3Class);
      }
  }
}
</script>

<style>
  .battlegrounds{
      height:100%;
      width: 100%;
  }
  button.phx-active{
      outline:none;
	background-color:#F77D2A;
    cursor:pointer;
	-moz-border-radius:28px;
	-webkit-border-radius:28px;
	border-radius:28px;
	border:1px solid #F77D2A;
	display:inline-block;
	padding:16px 16px;
    transition: all 2s ease;
  }
  button.phx-active:hover{
      outline:none;
    cursor:pointer;
	background-color:#E82722;
	border:1px solid #E82722;
    transition: all 0.8s ease;
  }
  button.phx-inactive{
      outline:none;
	background-color:#A6541C;
	-moz-border-radius:28px;
	-webkit-border-radius:28px;
	border-radius:28px;
	border:1px solid #A6541C;
	display:inline-block;
	padding:16px 16px;
    transition: all 2s ease;
  }
    button.fur-inactive{
      outline:none;
	background-color:#275EA6;
	-moz-border-radius:28px;
	-webkit-border-radius:28px;
	border-radius:28px;
	border:1px solid #275EA6;
	display:inline-block;
	padding:16px 16px;
    transition: all 2s ease;
  }
  button.fur-active{
      outline:none;
    cursor:pointer;
	background-color:#3D90FF;
	-moz-border-radius:28px;
	-webkit-border-radius:28px;
	border-radius:28px;
	border:1px solid #3D90FF;
	display:inline-block;
	padding:16px 16px;
    transition: all 2s ease;
  }
  button.fur-active:hover{
      outline:none;
    cursor:pointer;
	background-color:#E82722;
	border:1px solid #E82722;
	text-shadow:0px 1px 0px #69120F;
    transition: all 0.8s ease;
  }
  button.winner{
      outline:none;
	background-color:#2EFF7C;
	-moz-border-radius:28px;
	-webkit-border-radius:28px;
	border-radius:28px;
	border:1px solid #2EFF7C;
	display:inline-block;
	padding:16px 16px;
	text-shadow:0px 1px 0px #082E16;
    transition: all 1s ease;
  }
  .events-text img{
      width: 90%;
  }
  .events-text{
    z-index:9999;
    color: black;
    display: inline-block;
    overflow: hidden;
    margin:0;
    padding-left: 5%;
    padding-right: 5%;
    padding-top:2%;
    padding-bottom:2%;
    text-align:center;
    position: relative; 
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
    font-size: 25px;
    font-variant:normal;
    font-family: 'Titillium Web', sans-serif;
    line-height: 100%;
  }

ul{
    padding:0px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;
    padding-left:2%;
}
ul:hover{
    padding:0px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;
    padding-left:2%;
}
</style>
