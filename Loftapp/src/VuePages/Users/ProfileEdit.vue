<script setup lang="ts">
   import { useRoute, useRouter } from 'vue-router'
   import { ref } from 'vue'
   import { Users } from '../../Types/Database';

    const route = useRoute()
    const router = useRouter()

    const inputField = ref({
        Name: Users.FullName,
        Email: Users.Email,
        ContactNo: Users.ContactNo,
        ICNO: Users.ICNO,
        Address: Users.HomeAddress,
        Username: Users.Username
    })

    console.log(inputField.value)

    const isActive = (path) => path = route.fullPath
</script>

<template>
    <CRMLayout>
        <ion-grid>
            <ion-row>
                <ion-col size=2>
                    <ion-item class="ion-text-center" lines="none">
                        <ion-label>Full Name</ion-label>
                    </ion-item>
                </ion-col>
                <ion-col size="10">
                    <ion-input fill="outline"></ion-input>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col size=2>
                    <ion-item class="ion-text-center" lines="none">
                        <ion-label>Contact No</ion-label>
                    </ion-item>
                </ion-col>
                <ion-col size="10">
                    <ion-input fill="outline"></ion-input>
                </ion-col>
            </ion-row>
            <ion-row></ion-row>
        </ion-grid>
    </CRMLayout>
</template>