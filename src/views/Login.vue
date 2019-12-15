<template>
    <div class="home">
        <h1>我是登录页面</h1>
        <input type="text" v-model="username" placeholder="账号">
        <button @click="login">登录</button>
    </div>
</template>

<script>
    import Cookie from 'js-cookie'
    import http from "../api/axios";

    export default {
        name: 'home',
        data() {
            return {
                username: '',
                time: 10,
                token: ''
            }
        },
        methods: {
            login() {
                // http.login().then(res => {
                //     console.log(res)
                //     this.token = res.date.token;
                //     let expires = new Date(new Date() * 1 + this.time * 100000);
                //     Cookie.set('token', this.token, {
                //         expires: expires
                //     });
                //     this.$router.push('/home')
                // })


                // 派发一个登录action
                this.$store
                    .dispatch("user/login", { username: this.username })
                    .then(() => {
                        // 登录成功重定向
                        this.$router.push({
                            path: this.$route.query.redirect || "/"
                        });
                    })
                    .catch(error => {
                        alert(error)
                    });
            }
        },
        created() {
            if (Cookie.get('token', this.name)) {
                this.$router.push('/home')
            }
        },
        components: {}
    }
</script>
