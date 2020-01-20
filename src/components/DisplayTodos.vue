<template>
<div class="display-todos">
<div class="container">
<div class="row-md-8">
<div class="col-md-10">
<table class="table table-striped table-bordered">
    <thead>
        <tr>
            <th>
                Todos
            </th>
            <th>
                Date
            </th>
        </tr>
    </thead>
    <tbody v-for="todo in Todos" v-bind:key="todo.id">
        <tr>
            <td>{{todo.Item}}<button class="del" v-on:click="deleteTodo(todo.id)"><strong>x</strong></button></td>
            <td>{{todo.Date}}</td>
        </tr>
    </tbody>
</table>
</div>
</div>
</div>
</div>
</template>
<script>
import db from './firebaseInit'
import firebase from 'firebase'
export default{
    name:'DisplayTodos',
    data(){
        return{
            Todos:[],
            currentuser:false
        }
    },
    methods:{
        deleteTodo(doc){
            db.collection('todos').doc(doc).delete();
        }
    },
    created(){
        this.currentuser=firebase.auth().currentUser.email;
        db.collection('todos').where('user','==',this.currentuser).get().then(querySnapshot=>{
            querySnapshot.forEach(doc=>{
                const data={
                    'id':doc.id,
                    'Item':doc.data().Item,
                    'Date':doc.data().Date
                }
                this.Todos.push(data);
            })
        })
    }
}
</script>

<style scoped>
 .del{
        background:#ff0000;
        color:#fff;
        border:none;
        padding:1px 9px;
        border-radius:50%;
        cursor:pointer;
        float:right;
    }
</style>

