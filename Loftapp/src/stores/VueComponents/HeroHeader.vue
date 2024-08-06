<script lang="ts" setup>
    import { useRouter } from 'vue-router'
    import { onMounted, ref } from 'vue'
    import { auth } from '../firebase/init'
    
    const props = defineProps({
        isUserLogin: Boolean,
    })
    const router = useRouter()
    const divOne = ref(null)
    const divTwo = ref(null)
    const divThree = ref(null)
    const divFour = ref(null)

    const divisionClickEmit = defineEmits(['DivClicked', 'division'])

    let scrollToDiv = (divPlace) => {}
    
    let block: any = []
    
    onMounted(()=> {
        block = [
            { LinkName: "Demo", divName: divOne },
            { LinkName: "Features", divName: divTwo },
            { LinkName: "Why Us", divName: divThree },
            { LinkName: "Contact Us", divName: divFour },
        ]

        scrollToDiv = (place) => {
            divisionClickEmit("DivClicked", place)
        }
    })

    const LogOut = async () => {
        auth.signOut()
        console.log(auth.currentUser)
        if (auth.currentUser == null) {
            console.log("Logout Successful")
        }
        router.push('/Login')
    }

    const GetStarted = () => {
        router.push('/Login')
    }

</script>

<template>
    <ion-header v-if="!props.isUserLogin">
        <div class="flex flex-col grid grid-cols-12 pl-10" style="background-color: #f7f7f7">
            <div class="max-w-30 col-span-1 flex items-center">
                <RouterLink to="/"><img src="../ImageIcon/LoftLogo.jpg" alt="Loft. Logo"></RouterLink>
            </div>
            <div class="col-span-1">
                <ion-menu-button></ion-menu-button>
            </div>
            <div class="col-span-4 flex flex-row">
                <div class="flex items-center">
                    <a v-for="items in block" @click="scrollToDiv(items.LinkName)" class="px-2" style="color: black;">{{ items.LinkName }}</a>
                </div>
            </div>
            <div class="col-span-6 grid justify-end flex items-center pr-10" id="get_started">
                <ion-button @click="GetStarted()" shape="round" fill="outline"><strong>Get Started</strong></ion-button>
            </div>
        </div>
    </ion-header>
    <ion-header v-else>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button></ion-menu-button>
            </ion-buttons>
            <img src="../ImageIcon/LoftLogo.jpg" alt="Loft. Logo" class="max-w-30">
            <CRMButtons
                    Types="fill-outline-button"
                    Content="Logout"
                    Position="end"
                    @click="LogOut()"
                />
        </ion-toolbar>
    </ion-header>
</template>

<style scoped>
    div#get_started > ion-button {
        --border-color: #305252;
        --color: #305252;
    }
</style>