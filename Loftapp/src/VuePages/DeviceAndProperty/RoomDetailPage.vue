<script setup lang="ts">
    import { useRouter } from 'vue-router'
    import { ref, onMounted } from 'vue'
    import { User, UserType } from '../Types/Index'
    
    // Variable below extract from Database
    var UserData = ref<User>({
        fullName: "Dante How Yao Kang",
        homeAdress: "18, Jalan Teratai 2/2, Taman Bukit Teratai 68000 Ampang, Selangor",
        email: "shawnlhs@gmail.com",
        contactNo: "193219911",
        countryCode: "+60",
        icNo: 1234454342,
        userType: UserType.owner
    })
    const userTypes = UserType;

    const router = useRouter()
</script>

<template>
    <ion-page>
        <!-- Header::Begin -->
        <HeroHeader 
        :isUserLogin = true
        />
        <!-- Header::End -->
        
    </ion-page>
</template>