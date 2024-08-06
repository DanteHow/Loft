<script setup lang="ts">
    import { useRouter } from 'vue-router'
    import { ref, onMounted } from 'vue'
    import { User, UserType, Device, Property } from '../Types/Index'
    
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
        DeviceChargeRate:0.5,
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
            <ion-split-pane when="xs" content-id="sidemenu" >
                <ion-menu content-id="sidemenu">
                <!-- Sidebar::Begin -->
                    <Sidebar 
                        :isLogin = true
                        :ID = UserData.userType      
                    />
                    <!-- ID can put Manager, Owner, Audit, or Tenant -->
                <!-- Sidebar::End-->
                </ion-menu>
                <!-- Content::Begin -->
                <ion-content id="sidemenu">
                    <div class="px-5">
                        <!-- FirstRow::Begin -->
                        <div>
                            <div class="flex items-center">
                                <svg @click="router.go(-1)" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"></path></svg>
                                <h2 class="pl-2">Edit Tenant</h2>
                            </div>
                        </div>
                        <!-- FirstRow::End-->
                        <!-- Details::Begin -->
                        <div>
                            <!-- DeviceName::Begin -->
                            <div class="grid grid-cols-3">
                                <div class="flex items-center">
                                    <ion-text>DeviceName Name</ion-text>
                                </div>
                                <div class="col-span-2">
                                    <ion-input
                                        label-placement="stacked"
                                        :clear-on-edit="true"
                                        placeholder="Insert Your Device Name"
                                    >
                                    </ion-input>
                                </div>
                                <div></div>
                            </div>
                            <!-- DeviceName::End -->
                            <!-- LinkedRoom::Begin -->
                            <div class="grid grid-cols-3">
                                <div class="flex items-center">
                                    Linked Room
                                </div>
                                <div class="col-span-2">
                                    <ion-input
                                        label-placement="stacked"
                                        :clear-on-edit="true"
                                        placeholder="Insert your Room Number"
                                    >
                                    </ion-input>
                                </div>
                                <div></div>
                            </div>
                            <!-- LinkedRoom::End -->
                            <!-- Unit::Begin -->
                            <div class="grid grid-cols-3">
                                <div class="flex items-center">
                                    Unit
                                </div>
                                <div class="col-span-2">
                                    <ion-input
                                        label-placement="stacked"
                                        :clear-on-edit="true"
                                        placeholder="Insert your Unit No."
                                    >
                                    </ion-input>
                                </div>
                                <div></div>
                            </div>
                            <!-- Unit::End -->
                            <!-- ChargingRate::Begin -->
                            <div class="grid grid-cols-3">
                                <div class="flex items-center">
                                    Charging Rate (RM/kWh)
                                </div>
                                <div class="col-span-2">
                                    <ion-input
                                        label-placement="stacked"
                                        :clear-on-edit="true"
                                        placeholder="Insert your Charging Rate"
                                    >
                                    </ion-input>
                                </div>
                                <div></div>
                            </div>
                            <!-- ChargingRate::End -->
                        </div>
                        <!-- Details::End -->
                        <!-- Buttons::Begin -->
                        <div class="flex flex-row-reverse px-5">
                            <!-- EditTenant::Begin -->
                            <div class="p-2">
                                <ion-buttons class="rounded-2xl bg-[#305252] text-white">
                                    <ion-button>
                                        <ion-label>Edit Details</ion-label>
                                    </ion-button>
                                </ion-buttons>
                            </div>
                            <!-- EditTenant::End -->
                            <!-- Cancel::Begin -->
                            <div class="p-2">
                                <ion-buttons @click="router.go(-1)">
                                    <ion-button shape="round" fill="outline">
                                        <ion-label>Cancel</ion-label>
                                    </ion-button>
                                </ion-buttons>
                            </div>
                            <!-- Cancel::End -->
                        </div>
                        <!-- Buttons::End -->
                    </div>
                </ion-content>
                <!-- Content::End -->
            </ion-split-pane>
        </ion-content>
    </ion-page>
</template>