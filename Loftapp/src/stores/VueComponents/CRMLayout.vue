<script setup lang="ts">
    import { ref } from 'vue'
    import { User, UserType } from '../Types/Index'

    var UserData = ref<User>({
        fullName: "Dante How Yao Kang",
        homeAdress: "18, Jalan Teratai 2/2, Taman Bukit Teratai 68000 Ampang, Selangor",
        email: "shawnlhs@gmail.com",
        contactNo: "193219911",
        countryCode: "+60",
        icNo: 1234454342,
        userType: UserType.admin
    })
</script>

<template>
    <ion-page>
        <!-- Header::Begin -->
        <ion-content>
            <!-- SplitPane::Begin -->
            <ion-split-pane when="xl" content-id="sidemenu">
                <ion-menu content-id="sidemenu">
                    <ion-header class="py-[32px]">
                        <ion-toolbar>
                            <ion-title>Tool Bar</ion-title>
                        </ion-toolbar>
                    </ion-header>
                    <!-- Sidebar::Begin -->
                    <Sidebar
                        :isLogin="true"
                        :ID = UserData.userType
                    />
                    <!-- Sidebar::Begin -->
                </ion-menu>
                <!-- Content::Begin -->
                <ion-content id="sidemenu">
                    <HeroHeader 
                        :isUserLogin = true
                    />
                    <div class="pt-5 px-5">
                        <slot></slot>
                    </div>
                </ion-content>
                <!-- Content::End -->
            </ion-split-pane>
            <!-- SplitPane::Begin -->
        </ion-content>
    </ion-page>
</template>
