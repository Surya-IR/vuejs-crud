<template>
    <div>
        <h2 class = "login-header">WELCOME TO CRUD SYSTEM</h2>
        <p v-bind:style="{display:alertdisplay}" class = "alert-notif">username/password yang anda masukkan tidak sesuai!</p>
        <form class = "form-group form-format">
        <label>Username</label><input class = "form-control" type="text" v-model="username">
        <label>Password</label><input class = "form-control" type="password" v-model="password">
        <button type="button" class = "btn btn-success btn-format" @click="Login">LOGIN</button>

        
        </form>
    </div>
</template>
<script>
import router from '../router'
import store from '../store'
import 'bootstrap-vue'
export default {
    name: "Formlogin",
    props: ["msg"],
    data(){
        return{
            username:"",
            password:"",
            userlist: store.state.userlist,
            alertdisplay: "none"
        }
    },
    mounted(){
        this.username = ""
        this.password = ""
    },
    methods:{
        Login: function(){
            for(let i = 0; i <= this.userlist.length-1; i++){
                if(this.username === this.userlist[i].user && this.password === this.userlist[i].pass){
                    router.push('/CRUD')
                }else{
                    this.alertdisplay = "inline"
                }
            }
        }
    }
    
}
</script>
<style scoped>
.login-header{
    width: 100%;
    background-color: #26a0c5;
    height: 50px;
    font-weight: 600;
    padding-left: 30px;
    color: white
}
.form-format{
    width: 70%;
    padding-left: 30%;
    margin-top: 5%
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