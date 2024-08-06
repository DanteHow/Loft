<script lang="ts" setup>
    import { useRouter } from 'vue-router'
    import { onMounted, ref } from 'vue'
    

    const router = useRouter()
    const divOne = ref(null)
    const divTwo = ref(null)
    const divThree = ref(null)
    const divFour = ref(null)
    const EmitResult = ref(null)

    let ScrollEvent = (place) => {}
    
    let scrollToHere = (el) => {}

    let elements: any = []
    let tur = true ? "Shawn" : "Liu";
    let functionoutput = ( ) => {

    }
    onMounted(()=> {
        elements = [ 
            { Name: 'Demo', comp: divOne },
            { Name: 'Features', comp: divTwo },
            { Name: 'Why Us', comp: divThree },
            { Name: 'Contact Us', comp: divFour },
        ]

        scrollToHere = (el) => {
            if (el.value) {
                const top = el.value.scrollIntoView({})
                window.scrollTo(0, top)
            }
        }
    })

    ScrollEvent = (place) => {
        for (let i = 0; i < elements.length; i ++) {
            if (elements[i]["Name"] == place) {
                scrollToHere(elements[i]["comp"])
            }
        }
    }


</script>

<template>
    <ion-page class="grid grid-rows-3">
        <!-- Header::Begin -->
        <HeroHeader 
        @DivClicked="ScrollEvent"
        :isUserLogin = false
        />
        <!-- Header::End -->
        <!-- BodyContent::Begin -->
        <ion-content>
            <div class="grid grid-rows-5">
                <!-- FirstDiv::Begin -->
                <div ref="divOne" class="flex flex-row justify-center pt-10" id="FirstDiv">
                    <div class="px-10 max-w-100">
                        <div>
                            <h1>Automate property rental business with <u><strong>Loft.</strong></u></h1>
                            <p class="pt-5">Use Loft. to automate tenant management, maintenance request, and property management workflows</p>
                        </div>
                        <div class="pt-5" id="get_started">
                            <ion-button @click="router.push('/Login')" shape="round"><strong>Get Started</strong></ion-button>
                        </div>
                    </div>
                    <div class="px-[100px]">
                        <img src="../../ImageIcon/Div1.jpg" alt="First Div Photo">
                    </div>
                </div>
                <!-- FirstDiv::End -->
                <!-- SecondDiv::Begin -->
                <div ref="divTwo" class="flex flex-row justify-center" id="SecondDiv">
                    <!-- Card::Begin-->
                    <div class="px-[100px]">
                        <img src="../../ImageIcon/Div1.jpg" alt="First Div Photo">
                    </div>
                    <!-- Card::End-->
                    <div class="max-w-100">
                        <h1><strong>Property management made easy</strong></h1>
                        <p>Check out the demo to see how Loft. app can help you manage your properties and tenants</p>
                    </div>
                </div>
                <!-- SecondDiv::End -->
                <!-- ThirdDiv::Begin -->
                <div ref="divThree" id="ThirdDiv">
                    <!-- Header::Begin-->
                    <div class="grid justify-center">
                        <h1><strong>Feautures</strong></h1>
                    </div>
                    <!-- Header::End-->
                    <!-- Card::Begin-->
                    <div class="flex flex-row justify-center">
                        <!-- Card1::Begin-->
                        <div id="lightgreen">
                            <ion-card>
                                <ion-card-content>
                                    <h1><strong>Tenant management</strong></h1>
                                    <p>Organise tenants' profiles and make the move-in, move-out, and renewal processes easy</p>
                                </ion-card-content>
                            </ion-card>
                        </div>
                        <!-- Card1::End-->
                        <!-- Card2::Begin-->
                        <div id="darkgreen">
                            <ion-card>
                                <ion-card-content>
                                    <h1><strong>Property & Room Management</strong></h1>
                                    <p>Easy monitoring and tracking of properties and room rental performance</p>
                                </ion-card-content>
                            </ion-card>
                        </div>
                        <!-- Card2::End-->
                        <!-- Card3::Begin-->
                        <div id="lightgreen">
                            <ion-card>
                                <ion-card-content>
                                    <h1><strong>Maintenance Request Workflow</strong></h1>
                                    <p>Digitalise and automate a systematic way to do property maintenance</p>
                                </ion-card-content>
                            </ion-card>
                        </div>
                        <!-- Card3::End-->
                    </div>    
                    <div class="flex flex-row justify-center">
                        <!-- Card4::Begin-->
                        <div id="darkgreen">
                            <ion-card>
                                <ion-card-content>
                                    <h1><strong>IoT Smart Device Integration</strong></h1>
                                    <p>Easy integration with <strong>almost all</strong> smart locks, smart meters in the market.</p>
                                </ion-card-content>
                            </ion-card>
                        </div>
                        <!-- Card4::End-->
                        <!-- Card5::Begin-->
                        <div id="lightgreen">
                            <ion-card>
                                <ion-card-content>
                                    <h1><strong>Rental Payment Reminder</strong></h1>
                                    <p>Notifying users to pay their bills on time helps you avoid late payments.</p>
                                </ion-card-content>
                            </ion-card>
                        </div>
                        <!-- Card5::End-->
                        <!-- Card6::Begin-->
                        <div id="darkgreen">
                            <ion-card>
                                <ion-card-content>
                                    <h1><strong>Electric Usage Control</strong></h1>
                                    <p>Monitor and control tenants' utilities usage. Customise charging rate and payment mode</p>
                                </ion-card-content>
                            </ion-card>
                        </div>
                        <!-- Card6::End-->
                    </div>
                </div>
                    <!-- Card::End-->
                <!-- ThirdDiv::End -->
                <!-- FourthDiv::Begin -->
                <div ref="divFour" class="pt-[100px]" id="FourthDiv">
                    <!-- CardHeader::Begin -->
                    <div class="grid justify-center ">
                        <h1><strong>What makes <u>Loft.</u> app unique?</strong></h1>
                    </div>
                    <!-- CardHeader::End -->
                    <!-- Card::Begin -->
                    <div class="flex flex-row justify-center">
                        <!-- Card1::Begin -->
                        <div id="lightgreen">
                            <ion-card>
                                <ion-card-content>
                                    <div class="grid grid-rows-3">
                                        <div>
                                            <h1><strong>Migration make easy</strong></h1>
                                        </div>
                                        <div>
                                            Loft. app able to integrate most of the smart lock and smart meter in the market.
                                        </div>
                                        <div>
                                            This makes the migration from traditional property rental business to IoT-driven property rental business easily
                                        </div> 
                                    </div>
                                </ion-card-content>
                            </ion-card>
                        </div>
                        <!-- Card1::End -->
                        <!-- Card2::Begin -->
                        <div id="darkgreen">
                            <ion-card>
                                <ion-card-content>
                                    <div class="grid grid-rows-3">
                                        <div>
                                            <h1><strong>Digitalise and automate management workflow</strong></h1>
                                        </div>
                                        <div>
                                            Loft. app streamline managements workflow from tenant check-in to check-out
                                        </div>
                                        <div>
                                            Loft. app also provides a maintenance request workflow to systemise the entire property maintenance processs
                                        </div> 
                                    </div>
                                </ion-card-content>
                            </ion-card>
                        </div>
                        <!-- Card2::End -->
                        <!-- Card3::Begin -->
                        <div id="lightgreen">
                            <ion-card>
                                <ion-card-content>
                                    <div class="grid grid-rows-3">
                                        <div>
                                            <h1><strong>Property CRM system</strong></h1>
                                        </div>
                                        <div>
                                            Loft. app helps you build your CRM system for better customer management and enhanced sales performance.
                                        </div>
                                        <div></div> 
                                    </div>
                                </ion-card-content>
                            </ion-card>
                        </div>
                        <!-- Card3::End-->
                    </div>
                    <!-- Card::End -->
                </div>
                <!-- FourthDiv::End -->
                <!-- FifthDiv::Begin -->
                <div ref="divFive" class="flex flex-row justify-center px-[100px]" id="FifthDiv">
                    <!-- Image::Begin -->
                    <div class="pr-20">
                        <img src="../../ImageIcon/Div5.jpg" alt="">
                    </div>
                    <!-- Image::End -->
                    <!-- Content::Begin -->
                    <div>
                        <div>
                            <h1><strong>Become one of the <u>Loft.</u> app user</strong></h1>
                        </div>
                        <div id="get_started">
                            <ion-button @click="router.push('/Login')" shape="round"><strong>Get Started</strong></ion-button>
                        </div>
                    </div>
                    <!-- Content::End -->
                </div>
                <!-- FifthDiv::Begin -->
            </div>
            <!-- Footer::Begin -->
            <ion-footer>
                <ion-toolbar>
                    <div class="grid grid-cols-7 pb-10" style="background-color: #f7f7f7">
                        <!-- Loft.Describe::Begin -->
                        <div class="col-span-2 flex flex-col px-10">
                            <img 
                            src="../../ImageIcon/LoftLogo.jpg" 
                            alt="Loft. Logo"
                            style="height:100px; width:100px;">
                            <p class="max-w-100 pt-5">
                                Loft. app provides one-stop property management solution for house owner, property management company, airbnb operator and property business entrepreneur to monitor and manage their properties. 
                            </p>
                        </div>
                        <!-- Loft.Describe::End -->
                        <!-- Contact Us::Begin -->
                        <div class="col-span-2 flex flex-col px-10 max-w-100">
                            <!-- ContactTitle::Begin-->
                            <h3><strong>Contact Us</strong></h3>
                            <!-- Div1::Begin-->
                            <div>
                                <ion-buttons slot="start">
                                    <ion-button>WhatsApp Us</ion-button>
                                    <ion-button>Call Us</ion-button>
                                </ion-buttons>
                            </div>
                            <!-- Div2::Begin-->
                            <div>
                                <div>
                                    <ion-icon></ion-icon>
                                    <h4><strong>Email</strong></h4>
                                </div>
                                <p>thelofthomesmanagement@gmail.com</p>
                            </div>
                            <!-- Div3::Begin-->
                            <div>
                                <div>
                                    <ion-icon></ion-icon>
                                    <h4><strong>Phone</strong></h4>
                                </div>
                                <p>+60-17 6835363</p>
                            </div>
                        </div>
                        <!-- Contact Us::End -->
                        <!-- Navigation::Begin -->
                        <div class="col-span-3 px-10">
                            <div>
                                <h3><strong>Navigation</strong></h3>
                            </div>
                            <div class="flex flex-col grid grid-rows-4">
                                <a v-for="items in elements" @click="scrollToHere(items.comp)" class="py-2" style="color: black;"> {{ items.Name }} </a>
                            </div>
                        </div>
                        <!-- Navigation::End -->    
                    </div>
                </ion-toolbar>
            </ion-footer>
            <!-- Footer::Begin -->
        </ion-content>
        <!-- BodyContent::End -->
    </ion-page>
</template>

<style scoped>
    u {
        color: #305252;
    }

    div#darkgreen > ion-card {
        background-color: #305252;
        color: #ffffff;
        border-radius: 10px;
        height: 300px;
        width: 300px;
    }

    div#lightgreen > ion-card {
        background-color: #B7D5D4;
        color: #000000;
        border-radius: 10px;
        height: 300px;
        width: 300px;
    }

    div#get_started > ion-button {
        --background: #B7D5D4;
        --color: #305252;
    }
</style>
