<template>
    <div id="login">
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    }
</script>

<style scoped>
    #login {
        display: inline-block;
    }
    #login button{
        -moz-box-shadow:inset 0px 34px 0px -15px #bf9a2a;
	-webkit-box-shadow:inset 0px 34px 0px -15px #bf9a2a;
	box-shadow:inset 0px 28px 0px -15px #bf9a2a;
	background-color:#9e7b1b;
	border:1px solid #241d13;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
    margin:0px 4px 0px 4px;
	padding:2px 13px;
	text-decoration:none;
	text-shadow:0px -1px 0px #78731d;
    }
</style>