<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { User, UserType, Property } from '../../Types/Index'
import { Header, Item } from 'vue3-easy-data-table'

// Variable below extract from Database
var UserData = ref<User>({
    fullName: "Dante How Yao Kang",
    homeAdress: "18, Jalan Teratai 2/2, Taman Bukit Teratai 68000 Ampang, Selangor",
    email: "shawnlhs@gmail.com",
    contactNo: "193219911",
    countryCode: "+60",
    icNo: 1234454342,
    userType: UserType.admin
})

var RoomDetail = ref<Property> ({
    PropertyName: "Ayama",
    UnitNumber: 1,
    RoomStatus: "Occupied",
    RoomNumber: "R1"
})

//----------- Data Table -----------

const headers: Header[] = [
    { text: "ID", value: "id" },
    { text: "Full Name", value: "name" },
    { text: "Contact No", value: "contno" },
    { text: "Email", value: "email" },
    { text: "Status", value: "status" },
    { text: "Room Occupied", value: "roomno" }
]

const items: Item[] = [
    { id:"1", name: UserData.value.fullName, contno: "+60"+UserData.value.contactNo, email: UserData.value.email, status: RoomDetail.value.RoomStatus, roomno: RoomDetail.value.RoomNumber },
    { id:"1", name: UserData.value.fullName, contno: "+60"+UserData.value.contactNo, email: UserData.value.email, status: RoomDetail.value.RoomStatus, roomno: RoomDetail.value.RoomNumber },
    { id:"1", name: UserData.value.fullName, contno: "+60"+UserData.value.contactNo, email: UserData.value.email, status: RoomDetail.value.RoomStatus, roomno: RoomDetail.value.RoomNumber },
    { id:"1", name: UserData.value.fullName, contno: "+60"+UserData.value.contactNo, email: UserData.value.email, status: RoomDetail.value.RoomStatus, roomno: RoomDetail.value.RoomNumber },
    { id:"1", name: UserData.value.fullName, contno: "+60"+UserData.value.contactNo, email: UserData.value.email, status: RoomDetail.value.RoomStatus, roomno: RoomDetail.value.RoomNumber },
]

//----------------------------------

const router = useRouter()

</script>

<template>
    <ion-page>
        <!-- Header::Begin -->
        <HeroHeader
            :isUserLogin=true
        />
        <!-- Header::End -->
        <!-- SplitPane::Begin -->
        <ion-content>
            <ion-split-pane when="xs" content-id="sidemenu">
                <ion-menu content-id="sidemenu">
                    <!-- Sidebar::Begin -->
                    <Sidebar
                        :isLogin=true
                        :ID = UserData.userType
                    />
                    <!-- Sidebar::Begin -->
                </ion-menu>
                <!-- Content::Begin -->
                <ion-content id="sidemenu">
                    <div class="px-5">
                        <div class="py-5">
                            <ion-label><h1><strong>Tenants</strong></h1></ion-label>
                        </div>
                        <div class="grid grid-cols-3 pb-5">
                            <div>
                                <ion-input
                                    :clear-on-edit="true"
                                    placeholder="Search"
                                    fill="outline"
                                >
                                </ion-input>
                            </div>
                            <div class="col-span-2 flex justify-end">
                                <ion-buttons>
                                    <ion-button 
                                        shape="round" 
                                        fill="solid" 
                                        style="--background: #305252"
                                        type="button"
                                        strong="true"
                                        @click="router.push('/Tenant/Register')"
                                        >
                                        <ion-label class="px-2">Register Tenant</ion-label>
                                    </ion-button>
                                </ion-buttons>
                            </div>
                        </div>
                        <div>
                            <EasyDataTable
                                :headers="headers"
                                :items="items"
                            />
                        </div>
                    </div>
                </ion-content>
                <!-- Content::End -->

            </ion-split-pane>
        </ion-content>
        <!-- SplitPane::End -->

    </ion-page>
</template>