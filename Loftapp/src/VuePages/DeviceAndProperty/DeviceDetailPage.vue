<script setup lang="ts">
    import { useRouter } from 'vue-router'
    import { ref, onMounted } from 'vue'
    import { User, UserType, Device, Property } from '../../Types/Index'
    
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

    var IoTDevice = ref<Device>({
        DeviceName: "Philips",
        DeviceID: 1234,
        DeviceBalance: 1000,
        DeviceChargeRate: 0.50,
        Status: true
    })

    var RoomDetail = ref<Property> ({
        PropertyName: "Ayama",
        UnitNumber: 1,
        RoomStatus: "Occupied",
        RoomNumber: "R1"
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
        <!-- SplitPane::Begin -->
        <ion-content>
            <ion-split-pane when="xs" content-id="sidemenu">
                <ion-menu content-id="sidemenu">
                    <!-- Sidebar::Begin -->
                    <Sidebar 
                        :isLogin = true
                        :ID = UserData.userType                
                    />
                    <!-- Sidebar::End -->
                </ion-menu>
                <!-- Content::Begin -->
                <ion-content id="sidemenu">
                    <div class="flex flex-col px-10">
                        <!-- FirstRow::Begin -->
                        <div class="grid grid-cols-2 py-5">
                            <div class="flex items-center">
                                <svg @click="router.go(-1)" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"></path></svg>
                                <h2 class="pl-2">Aircon Meter Details</h2>
                            </div>
                            <div class="flex flex-row justify-end items-center">
                                <div class="px-2">
                                    <ion-buttons class="bg-[#305252] text-white rounded-2xl">
                                        <ion-button>
                                            <ion-label>Link Unit</ion-label>
                                        </ion-button>
                                    </ion-buttons>
                                </div>
                                <div class="px-2">
                                    <ion-buttons class="bg-[#305252] text-white rounded-2xl">
                                        <ion-button>
                                            <ion-label>Top-Up</ion-label>
                                        </ion-button>
                                    </ion-buttons>
                                </div>
                            </div>
                        </div>
                        <!-- FirstRow::End -->
                        <!-- SecondRow::Begin -->
                        <div class="flex gap-20 rounded-2xl bg-[#B7D5D4] mb-5" id="Details">
                            <ion-grid>
                                <ion-row>
                                    <h1><strong>{{ IoTDevice.DeviceName }}</strong></h1>
                                </ion-row>
                                <ion-row>
                                    <ion-col>
                                        <h4>Property Name</h4>
                                        <ion-label class="text-gray-500">{{ RoomDetail.PropertyName }}</ion-label>
                                    </ion-col>
                                    <ion-col>
                                        <h4>Unit No.</h4>
                                        <ion-label class="text-gray-500">{{ RoomDetail.UnitNumber }}</ion-label>
                                    </ion-col>
                                    <ion-col>
                                        <h4>Linked Room</h4>
                                        <ion-label class="text-gray-500">{{ RoomDetail.RoomNumber }}</ion-label>
                                    </ion-col>
                                    <ion-col>
                                        <h4>Network Status</h4>
                                        <ion-toggle :checked="IoTDevice.Status"></ion-toggle>
                                    </ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col>
                                        <h4>Charging Rate (RM/kWh)</h4>
                                        <ion-label class="text-gray-500">{{ IoTDevice.DeviceChargeRate }}</ion-label>
                                    </ion-col>
                                    <ion-col>
                                        <h4>Usage</h4>
                                        <ion-label class="text-gray-500">13-A3-R1</ion-label>
                                    </ion-col>
                                    <ion-col>
                                        <h4>Balance (RM)</h4>
                                        <ion-label class="text-gray-500">{{ IoTDevice.DeviceBalance }}</ion-label>
                                    </ion-col>
                                    <ion-col></ion-col>
                                </ion-row>
                            </ion-grid>
                        </div>
                        <!-- SecondRow::End -->
                        <!-- ThridRow::Begin -->
                        <div class="rounded-2xl bg-[#B7D5D4] mt-5">
                            <ion-grid class="pl-3">
                                <ion-row>
                                    <ion-col>
                                        <h4><strong>Power</strong></h4>
                                        <n-progress type="circle" :percentage="80" :offset-degree="180"></n-progress>
                                    </ion-col>
                                    <ion-col>
                                        <h4><strong>Daily Usage</strong></h4>
                                        <n-progress type="circle" :percentage="80" :offset-degree="180"></n-progress>
                                    </ion-col>
                                    <ion-col>
                                        <h4><strong>Network</strong></h4>
                                        <n-progress type="circle" :percentage="80" :offset-degree="180"></n-progress>
                                    </ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col>
                                        <h4>Monthly Usage</h4>
                                        <n-progress type="circle" :percentage="80" :offset-degree="180"></n-progress>
                                    </ion-col>
                                    <ion-col>
                                        <ion-row><h4>Power Usage</h4></ion-row>
                                        <ion-row><ion-label class="text-gray-500">500kW</ion-label></ion-row>
                                        <ion-row><h4>Balance</h4></ion-row>
                                        <ion-row><ion-label class="text-gray-500">RM80</ion-label></ion-row>
                                    </ion-col>
                                    <ion-col></ion-col>
                                </ion-row>
                            </ion-grid>
                        </div>
                        <!-- ThridRow::End -->
                    </div>
                </ion-content>
                <!-- Content::End -->
            </ion-split-pane>
        </ion-content>
        <!-- SplitPane::End -->
    </ion-page>
</template>

<style lang="scss">
    div#Details > div {
        padding-top: 10px;
        padding-bottom: 10px;
    }
</style>