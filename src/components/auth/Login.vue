<template>
    <div id="Login">
        <input type="text" v-model="username"/>
        <br />
        <input type="password" v-model="password"/>
    </div>
</template>

<script>
// import { UserLogin } from  '@/classes/auth.js'
export default {
    data () {
        return {
            username: '',
            password: ''
        }
    }
}
</script>

<style>

</style>
