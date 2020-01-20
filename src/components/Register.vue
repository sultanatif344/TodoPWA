<template>
<div class=Register>
        <h1 class="page-header">
        <strong>Todoapp</strong>
        </h1>
        <ul class="navbar-nav">
        <span>
           <strong><router-link to="/Login" style="padding-top:0em;color:blue">Login</router-link></strong> <strong><router-link to="/Register" style="color:blue;">Register</router-link></strong>
        </span>
        </ul>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
            <form class="login-form">
                <h1><strong>Register</strong>
                </h1>
                <div class="form-group">
                    <label for="Username"><strong>Username</strong><input type="email" class="form-control" v-model="email"/></label>
                    <label for="Password"><strong>Password</strong><input type="password" class="form-control" v-model="password"/></label>
                </div>
                <span class="container">
                <button v-on:click="register()" class="btn btn-success" style="opacity:0.8">Register</button>
                </span>
            </form>
            </div>
            </div>
            </div>
            </div>
</template>


<script>
import firebase from 'firebase'
export default{
name:'Register',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        register(){
            firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
            .then(user=>{
                alert(`account created for ${user.user.email}`);
                this.$router.push('/'); 
            },
            err=>{
                alert(err.message);
            }
            )
        }
    }
}
</script>


<style scoped>
.container{
    padding-top: 0.25em;
    width: 25em;
    height:31em;
}
.login-form{
    padding-top: 1.5em;
    padding-left:0px;
    background-color:lightgreen;
    border-style:solid;
    height: 30em;
}
.form-group{
    text-align: left;
    padding-top:2.5em;
    padding-left: 10px;
}
.page-header{
    color: blue;
    background-color:lightgreen;
    font-style:oblique;
    font-family: Georgia, 'Times New Roman', Times, serif;
    padding-bottom: 0.001em;
    text-align: left;
    margin: 0em;
}
.navbar-nav{
    text-align:right;
    font-size: 1em;
    background-color:lightgreen;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-style:oblique;
    margin:0px;
}
</style>