<template>
    <div id="header" class="header">
        <table width=100% height=100% border=0 cellspacing=0 cellpadding=0>
            <tr>
                <td width=70%>
                <div class="logodiv"><img alt="slco" :src='slcologo'></div>
                </td>
                <td width=30%>
                <div class="logindiv">
                <template v-if="!currentUser">
                <router-link :to="{ name: 'login' }">Login</router-link>
                <router-link :to="{ name: 'register' }">Register</router-link>
                </template>
                <template v-else>
                <div class="factionfont"> {{ currentUser.name }}</div>
                <a href="#" @click.prevent="logout">Logout</a>
                </template>
                </div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import Login from '../components/auth/Login.vue'

export default {
  name: 'Header',
  computed: {
      currentUser() {
          return this.$store.getters.currentUser
      }
  },
  components: { Login },
  data() {
      return {
          slcologo: 'assets/slcologo.png',
      }
  },
  methods: {
      logout(){
        this.$store.commit('logout');
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
    border-bottom: 2px solid #BF992A;
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
