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
                    <!-- TenantDetails::Begin -->
                    <div class="px-10">
                        <!-- FirstRow::Begin -->
                        <div class="grid grid-cols-2 py-5">
                            <div class="flex items-center">
                                <svg @click="router.go(-1)" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"></path></svg>
                                <h2 class="pl-2">Tenant Details: {{ UserData.fullName }}</h2>
                            </div>
                            <div class="flex flex-row justify-end items-center">
                                <div class="px-2">
                                    <ion-buttons  class="rounded-full bg-gray-300">
                                        <ion-button>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M27 8c0 1.657-4.925 3-11 3S5 9.657 5 8m22 0c0-1.657-4.925-3-11-3S5 6.343 5 8m22 0l-3 18s-1 2-8 2s-8-2-8-2L5 8m13.5 8.5l-5 5m0-5l5 5"/></svg>
                                            <ion-label>Delete</ion-label>
                                        </ion-button>
                                    </ion-buttons>
                                </div>
                                <div class="px-2">
                                    <ion-buttons class="rounded-full border border-black"  @click="router.push('/TenantDetail/Edit')">
                                        <ion-button>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M27 5L17 15m0-10H8a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-9"/></svg>
                                            <ion-label>Edit</ion-label>
                                        </ion-button>
                                    </ion-buttons>
                                </div>
                            </div>
                        </div>
                        <!-- FirstRow::End -->
                        <!-- SecondRow::Begin -->
                        <div id="TenantDetail">
                            <div class="grid grid-cols-2 pt-2">
                                <div class="grid gird-rows-3">
                                    <div class="p-2">
                                        <p>Full Name</p>
                                        <ion-label class="text-gray-500">{{ UserData.fullName }}</ion-label>
                                    </div>
                                    <div class="p-2">
                                        <p>Email</p>
                                        <ion-label class="text-cyan-500">{{ UserData.email }}</ion-label>
                                    </div>
                                    <div class="flex flex-auto grid grid-cols-3">
                                        <div class="p-2">
                                            <p>Contact No</p>
                                            <ion-label class="text-gray-500">{{ UserData.contactNo }}</ion-label>
                                        </div>
                                        <div class="p-2">
                                            <p>IC No</p>
                                            <ion-label class="text-gray-500">{{ UserData.icNo }}</ion-label>
                                        </div>
                                        <div class="p-2">
                                            <p>Status</p>
                                            <ion-label class="text-gray-500">{{ RoomDetail.RoomStatus }}</ion-label>
                                        </div>
                                    </div>
                                </div>
                                <div class="place-self-center relative w-36 h-36 bg-purple-50 rounded-full flex justify-center items-center text-center p-5 shadow-xl">
                                    <p>This is the image area</p>
                                </div>
                            </div>
                            <div class="px-2 py-2 grid grid-cols-2">
                                <div>
                                    <p>Address</p>
                                    <ion-label class="text-gray-500">{{ UserData.homeAdress }}</ion-label>
                                </div>
                                <div></div>
                            </div>
                        </div>
                        <!-- SecondRow::End -->
                    </div>
                    <!-- TenantDetails::End -->
                    <!-- RoomDetails::Begin -->
                    <div id="RoomDetail" class="px-10">
                        <div>
                            <h2>Room Details</h2>
                        </div>
                        <div id="TenantDetail" class="px-2">
                            <div class="flex flex-auto grid grid-cols-5 justify-tems-start py-2">
                                <div class="py-2 px-4">
                                    <p>Property Name</p>
                                    <ion-label class="text-cyan-500">Ayama Maluri</ion-label>
                                </div>
                            </div>
                            <div class="flex flex-auto grid grid-cols-5 justify-items-start py-2">
                                <div>
                                    <p>Unit No</p>
                                    <ion-label class="text-cyan-500">1B-23</ion-label>
                                </div>
                                <div>
                                    <p>Room Name</p>
                                    <ion-label class="text-gray-500">R1</ion-label>
                                </div>
                                <div>
                                    <p>Room Type</p>
                                    <ion-label class="text-gray-500">Master Room</ion-label>
                                </div>
                                <div>
                                    <p>Check In Date</p>
                                    <ion-label class="text-gray-500">1 Jan 2023</ion-label>
                                </div>
                                <div>
                                    <p>End Date</p>
                                    <ion-label class="text-gray-500">31 Dec 2023</ion-label>
                                </div>
                            </div>
                            <div class="flex flex-auto grid grid-cols-5 justify-items-start py-2">
                                <div>
                                    <p>Rental Fee</p>
                                    <ion-label class="text-gray-500">RM 1000.00</ion-label>
                                </div>
                                <div>
                                    <p>Rental Deposit</p>
                                    <ion-label class="text-gray-500">RM 1500.00</ion-label>
                                </div>
                                <div>
                                    <p>Utility Deposit</p>
                                    <ion-label class="text-gray-500">RM 1000.00</ion-label>
                                </div>
                                <div>
                                    <p>Linked Air-Con</p>
                                    <ion-label class="text-cyan-500">AMY-R1</ion-label>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <!-- RoomDetails::End -->
                </ion-content>
                <!-- Content::End -->
            </ion-split-pane>
        </ion-content>
        <!-- SplitPane::End -->
    </ion-page>
</template>

<style lang="scss">
    #TenantDetail {
        background-color: #B7D5D4;
        border-radius: 5px;
    }

    div#TenantDetail > div > div {
        padding-left: 30px;
        padding-right: 30px;
    }
</style>