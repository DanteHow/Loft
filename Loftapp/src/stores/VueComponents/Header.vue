<script setup>
    import { useRouter } from 'vue-router'
    
    const router = useRouter()

    let Logout = () => {

    }

</script>

<template>
    <ion-header class="fixed top-0 left-0 right-0">
        <!-- Header::Begin -->
        <div class="grid grid-cols-12 px-10" style="background-color: #f7f7f7;">
            <!-- Logo::Begin -->
            <div class="max-w-30 col-span-1 flex items-center">
                <img 
                src="../ImageIcon/LoftLogo.jpg" 
                alt="Loft. Logo">
            </div>
            <!-- Logo::End -->
            <!-- Logout::Begin -->
            <div id="logout_button" class="col-span-11 grid justify-end flex items-center">
                <ion-buttons>
                    <ion-button @click="router.push({ path: '/Login' })" shape="round" fill="outline">
                        <strong>Logout</strong>
                    </ion-button>
                </ion-buttons>
            </div>
            <!-- Logout::End -->
        </div>
        <!-- Header::End -->
    </ion-header>
</template>

<style scoped>

    div#logout_button > ion-button {
        --border-color: #305252;
        --color: #305252;
    }

</style>