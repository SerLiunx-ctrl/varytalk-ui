<template>
    <div>
        <h2>VaryTalk</h2>
        <form @submit.prevent="login">
            <label for="username">Username:</label>
            <input type="text" v-model="username" required />
            <br />
            <label for="password">Password:</label>
            <input type="password" v-model="password" required />
            <br />
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>

export default {
    name: 'PageIndex',
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        login() {
            // 在这里使用 Axios 发送登录请求
            console.log('Login Request:', this.username, this.password);
            // 你可以在这里使用 Axios 发送登录请求
        },
    },
};
</script>
