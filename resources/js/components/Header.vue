<template>
    <div id="header" class="header">
        <table width=100% height=100% border=0 cellspacing=0 cellpadding=0>
            <tr>
                <td width=70%>
                <div class="logodiv"><img alt="slco" :src='slcologo'></div>
                </td>
                <td width=30%>
                <div class="logindiv">
                <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace><font class="factiontxt">{{mockAccount.username}}</font>, Logout</router-link></div>
                <Login v-if="!authenticated" @authenticated="setAuthenticated" />
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import Login from '../views/Login.vue'

export default {
  name: 'Header',
  components: { Login },
  data() {
      return {
          slcologo: 'assets/slcologo.png',
          authenticated: false,
          mockAccount: {
              username: "test",
              password: "test"
          }
      }
  },
  mounted() {
      if(!this.authenticated) {
          this.$router.replace({ name: "login" });
      }
  },
  methods: {
      setAuthenticated(status) {
          this.authenticated = status;
      },
      logout() {
          this.authenticated = false;
      }
  }
}
</script>

<style>
.header {
    overflow:hidden;
    z-index: 777;
    background-color: #333;
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    width: 100%; /* Full width */
    height: 34px;
}
.logodiv{
    display:inline-block;
}
.logindiv{
    display:inline-block;
    top: 0; /* Position the navbar at the top of the page */
}
.logindiv a{
    color: #9e7b1b;
}
</style>
