<template>
    <div>
        <h2 class="addnew-header">NEW ENTRY</h2>
        <p v-bind:style ="{display: alertdisplay}" class = "alert-notif">username dan password harus diisi!</p>
        <form class= "form-group form-format">
        <label>Username</label><input class = "form-control" type="email" v-model="username">
        <label>Password</label><input class = "form-control" type="password" v-model="password">
        <button class="btn btn-info btn-format" type = "button" @click ="AddNewUser">ADD</button>
        <button class="btn btn-danger btn-format" type = "button" @click ="CancelEntry">CANCEL</button>
        </form>
    </div>
</template>
<script>
import store from '../store'
import router from '../router'
import 'bootstrap'
import 'bootstrap-vue'
export default {
    name: "AddNew",
    data(){
        return{
            username:"",
            password:"",
            alertdisplay:"none"
        }
    },
    methods:{
        AddNewUser: function(){
            if(this.username == "" && this.password == ""){
                this.alertdisplay = "inline"
            }else{
            store.commit('createUser',{"id": store.state.userlist.length != 0?store.state.userlist[store.state.userlist.length-1].id+1:1, "user": this.username, "pass":this.password})
            console.log(store.state.userlist)
            router.push('/CRUD')
            }
        },
        CancelEntry: function(){
            router.push('/CRUD')
        }
    }
}
</script>
<style scoped>
.addnew-header{
    width: 100%;
    background-color: #26a0c5;
    height: 50px;
    font-weight: 600;
    padding-left: 30px;
}
.form-format{
    width: 70%;
    padding-left: 30%;
}
.btn-format{
    margin-top: 20px;
    margin-right: 20px
}
.alert-notif{
    display:none;
    color: red;
    padding-left: 30%;
}
</style>