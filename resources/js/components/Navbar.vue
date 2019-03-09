<template>
    <div class="nav" id="navbar" >
        <div id ="navbarscrollto" height="10">
        </div>
        <router-link :class="{'router-link-active': $route.fullPath ==='/' || $route.fullPath === '/a'}" :to="{ name: 'home', hash: '#header' }" >Home</router-link>
        <router-link :class="{'router-link-active': $route.fullPath ==='/' || $route.fullPath === '/a'}" :to="{ name: 'features', hash: '#info' }" exact>Features</router-link>
        <router-link :class="{'router-link-active': $route.fullPath ==='/' || $route.fullPath === '/a'}" :to="{ name: 'download', hash: '#info' }" exact>Download</router-link>
        <a href="">Forum</a>
        <router-link :class="{'router-link-active': $route.fullPath ==='/' || $route.fullPath === '/a'}" :to="{ name: 'about', hash: '#info' }">About Us</router-link>
        <a href="javascript:void(0);" class="icon" v-on:click="dropDownMenu">
        <i class="fa fa-bars"></i>
        </a>
    </div>
</template>

<script>

export default {
  name: "Navbar",
  id: "myNavbar",
  data() {
      return {
          slcologo: 'assets/slcologo.png'
      }
  },
  methods: {
        dropDownMenu: function(){ 
          var x = document.getElementById("navbar");
          if (x.className === "nav") {
              x.className += " responsive";
          } else {
              x.className = "nav";
          }
        },
        handleScroll: function() {
          var x = document.getElementById("navbar");
          var y = document.getElementById("info");
          if (window.scrollY + 64 >= y.offsetTop) {
              x.classList.add("sticky")
          } else {
              x.classList.remove("sticky")
          }
        },
        setActive: function() {
            this.classList.add("active")
        },
        toTop: function() {
            window.scrollTo(0,0)
        }
      } ,
    created: function () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed: function () {
        window.removeEventListener('scroll', this.handleScroll);
    },
     watch: {
      '$route' (to, from) {
        console.log("Route changed");
      }
    },
}
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
</script>

<style scoped>

.nav {
    background-color: #333;
    padding: 2px 14% 4px 14%;
    text-align:center;
    position: relative; /* Set the navbar to fixed position */
    width: 100%; /* Full width */
    -webkit-box-shadow: 0 8px 6px -6px black;
    -moz-box-shadow: 0 8px 6px -6px black;
    box-shadow: 0px 8px 10px -6px black;
}

.nav.sticky{
  position: fixed;
  top:34px;
  z-index: 666;
}
/* Style the links inside the navigation bar */
.nav a {
    display: inline-block;
    border: 0px solid #000000;
    color: #f2f2f2;
    margin-right: 2px;
    width: 19%;
    padding: 10px 0px;
    text-decoration: none;
    font-size: 18px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    border-radius: 2px; 
    -moz-border-radius: 2px; 
    -webkit-border-radius: 2px; 
    border: 2px solid #BF992A;
}

/* Change the color of links on hover */
.nav a:hover {
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

/* Hide the link that should open and close the topnav on small screens */
.nav .icon {
  display: none;
}

/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
@media screen and (max-width: 600px) {
  .nav a:not(:first-child) {display: none;}
  .nav a:first-child {
      width:80%;
  }
  .nav a.icon {
    width:20%;
    float: right;
    display: block;
  }
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
@media screen and (max-width: 600px) {
  .nav.responsive {
      width:70%;
      }
  .nav.responsive a.icon {
    width: 20%;
    display: block;
    float: right;
  }
  .nav.responsive a {
    width: 80%;
    float: left;
    display: block;
  }
}

</style>
