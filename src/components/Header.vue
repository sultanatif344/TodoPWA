<template>
    <div class="Header">
        <div class="container">
            <div class="row-md-7">
                <div class="col-md-10">
                    <h1 class="page-header">
                    <strong>Todoapp</strong>
                    </h1>
                    <div id="nav">
                    <router-link to="/">Home</router-link>|
                    <router-link to="/about">About</router-link>
                    <button class="btn btn-dark" v-on:click="logout()">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    data(){
        return{
            isLoggedIn: false,
            currentUser:false
        }
    },
    methods:{
        logout(){
            firebase.auth().signOut().then(()=>{
                this.$router.push('/login');
            });
        }
    }
}
</script>

<style scoped>
.Header{
    color: blue;
    background-color:rgba(56, 190, 22, 0.534);
    font-style:oblique;
    font-family: Georgia, 'Times New Roman', Times, serif;
    padding-bottom: 0.025em;
}
.btn{
    float:right;
}
</style>