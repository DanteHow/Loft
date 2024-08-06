<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { User, UserType } from '../../Types/Index'
import { EmployeeList } from '../../Types/CustomFunction';

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

let ListOfEmployees = ref()

const userTypeSelect = ref('')

onMounted(async () => {
    const Employees = new EmployeeList()
    let FetchUser = async () => { return await Employees.getEmployees() }
    ListOfEmployees.value = await FetchUser()
    console.log(ListOfEmployees.value)
})

// onUpdated(async () => {
//     console.log(ListOfEmployees.value)
// })

const assignUserType = async () => {

}

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
                            <ion-label><h1><strong>Employees</strong></h1></ion-label>
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
                                        <ion-label class="px-2">Register Employee</ion-label>
                                    </ion-button>
                                </ion-buttons>
                            </div>
                        </div>
                        <div>
                            <ion-list>
                                <ion-list-header>
                                    <ion-grid>
                                        <ion-row>
                                            <ion-col>Tenant</ion-col>
                                            <ion-col>IC</ion-col>
                                            <ion-col>User Type</ion-col>
                                            <ion-col></ion-col>
                                        </ion-row>
                                    </ion-grid>
                                </ion-list-header>
                                <ion-item>
                                    <ion-grid>
                                        <ion-row v-for="employee in ListOfEmployees">
                                            <ion-col class="place-content-center">{{ employee["Name"] }}</ion-col>
                                            <ion-col class="place-content-center">{{ employee["IC"] }}</ion-col>
                                            <ion-col>
                                                <ion-select placeholder="Select a Type" mode="md" :value="employee['userType']">
                                                    <ion-select-option :value="0">Tenant</ion-select-option>
                                                    <ion-select-option :value="1">Owner</ion-select-option>
                                                    <ion-select-option :value="2">Cleaner</ion-select-option>
                                                    <ion-select-option :value="3">Technician</ion-select-option>
                                                    <ion-select-option :value="4">Auditor</ion-select-option>
                                                    <ion-select-option :value="5">Admin</ion-select-option>
                                                </ion-select>
                                            </ion-col>
                                            <ion-col><ion-button @click="assignUserType">save</ion-button></ion-col>
                                        </ion-row>
                                    </ion-grid>
                                </ion-item>
                            </ion-list>
                        </div>
                        Selected: {{ userTypeSelect }}
                    </div>
                </ion-content>
                <!-- Content::End -->
            </ion-split-pane>
        </ion-content>
        <!-- SplitPane::End -->
    </ion-page>
</template>