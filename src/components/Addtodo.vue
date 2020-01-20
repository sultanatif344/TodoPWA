<template>
    <div class="Add-todo">
        <textarea class="form-control" v-model="data.Item" rows="1" placeholder="Add Todos here"></textarea>
        <button class="Add" v-on:click="AddData(data.Item,data.Date)"><strong>+</strong></button>
    </div>
</template>

<script>
import db from "./firebaseInit"
import firebase from 'firebase'
export default {
name:'Addtodo',
data(){
    const d=new Date();
    const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return{
    data:{
        'Date': `${d.getDate()}/${months[d.getMonth()]}/${d.getFullYear()}`,
        'Item':undefined,
    },
    }
},
methods:{
    AddData(todoItem,todoDate){ 
            db.collection("todos").add({
                user:firebase.auth().currentUser.email,
                Date:todoDate,
                Item:todoItem
            })
            .then(()=>{
                alert("Execution successful");
            })
        }
    }
}
</script>

<style scoped>
.Add{
        background-color: rgb(22, 153, 33);
        color:#fff;
        border:none;
        padding:1px 9px;
        border-radius:50%;
        cursor:pointer;
        float:right
}

</style>