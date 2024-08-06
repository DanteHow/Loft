<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { User, Property } from '../../Types/Index'
import { Users, UserType } from '../../Types/Database'

const UserData = ({
    Name: Users.FullName,
    Email: Users.Email,
    ContactNo: Users.ContactNo,
    CountryCode: Users.CountryCode,
    ICNO: Users.ICNO,
    HomeAddress: Users.HomeAddress,
    image: Users.HomeAddress,
    userType: Users.userType
})

const RoomDetail = ref<Property>({
    PropertyName: "Amaya Maluri",
    UnitNumber: "18-23",
    RoomStatus: "Occupied",
    RoomNumber: "R1"
})

const UserTypes = UserType
const Title = ref<string>("")
Title.value = "Aircon Broken"

const TenantDocument:string[] = []
let ButtonClick = (Content:string) => {
    switch(Content){
        case "Submit": {
            alert("Do submit")
            break;
        }
        case "Upload": {
            alert("Do Upload")
            break;
        }
        case "Assign": {
            alert("Do Assign")
            break;
        }
    }
}

const router = useRoute()
</script>

<template>
    <CRMLayout>
        <div class="grid grid-cols-3 py-3">
            <div class="flex items-center col-span-2">
                <svg @click="$router.go(-1)" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"></path></svg>
                <ion-label><h1><strong>Maintenance Request Details: {{ Title }}</strong></h1></ion-label>
            </div>
            <div class="grid justify-end">
                <CRMButtons
                    Types="delete"
                    Content="Delete"
                />
            </div>
        </div>
        <!-- SecondCard::Begin -->
        <div class="bg-[#B7D5D4] rounded-xl p-5">
            <!-- Timeline::Begin -->
            <div class="px-3 pt-3 flex">
                <n-timeline horizontal size="large">
                    <n-timeline-item 
                        content="Requested"
                        type="success"
                        ></n-timeline-item>
                    <n-timeline-item 
                        content="Maintaining"
                        type="success"
                        ></n-timeline-item>
                    <n-timeline-item 
                        content="Reviewing"
                        type="success"
                    ></n-timeline-item>
                    <n-timeline-item 
                        content="Auditing"
                        color="white"
                    ></n-timeline-item>
                    <n-timeline-item 
                        content="Finish"
                        color="white"
                    ></n-timeline-item>
                </n-timeline>
            </div>
            <!-- Timeline::End -->
            <!-- Info::Begin -->
            <div class="px-3 pt-3 flex flex-col gap-6">
                <div class="grid grid-cols-6">
                    <div class="grid col-span-1">
                        <span><strong>Title</strong></span>
                        <span>{{ Title }}</span>
                    </div>
                </div>
                <div class="grid grid-cols-6">
                    <div class="grid col-span-1">
                        <span><strong>Type</strong></span>
                        <span>Repair</span>
                    </div>
                    <div class="grid col-span-1">
                        <span><strong>Area</strong></span>
                        <span>Common Area</span>
                    </div>
                    <div class="grid col-span-1">
                        <span><strong>Duration</strong></span>
                        <span>3 Days</span>
                    </div>
                    <div class="grid col-span-1">
                        <span><strong>Created Date</strong></span>
                        <span>30/5/2023</span>
                    </div>
                </div>
                <div class="grid grid-cols-4">
                    <div class="grid col-span-1">
                        <span><strong>Description</strong></span>
                        <span>Air-con is not cold. Turn on after 30 mins. Blowing hot air</span>
                    </div>
                </div>
                <div class="grid">
                    <span><strong>Tenant Name</strong></span>
                    <span>Lim Choon Kiat</span>
                </div>
                <div class="grid">
                    <span><strong>Property Name</strong></span>
                    <span>Amaya Maluri</span>
                </div>
                <div class="grid grid-cols-6">
                    <div class="grid col-span-1">
                        <span><strong>Unit No.</strong></span>
                        <span>{{ RoomDetail.UnitNumber }}</span>
                    </div>
                    <div class="grid col-span-1">
                        <span><strong>Room Name</strong></span>
                        <span>{{ RoomDetail.RoomNumber }}</span>
                    </div>
                </div>
                <div class="grid">
                    <span><strong>Assigned Technician</strong></span>
                    <span>Cheong Wy Joe, JJ Lim</span>
                </div>
                <div class="grid">
                    <span><strong>Assigned Cleaner</strong></span>
                    <span>-</span>
                </div>
            </div>
            <!-- Info::End -->
        </div>
        <!-- SecondCard::End -->
        <!-- ThirdCard::Begin -->
        <div class="pt-3">
            <div><span><h1><strong>Tenant Document</strong></h1></span></div>
            <!-- SubCard::Begin -->
            <div class="bg-gray" v-if="TenantDocument.values === null">
                <ion-card>There are no <strong>DOCUMENT</strong> at the moment</ion-card>
            </div>
            <!-- SubCard::End -->
        </div>
        <!-- ThirdCard::End -->
        <!-- ForthCard::Begin -->
        <div>
            <div><span><h1><strong>Technician / Cleaner Document</strong></h1></span></div>
        </div>
        <!-- ForthCard::End -->
        <!-- Button::Begin -->
        <div class="grid justify-end">
            <div v-if="UserTypes[UserData.userType] === 'admin'">
                <CRMButtons
                    Types="button1"
                    Content="Assign Technician / Cleaner"
                    @click="ButtonClick('Assign')"
                />
            </div>
            <div v-else-if="UserTypes[UserData.userType] === 'tenant'">
                <CRMButtons
                    Types="button1"
                    Content="Upload Video / Photo"
                    @click="ButtonClick('Upload')"
                />
            </div>
            <div v-else-if="UserTypes[UserData.userType] === 'auditor' || UserTypes[UserData.userType] === 'technician' || UserTypes[UserData.userType] === 'cleaner'" class="flex gap-3">
                <CRMButtons
                    Types="button2"
                    Content="Upload Video / Photo"
                    @click="ButtonClick('Upload')"
                />
                <CRMButtons
                    Types="button1"
                    Content="Complete Maintenance"
                    @click="ButtonClick('Submit')"
                />
            </div>
            <div v-else>
                <ion-buttons>
                    <ion-button>
                        User Type Error
                    </ion-button>
                </ion-buttons>
            </div>
        </div>
        <!-- Button::End -->
    </CRMLayout>
</template>