<template>
  <div id="app">
    <table border=0 cellspacing=0 cellpadding=0>
    <tr><td height=34>
      <Header />
    </td></tr>
    <tr><td>
      <Banner />
    </td></tr>
    <tr><td height=40>
      <Navbar />
    </td></tr>
    <tr><td>
      <div id="outerinfo">
      </div>
      <Info />
    </td></tr>
    </table>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Banner from '../components/Banner.vue'
import Navbar from '../components/Navbar.vue'
import Info from '../components/Info.vue'

export default {
  name: 'app',
  components: {
    Header, Banner, Navbar, Info
  },
  created: function () {
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch(logout)
        }
        throw err;
      });
    });
  }
}
</script>

<style>

img {
    max-width: 100%;
}

body {
    margin:0px;
    padding:0px;
    background-image: 'assets/lowerbg.png', linear-gradient(to right, #524f43 1%,#7c7152 50%,#524f43 100%);
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#524f43+1,7c7152+50,524f43+100 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#524f43', endColorstr='#524f43',GradientType=1 ); /* IE6-9 */
    background-repeat: no-repeat;
    background-position:0px 700px;
    background-color:dimgrey;
    margin-bottom:0%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-variant: small-caps;
  }

/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
@media screen and (max-width: 1600px) {
  body {
    background-position: 0px 200px;
  }
}
/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
@media screen and (max-width: 600px) {
  body {
    background-image: linear-gradient(to right, #524f43 1%,#7c7152 50%,#524f43 100%);
    background-position: 0px 0px;
    background-repeat: repeat-y;
  }
}
</style>
