<template>
<div>
    <div class = "crud-heading row">
        <h2 class = "col-sm-10">USER LIST</h2>
         <h2 type="button" v-on:click="LogOut" class = "col-sm-2" style ="font-size: 0.9em; margin-top: 20px">LOG OUT</h2>
    </div>
    <button class="btn btn-success new-button" style="" type="button" @click="AddNew">+NEW</button>
    <div style = "margin-top: 10px" :key="users.id" v-for="(users, index) in this.userlist" >
        <div class="row data-column">
            <h2 class="col-sm-8 ">{{users.id}}&nbsp;{{users.user}}</h2>
            <button class="btn btn-danger col-sm-2" type = "button" @click ="DeleteUser(index)">DELETE</button>
        </div>
        
        
    </div>
</div>
</template>
<script>
import store from '../store'
import router from '../router/index'
export default{
    name: "CrudPage",
    data(){
        return{
        userlist:store.state.userlist,
        username:"",
        password:""
        }
    },
    methods:{
        DeleteUser:function(id){
            this.userlist.splice(id, 1)
            store.commit('deleteUser', id)
        },
        AddNew: function(){
            router.push("/addnew")
        },
        LogOut: function(){
            router.push('/')
        }
    }
}
</script>
<style scoped>
.data-column{
    padding-top: 10px;
    padding-bottom: 10px;
    margin-left: 10px;
}
.crud-heading{
    width: 100%;
    background-color: #26a0c5;
    height: 50px;
    font-weight: 600;
    padding-left: 30px;
    color: white;
}
.new-button{
    width: 5%;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 10px
}
</style>
