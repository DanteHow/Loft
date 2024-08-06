<script setup lang="ts">
import { useRouter } from 'vue-router'
import { UserType } from '../Types/Index'

const router = useRouter()
const AirconView = ['tenant', 'owner', 'admin']
const TenantView = ['owner', 'admin']
const TransactionView = ['admin', 'tenant']

const props = defineProps({
    isLogin:Boolean,
    ID:{
        type: Number,
        required: true
    },
})

let CheckLoginToken = () => {
    if (!props.isLogin) {
        alert("Session Time out, Please Log in again")
        router.push({ path: '/Login'})
    }
}

let availableFunctions = [
    {
        name: "Main",
        icon: "",
        link: "",
    }
]

const UserTypes = UserType

</script>

<template>
    <!-- SplitMenu::Begin -->
        <ion-content>
            <div class="flex flex-row">
                <div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="currentColor" d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z"/><path fill="currentColor" d="m490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97Z"/></svg></div>
                <ion-item><button><a @click="router.push('/MainPage')">Menu</a></button></ion-item>
            </div>
            <div class="flex flex-row">
                <div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M447.8 438.3c-7.2-31.8-48.3-47.3-62.5-52.3-15.6-5.5-37.8-6.8-52.1-10-8.2-1.8-20.1-6.3-24.1-11.1s-1.6-49.3-1.6-49.3 7.4-11.5 11.4-21.7c4-10.1 8.4-37.9 8.4-37.9s8.2 0 11.1-14.4c3.1-15.7 8-21.8 7.4-33.5-.6-11.5-6.9-11.2-6.9-11.2s6.1-16.7 6.8-51.3c.9-41.1-31.3-81.6-89.6-81.6-59.1 0-90.6 40.5-89.7 81.6.8 34.6 6.7 51.3 6.7 51.3s-6.3-.3-6.9 11.2c-.6 11.7 4.3 17.8 7.4 33.5 2.8 14.4 11.1 14.4 11.1 14.4s4.4 27.8 8.4 37.9c4 10.2 11.4 21.7 11.4 21.7s2.4 44.5-1.6 49.3c-4 4.8-15.9 9.3-24.1 11.1-14.3 3.2-36.5 4.5-52.1 10-14.2 5-55.3 20.5-62.5 52.3-1.1 5 2.7 9.7 7.9 9.7H440c5.1 0 8.9-4.7 7.8-9.7z" fill="currentColor"/></svg></div>
                <ion-item><button><a @click="router.push('/Profile')">Profile</a></button></ion-item>
            </div>
            <div v-for="item in TenantView">
                <div class="flex flex-row" v-if="UserTypes[ID] === item">
                    <div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="currentColor" d="M336 256c-20.56 0-40.44-9.18-56-25.84c-15.13-16.25-24.37-37.92-26-61c-1.74-24.62 5.77-47.26 21.14-63.76S312 80 336 80c23.83 0 45.38 9.06 60.7 25.52c15.47 16.62 23 39.22 21.26 63.63c-1.67 23.11-10.9 44.77-26 61C376.44 246.82 356.57 256 336 256Zm66-88Zm65.83 264H204.18a27.71 27.71 0 0 1-22-10.67a30.22 30.22 0 0 1-5.26-25.79c8.42-33.81 29.28-61.85 60.32-81.08C264.79 297.4 299.86 288 336 288c36.85 0 71 9 98.71 26.05c31.11 19.13 52 47.33 60.38 81.55a30.27 30.27 0 0 1-5.32 25.78A27.68 27.68 0 0 1 467.83 432ZM147 260c-35.19 0-66.13-32.72-69-72.93c-1.42-20.6 5-39.65 18-53.62c12.86-13.83 31-21.45 51-21.45s38 7.66 50.93 21.57c13.1 14.08 19.5 33.09 18 53.52c-2.87 40.2-33.8 72.91-68.93 72.91Zm65.66 31.45c-17.59-8.6-40.42-12.9-65.65-12.9c-29.46 0-58.07 7.68-80.57 21.62c-25.51 15.83-42.67 38.88-49.6 66.71a27.39 27.39 0 0 0 4.79 23.36A25.32 25.32 0 0 0 41.72 400h111a8 8 0 0 0 7.87-6.57c.11-.63.25-1.26.41-1.88c8.48-34.06 28.35-62.84 57.71-83.82a8 8 0 0 0-.63-13.39c-1.57-.92-3.37-1.89-5.42-2.89Z"/></svg></div>
                    <ion-item><button><a @click="router.push('/Tenant/List')">Tenants</a></button></ion-item>
                </div>
            </div>
            <div v-for="item in TenantView">
                <div class="flex flex-row" v-if="UserTypes[ID] === item">
                    <div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="currentColor" d="M336 256c-20.56 0-40.44-9.18-56-25.84c-15.13-16.25-24.37-37.92-26-61c-1.74-24.62 5.77-47.26 21.14-63.76S312 80 336 80c23.83 0 45.38 9.06 60.7 25.52c15.47 16.62 23 39.22 21.26 63.63c-1.67 23.11-10.9 44.77-26 61C376.44 246.82 356.57 256 336 256Zm66-88Zm65.83 264H204.18a27.71 27.71 0 0 1-22-10.67a30.22 30.22 0 0 1-5.26-25.79c8.42-33.81 29.28-61.85 60.32-81.08C264.79 297.4 299.86 288 336 288c36.85 0 71 9 98.71 26.05c31.11 19.13 52 47.33 60.38 81.55a30.27 30.27 0 0 1-5.32 25.78A27.68 27.68 0 0 1 467.83 432ZM147 260c-35.19 0-66.13-32.72-69-72.93c-1.42-20.6 5-39.65 18-53.62c12.86-13.83 31-21.45 51-21.45s38 7.66 50.93 21.57c13.1 14.08 19.5 33.09 18 53.52c-2.87 40.2-33.8 72.91-68.93 72.91Zm65.66 31.45c-17.59-8.6-40.42-12.9-65.65-12.9c-29.46 0-58.07 7.68-80.57 21.62c-25.51 15.83-42.67 38.88-49.6 66.71a27.39 27.39 0 0 0 4.79 23.36A25.32 25.32 0 0 0 41.72 400h111a8 8 0 0 0 7.87-6.57c.11-.63.25-1.26.41-1.88c8.48-34.06 28.35-62.84 57.71-83.82a8 8 0 0 0-.63-13.39c-1.57-.92-3.37-1.89-5.42-2.89Z"/></svg></div>
                    <ion-item><button><a @click="router.push('/Employee/List')">Employees</a></button></ion-item>
                </div>
            </div>

            <ion-accordion-group>
                <!-- FirstAccordian::Begin -->
                <ion-accordion value="first" v-if="UserTypes[ID] === 'admin'">
                    <ion-item slot="header">    
                        <div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 416v64M80 32h192a32 32 0 0 1 32 32v412a4 4 0 0 1-4 4H48h0V64a32 32 0 0 1 32-32Zm240 160h112a32 32 0 0 1 32 32v256h0h-160h0V208a16 16 0 0 1 16-16Z"/><path fill="currentColor" d="M98.08 431.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm80 240a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm80 320a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Z"/><ellipse cx="256" cy="176" fill="currentColor" rx="15.95" ry="16.03" transform="rotate(-45 255.99 175.996)"/><path fill="currentColor" d="M258.08 111.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79ZM400 400a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm-64 160a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16Z"/></svg></div>
                        <ion-label>Property</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">
                        <ul>
                            <li class="py-1"><button><a>Properties</a></button></li>
                            <li class="py-1"><button><a>Rooms</a></button></li>
                            <li class="py-1"><button><a>Owner</a></button></li>
                        </ul>
                    </div>
                </ion-accordion>
                <!-- FirstAccordian::End -->
                <!-- SecodAccordian::Begin -->
                <div v-for="item in TransactionView">
                    <ion-accordion value="second" v-if="UserTypes[ID] === item">
                        <ion-item slot="header">
                            <div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M466 355.9H46c-7.7 0-14 6.3-14 14s6.3 14 14 14h420c7.7 0 14-6.3 14-14s-6.3-14-14-14z" fill="currentColor"/><path d="M466 403.9H46c-7.7 0-14 6.3-14 14s6.3 14 14 14h420c7.7 0 14-6.3 14-14s-6.3-14-14-14z" fill="currentColor"/><path d="M444.9 80.1H67.1C47.8 80.1 32 95.9 32 115.2V293c0 19.3 15.8 35.1 35.1 35.1h377.8c19.3 0 35.1-15.8 35.1-35.1V115.2c0-19.3-15.8-35.1-35.1-35.1zM114 296.1H78c-7.7 0-14-6.3-14-14s6.3-14 14-14h36c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-156H78c-7.7 0-14-6.3-14-14s6.3-14 14-14h36c7.7 0 14 6.3 14 14s-6.3 14-14 14zm142 144c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80zm178 12h-36c-7.7 0-14-6.3-14-14s6.3-14 14-14h36c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-156h-36c-7.7 0-14-6.3-14-14s6.3-14 14-14h36c7.7 0 14 6.3 14 14s-6.3 14-14 14z" fill="currentColor"/><circle cx="256" cy="206" r="53" fill="currentColor"/></svg></div>
                            <ion-label>Transaction</ion-label>
                        </ion-item>
                        <div class="ion-padding" slot="content">
                            <ul>
                                <li class="py-1"><button><a>Rental Payments</a></button></li>
                                <li class="py-1"><button><a>Meter Payments</a></button></li>
                            </ul>
                        </div>
                    </ion-accordion>
                </div>
                
                <!-- SecondAccordian::End -->
                <!-- ThirdAccordian::Begin -->
                <ion-accordion value="Third">
                    <ion-item slot="header">
                        <div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M468.7 64H43.3c-6 0-11.3 5-11.3 11.1v265.7c0 6.2 5.2 11.1 11.3 11.1h425.4c6 0 11.3-5 11.3-11.1V75.1c0-6.1-5.2-11.1-11.3-11.1zM448 320H64V96h384v224z" fill="currentColor"/><path d="M302.5 448c28-.5 41.5-3.9 29-12.5-12.5-8.7-28.5-15.3-29-22.5-.3-3.7-1.7-45-1.7-45h-89.6s-1.5 41.3-1.7 45c-.5 7.1-16.5 13.8-29 22.5s1 12 29 12.5h93z" fill="currentColor"/></svg></div>
                        <ion-label>CRM</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">
                        <ul>
                            <li class="py-1"><button><a @click="router.push('/MainPage/Maintenance-Request')">Maintenance Request</a></button></li>
                        </ul>
                    </div>
                </ion-accordion>
                <!-- ThridAccordian::End -->
            </ion-accordion-group>
        </ion-content>
    <!-- SplitMenu::End -->
</template>

<style lang="scss" scoped>
ion-item{
    --inner-border-width: 0px;
}

.item-lines-full{
    --border-width: 0px;
}

ion-icon{
    size: 25px;
}

a {
    color: black;
}
</style>
