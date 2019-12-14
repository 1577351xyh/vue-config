<template>
    <div class="home">
        <h1>我是登录页面</h1>
        <input type="text" v-model="name">
        <button @click="login">登录</button>
    </div>
</template>

<script>
import Cookie from 'js-cookie'
    export default {
        name: 'home',
        data(){
            return{
                  name:'',
                  time:10
            }
        },
        methods:{
            login(){
                let expires = new Date(new Date() * 1 + this.time * 1000);
                Cookie.set('token',this.name, {
                    expires: expires
                });
                this.$router.push('/home')
            }
        },
        created(){
            if(Cookie.get('token',this.name)){
              this.$router.push('/home')
          }
        },
        components: {
        }
    }
</script>
