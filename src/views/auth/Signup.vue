<template>
    <form action="#" @submit.prevent="handleSubmit">
        <h3>Sign up</h3>
        <input type="text" placeholder="Display name" v-model="displayName">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <div v-if="error" class="error">{{ error }}</div>
        <button v-if="!isPending">Log in</button>
        <button v-if="isPending" disabled>Loaindg...</button>
    </form>
</template>

<script>
import useSignup from '@/composables/useSignup'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const { error, signup, isPending } = useSignup();
        const router = useRouter();

        const email = ref('');
        const password = ref('');
        const displayName = ref('');

        const handleSubmit = async () => {
            await signup(email.value, password.value, displayName.value)

            if (!error.value) {
                router.push({ name: 'UserPlaylists' })
            }
        }

        return { email, password, displayName, isPending, error, handleSubmit };
    }
}
</script>

<style>

</style>