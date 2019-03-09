<template>
<div id="ascension" class="ascension">
    <center>
    <table width=100% border=0 cellspacing=0 cellpadding=0>
    <tr><td>
    <center>
    <div class="events-text">
        <h2>ToI Ascension</h2>
        <table width=100% height=100 border=0 cellspacing=0 cellpadding=0>
        <tr>
            <td>
                <table width=100% border=0 cellspacing=0 cellpadding=0>
                <tr>
                    <td width=45%><div class="phx-score">Phoenix Score: {{pscore}} </div>
                    </td>
                    <td width=10%><button class="resetbtn"  v-bind:class="[resetClass]" @click="reset()" >Reset </button>
                    </td>
                    <td width=45%><div class="fur-score">Furian Score: {{fscore}} </div>
                    </td>
                </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td width=100%>
                <table width=100% height=100% border=0 cellspacing=0 cellpadding=0>
                <tr>
                    <td width=15%>
                    </td>
                    <td width=70%><div class="ascmap" v-bind:class="[a6]">Baium</div>
                    </td>
                    <td width=15%>
                    </td>
                </tr>
                <tr>
                    <td width=15%><button id="p5" v-bind:class="[p5]" @click="capture($event)"> </button>
                    </td>
                    <td width=70%><div id="a5" class="ascmap" v-bind:class="[a5]">Floor 11 - King of the Hill</div>
                    </td>
                    <td width=15%><button id="f5" v-bind:class="[f5]" @click="capture($event)"> </button>
                    </td>
                </tr>
                <tr>
                    <td width=15%><button id="p4" v-bind:class="[p4]" @click="capture($event)"> </button>
                    </td>
                    <td width=70%><div id="a4" class="ascmap" v-bind:class="[a4]">Floor 9 - Capture the Flag</div>
                    </td>
                    <td width=15%><button id="f4" v-bind:class="[f4]" @click="capture($event)"> </button>
                    </td>
                </tr>
                <tr>
                    <td width=15%><button id="p3" v-bind:class="[p3]" @click="capture($event)"> </button>
                    </td>
                    <td width=70%><div id="a3" class="ascmap" v-bind:class="[a3]" >Floor 7 - Deathmatch</div>
                    </td>
                    <td width=15%><button id="f3" v-bind:class="[f3]" @click="capture($event)"> </button>
                    </td>
                </tr>
                <tr>
                    <td width=15%><button id="p2" v-bind:class="[p2]"  @click="capture($event)"> </button>
                    </td>
                    <td width=70%><div id="a2" class="ascmap" v-bind:class="[a2]">Floor 3 - King of the Hill</div>
                    </td>
                    <td width=15%><button id="f2" v-bind:class="[f2]" @click="capture($event)"> </button>
                    </td>
                </tr>
                <tr>
                    <td width=15%><button id="p1" v-bind:class="[p1]" @click="capture($event)"> </button>
                    </td>
                    <td width=70%><div id="a1" class="ascmap" v-bind:class="[a1]">Floor 1 - Deathmatch</div>
                    </td>
                    <td width=15%><button id="f1" v-bind:class="[f1]" @click="capture($event)"> </button>
                    </td>
                </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td width=100%>
            </td>
        </tr>
        </table>
        <ul>
            <li>This mode uses one central large scale zone.
            </li>
            <li>For example Tower of Insolence for its many levels.
            </li>
            <li>The event would begin with the two factions battling at the bottom stage of the tower.
            </li>
            <li>The type of event is randomized e.g. Deathmatch, CTF, KoTH.
            </li>
            <li>The winner of this event gains 1 point, and the next event is generated on a higher floor.
            </li>
            <li>Gain the most points by winning the most events before the end of the ascension to win.
            </li>
            <li>Winning faction will ascend to last level and fight an epic boss.
            </li>
        </ul>
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
            f1: 'fur-active',
            f2: 'fur-inactive',
            f3: 'fur-inactive',
            f4: 'fur-inactive',
            f5: 'fur-inactive',
            p1: 'phx-active',
            p2: 'phx-inactive',
            p3: 'phx-inactive',
            p4: 'phx-inactive',
            p5: 'phx-inactive',
            a1: 'active',
            a2: 'inactive',
            a3: 'inactive',
            a4: 'inactive',
            a5: 'inactive',
            a6: 'inactive',
            fscore: 0,
            pscore: 0,
            resetClass: 'inactive'
         }
    },
   methods: {
      capture: function(e) {
        var id = e.target.id;
          console.log(id);
          console.log(id+1);
          if (id == "f1"){
              this.$data.a1 = 'fur-win';
              this.$data.f1 = 'fur-inactive'
              this.$data.p1 = 'phx-inactive'
              this.$data.f2 = 'fur-active'
              this.$data.p2 = 'phx-active'
              this.$data.a2 = 'active'
              this.$data.fscore += 1;
          } else if (id == "p1"){
              this.$data.a1 = 'phx-win';
              this.$data.f1 = 'fur-inactive'
              this.$data.p1 = 'phx-inactive'
              this.$data.f2 = 'fur-active'
              this.$data.p2 = 'phx-active'
              this.$data.a2 = 'active'
              this.$data.pscore += 1;
          }
          if (id == "f2"){
              this.$data.a2 = 'fur-win';
              this.$data.f2 = 'fur-inactive'
              this.$data.p2 = 'phx-inactive'
              this.$data.f3 = 'fur-active'
              this.$data.p3 = 'phx-active'
              this.$data.a3 = 'active'
              this.$data.fscore += 1;
          } else if (id == "p2"){
              this.$data.a2 = 'phx-win';
              this.$data.f2 = 'fur-inactive'
              this.$data.p2 = 'phx-inactive'
              this.$data.f3 = 'fur-active'
              this.$data.p3 = 'phx-active'
              this.$data.a3 = 'active'
              this.$data.pscore += 1;
          }
          if (id == "f3"){
              this.$data.a3 = 'fur-win';
              this.$data.f3 = 'fur-inactive'
              this.$data.p3 = 'phx-inactive'
              this.$data.f4 = 'fur-active'
              this.$data.p4 = 'phx-active'
              this.$data.a4 = 'active'
              this.$data.fscore += 1;
          } else if (id == "p3"){
              this.$data.a3 = 'phx-win';
              this.$data.f3 = 'fur-inactive'
              this.$data.p3 = 'phx-inactive'
              this.$data.f4 = 'fur-active'
              this.$data.p4 = 'phx-active'
              this.$data.a4 = 'active'
              this.$data.pscore += 1;
          }
          if (id == "f4"){
              this.$data.a4 = 'fur-win';
              this.$data.f4 = 'fur-inactive'
              this.$data.p4 = 'phx-inactive'
              this.$data.f5 = 'fur-active'
              this.$data.p5 = 'phx-active'
              this.$data.a5 = 'active'
              this.$data.fscore += 1;
          } else if (id == "p4"){
              this.$data.a4 = 'phx-win';
              this.$data.f4 = 'fur-inactive'
              this.$data.p4 = 'phx-inactive'
              this.$data.f5 = 'fur-active'
              this.$data.p5 = 'phx-active'
              this.$data.a5 = 'active'
              this.$data.pscore += 1;
          }
          if (id == "f5"){
              this.$data.a5 = 'fur-win';
              this.$data.f5 = 'fur-inactive'
              this.$data.p5 = 'phx-inactive'
              this.$data.f6 = 'fur-active'
              this.$data.p6 = 'phx-active'
              this.$data.a6 = 'active'
              this.$data.fscore += 1;
              if (this.$data.pscore > this.$data.fscore){
                  this.$data.a6 ='phx-win'
              } else {
                  this.$data.a6 = 'fur-win'
              }
              this.$data.resetClass = 'active'
          } else if (id == "p5"){
              this.$data.a5 = 'phx-win';
              this.$data.f5 = 'fur-inactive'
              this.$data.p5 = 'phx-inactive'
              this.$data.f6 = 'fur-active'
              this.$data.p6 = 'phx-active'
              this.$data.a6 = 'active'
              this.$data.pscore += 1;
              if (this.$data.pscore > this.$data.fscore){
                  this.$data.a6 ='phx-win'
              } else {
                  this.$data.a6 = 'fur-win'
              }
              this.$data.resetClass = 'active'
          }
      },
      reset: function(){
            this.$data.f1= 'fur-active',
            this.$data.f2= 'fur-inactive',
            this.$data.f3= 'fur-inactive',
            this.$data.f4= 'fur-inactive',
            this.$data.f5= 'fur-inactive',
            this.$data.p1= 'phx-active',
            this.$data.p2= 'phx-inactive',
            this.$data.p3= 'phx-inactive',
            this.$data.p4= 'phx-inactive',
            this.$data.p5= 'phx-inactive',
            this.$data.a1= 'active',
            this.$data.a2= 'inactive',
            this.$data.a3= 'inactive',
            this.$data.a4= 'inactive',
            this.$data.a5= 'inactive',
            this.$data.a6= 'inactive',
            this.$data.fscore= 0,
            this.$data.pscore= 0,
            this.$data.resetClass= 'inactive'
      }
   }
}
</script>

<style scoped>
.phx-score{
    color: white;
    font-size: 18px;
	background-color:#8C481F;
	-moz-border-radius:10px;
	-webkit-border-radius:10px;
	border-radius:10px;
    margin-top:1px;
    margin-bottom:4px;
	border:1px solid #0E0F33;
	display:inline-block;
    padding: 5px 10px 5px 10px;
    transition: all 2s ease;
    -moz-box-shadow:    inset 0 0 16px #000000;
    -webkit-box-shadow: inset 0 0 16px #000000;
    box-shadow:         inset 0 0 16px #000000;
}
.fur-score{
    color: white;
    font-size: 18px;
	background-color:#3F66BA;
	-moz-border-radius:10px;
	-webkit-border-radius:10px;
	border-radius:10px;
    margin-top:1px;
    margin-bottom:4px;
	border:1px solid #0E0F33;
	display:inline-block;
    padding: 5px 10px 5px 10px;
    transition: all 2s ease;
    -moz-box-shadow:    inset 0 0 16px #000000;
    -webkit-box-shadow: inset 0 0 16px #000000;
    box-shadow:         inset 0 0 16px #000000;
}
.ascmap{
    font-size: 18px;
	background-color:#343561;
	-moz-border-radius:10px;
	-webkit-border-radius:10px;
	border-radius:10px;
	border:1px solid #0E0F33;
	display:inline-block;
	padding-bottom:2px;
    padding-top:2px;
    transition: all 2s ease;
    -moz-box-shadow:    inset 0 0 16px #000000;
    -webkit-box-shadow: inset 0 0 16px #000000;
    box-shadow:         inset 0 0 16px #000000;
    width:100%;
}

.active{
	background-color:#343561;
    box-shadow:         inset 0 0 16px #a9a890;
    margin-top:0px;
}

.inactive{
    color: #0C0D2E;
}
.fur-win{
	background-color:#3F66BA;
    box-shadow:         inset 0 0 16px #a9a890;
    color: white;
}
.phx-win{
	background-color:#8C481F;
    box-shadow:         inset 0 0 16px #a9a890;
    color: white;
}
button.fur-inactive{
    display: none;
}
button.phx-inactive{
    display: none;
}
button.phx-active{
	padding:10px 10px;
}
button.fur-active{
	padding:10px 10px;
}
button.inactive{
    outline: none;
    opacity:0;
}
button.active{
    outline: none;
    opacity:1;
}
button.resetbtn{
    outline: none;
    cursor:pointer;
	-moz-border-radius:10px;
	-webkit-border-radius:10px;
	border-radius:10px;
    padding: 5px 10px 5px 10px;
	background-color:#343561;
    -moz-box-shadow:    inset 0 0 16px #000000;
    -webkit-box-shadow: inset 0 0 16px #000000;
    box-shadow:         inset 0 0 16px #000000;
    transition: all 0.7s ease;
}
.events-text{
    padding-bottom:0px;
}
</style>

