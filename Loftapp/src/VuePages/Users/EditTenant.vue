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
    <CRMLayout>
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
    <!-- FullName::Begin -->
    <div class="grid grid-cols-3">
            <div class="flex items-center">
                <ion-text>Full Name</ion-text>
            </div>
            <div class="col-span-2">
                <ion-input
                    label-placement="stacked"
                    :clear-on-edit="true"
                    placeholder="Insert Your Full Name"
                >
                </ion-input>
            </div>
        <div></div>
    </div>
        <!-- FullName::End -->
        <!-- Email::Begin -->
        <div class="grid grid-cols-3">
            <div class="flex items-center">
                Email
            </div>
            <div class="col-span-2">
                <ion-input
                    label-placement="stacked"
                    :clear-on-edit="true"
                    placeholder="Insert your Email"
                >
                </ion-input>
            </div>
            <div></div>
        </div>
        <!-- Email::End -->
        <!-- Contact::Begin -->
        <div class="grid grid-cols-3">
            <div class="flex items-center">
                Contact No.
            </div>
            <div class="col-span-2">
                <ion-input
                    label-placement="stacked"
                    :clear-on-edit="true"
                    placeholder="Insert your Contact"
                >
                </ion-input>
            </div>
            <div></div>
        </div>
        <!-- Contact::End -->
        <!-- IC::Begin -->
        <div class="grid grid-cols-3">
            <div class="flex items-center">
                IC No.
            </div>
            <div class="col-span-2">
                <ion-input
                    label-placement="stacked"
                    :clear-on-edit="true"
                    placeholder="Insert your IC No."
                >
                </ion-input>
            </div>
            <div></div>
        </div>
        <!-- IC::End -->
        <!-- Address::Begin-->
        <div class="grid grid-cols-3">
            <div class="flex items-center">
                Email
            </div>
            <div class="col-span-2">
                <ion-input
                    label-placement="stacked"
                    :clear-on-edit="true"
                    placeholder="Insert your Address"
                >
                </ion-input>
            </div>
            <div></div>
        </div>
        <!-- Address::End -->
        <!-- Property::Begin -->
        <div class="grid grid-cols-3">
            <div class="flex items-center">
                Property Name
            </div>
            <div class="col-span-2">
                <ion-input
                    label-placement="stacked"
                    :clear-on-edit="true"
                    placeholder="Insert your Property Name"
                >
                </ion-input>
            </div>
            <div></div>
        </div>
        <!-- Property::End -->
        <!-- Unit::Begin -->
        <div class="grid grid-cols-3">
            <div class="flex items-center">
                Unit No
            </div>
            <div class="col-span-2">
                <ion-input
                    label-placement="stacked"
                    :clear-on-edit="true"
                    placeholder="Insert your Unit No"
                >
                </ion-input>
            </div>
            <div></div>
        </div>
        <!-- Unit::End -->
        <!-- RoomName::Begin -->
        <div class="grid grid-cols-3">
            <div class="flex items-center">
                Room Name
            </div>
            <div class="col-span-2">
                <ion-input
                    label-placement="stacked"
                    :clear-on-edit="true"
                    placeholder="Insert your Room Name"
                >
                </ion-input>
            </div>
            <div></div>
        </div>
        <!-- RoomName::End -->
        <!-- CheckIn::Begin -->
        <div class="grid grid-cols-3">
            <div class="flex items-center">
                Check In Date
            </div>
            <div class="col-span-2">
                <ion-input
                    label-placement="stacked"
                    :clear-on-edit="true"
                    placeholder="Insert your Check In Date"
                >
                </ion-input>
            </div>
            <div></div>
        </div>
        <!-- CheckIn::End -->
        <!-- EndDate::Begin -->
        <div class="grid grid-cols-3">
            <div class="flex items-center">
                End Date
            </div>
            <div class="col-span-2">
                <ion-input
                    label-placement="stacked"
                    :clear-on-edit="true"
                    placeholder="Insert your End Date"
                    value=""
                >
                </ion-input>
            </div>
            <div></div>
        </div>
        <!-- EndDate::End -->
    </div>
    <!-- Details::End -->
    <!-- Buttons::Begin -->
    <div class="flex flex-row-reverse px-5">
        <!-- EditTenant::Begin -->
        <div class="p-2">
            <CRMButtons
                Types="button1"
                Content="Edit Tenant"
            />
        </div>
        <!-- EditTenant::End -->
        <!-- Cancel::Begin -->
        <div class="p-2">
            <CRMButtons
                Types="fill-outline-button"
                Content="Cancel"
            />
        </div>
        <!-- Cancel::End -->
    </div>
    <!-- Buttons::End -->
    </CRMLayout>
</template>

<style lang="scss">
    
</style>