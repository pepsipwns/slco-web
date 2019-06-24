<template>
    <div>
        <div class="alert alert-danger" v-if="error && !success">
            <p>There was an error, unable to complete registration.</p>
        </div>
        <div class="alert alert-success" v-if="success">
            <p>Registration completed. You can now <router-link :to="{name:'login'}">sign in.</router-link></p>
        </div>
        <div class="paper-background">
            <h2>Registration</h2>
            <div class="factionfont">Please enter the info below and press submit to create your account.</div>
            <div class="inner-grey-background">
            <form autocomplete="off" @submit.prevent="register" v-if="!success" method="post">
                <table border=0 width=100% cellpadding=0 cellspacing=0>
                    <tr><td>
                <div class="form-group" v-bind:class="{ 'has-error': error && errors.name }">
                    <label class="nametxt" for="name">Name</label>
                    <input type="text" id="name" class="form-control" v-model="name" required>
                    <span class="help-block" v-if="error && errors.name">{{ errors.name }}</span>
                </div>
                </td></tr>
                <tr><td>
                <div class="form-group" v-bind:class="{ 'has-error': error && errors.email }">
                    <label class="nametxt" for="email">E-mail</label>
                    <input type="email" id="email" class="form-control" placeholder="user@example.com" v-model="email" required>
                    <span class="help-block" v-if="error && errors.email">{{ errors.email }}</span>
                </div>
                </td></tr>
                <tr><td>
                <div class="form-group" v-bind:class="{ 'has-error': error && errors.password }">
                    <label class="nametxt" for="password">Password</label>
                    <input type="password" id="password" class="form-control" v-model="password" required>
                    <span class="help-block" v-if="error && errors.password">{{ errors.password }}</span>
                </div>
                </td></tr>
                <tr><td>
                <div class="form-group" v-bind:class="{ 'has-error': error && errors.password }">
                    <label class="nametxt" for="password2">Password</label>
                    <input type="password" id="password2" class="form-control" v-model="password2" required>
                    <span class="help-block" v-if="error && errors.password">{{ errors.password }}</span>
                </div>
                </td></tr>
                <tr><td>
                <div class="form-group submitbtn">
                <button type="submit" class="btn btn-default">Submit</button>
                </div>
                </td></tr>
                </table>
            </form>
            </div>
        </div>
    </div>
</template>

<script> 
    export default {
        data(){
            return {
                name: '',
                email: '',
                password: '',
                password2: '',
                error: false,
                errors: {},
                success: false
            };
        },
        methods: {
            register(){
                let data = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    is_admin: this.is_admin
                }
                this.$store.dispatch('register', data)
                .then(() => this.$router.push('/login'))
                .catch(err => console.log(err))
            }
        }
    }
</script>

<style>
.factionfont{
    padding-bottom: 1%;
}
.form-group{
    margin-top:10px;
    width:100%;
    padding-right: 5%;
    text-align: center;
}
.form-control{
    display: block;
    width:60%;
    float: right;
    padding: 4px;
    color: black;
    border: 1px black solid;
    background-color: #8e8d7a;
}
.nametxt{
    display: block;
    float: left;
    width:40%;
}
.submitbtn{
    border: 0px solid #000000;
    color: #f2f2f2;
    width: 90%;
    padding: 10px;
    margin-left: 5%;
    text-decoration: none;
    font-size: 18px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    border-radius: 2px; 
    -moz-border-radius: 2px; 
    -webkit-border-radius: 2px; 
    border: 2px solid #BF992A;
}
.inner-grey-background{
    font-size: 16px;
    color: black;
    display: inline-block;
    overflow: hidden;
    background-color: #3e3e3e;
    margin:0;
    padding-top: 2%;
    margin-top:10px;
    padding-bottom:20px;
    width:50%;
    -webkit-box-shadow:  0px 0px 55px 10px rgba(0,0,0,0.75);
    -moz-box-shadow:  0px 0px 55px 10px rgba(0,0,0,0.75);
    box-shadow:  0px 0px 55px 10px rgba(0,0,0,0.75);
    border: 2px solid #363636;
    font-weight: normal;
     border-radius: 5px; 
    -moz-border-radius: 5px; 
    -webkit-border-radius: 5px; 
    font-size: 17px;
    font-variant:normal;
    font-family: 'Titillium Web', sans-serif;
}
</style>
