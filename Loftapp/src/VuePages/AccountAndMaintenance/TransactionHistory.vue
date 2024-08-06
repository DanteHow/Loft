<script setup lang="ts">
    import { useRouter } from 'vue-router'
    import { ref, onMounted } from 'vue'
    import { User, UserType, Device, Property } from '../../Types/Index'
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

    console.log(UserData.value.userType)
    //----------- Data Table -----------

    const headers: Header[] = [
        { text: "ID", value: "id" },
        { text: "INV_NO", value: "inv_no" },
        { text: "DateCreated", value: "date" },
        { text: "TenantName", value: "name" },
        { text: "Amount", value: "Rental" },
        { text: "PayType", value: "PaymentType" },
        { text: "Status", value: "status" }
    ]

    const items: Item[] = [
        { id: "1", inv_no: "SV888", date: "5 October 2023", name: "Dante How", Rental: "RM1000", PaymentType: "Aircon", status: "Overdue"},
        { id: "1", inv_no: "SV888", date: "5 October 2023", name: "Dante How", Rental: "RM1000", PaymentType: "Aircon", status: "Overdue"},
        { id: "1", inv_no: "SV888", date: "5 October 2023", name: "Dante How", Rental: "RM1000", PaymentType: "Aircon", status: "Overdue"},
        { id: "1", inv_no: "SV888", date: "5 October 2023", name: "Dante How", Rental: "RM1000", PaymentType: "Aircon", status: "Overdue"},
        { id: "1", inv_no: "SV888", date: "5 October 2023", name: "Dante How", Rental: "RM1000", PaymentType: "Aircon", status: "Overdue"},
        { id: "1", inv_no: "SV888", date: "5 October 2023", name: "Dante How", Rental: "RM1000", PaymentType: "Aircon", status: "Overdue"},
        { id: "1", inv_no: "SV888", date: "5 October 2023", name: "Dante How", Rental: "RM1000", PaymentType: "Aircon", status: "Overdue"},
        { id: "1", inv_no: "SV888", date: "5 October 2023", name: "Dante How", Rental: "RM1000", PaymentType: "Aircon", status: "Overdue"},
        { id: "1", inv_no: "SV888", date: "5 October 2023", name: "Dante How", Rental: "RM1000", PaymentType: "Aircon", status: "Overdue"}
    ]


    //----------------------------------
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
                    <div class="px-5">
                        <div class="py-3">
                            <h2><strong>Transaction History</strong></h2>
                        </div>
                        <div class="grid grid-cols-4 py-3">
                            <div class="col-span-1">
                                <ion-input
                                    :clear-on-edit="true"
                                    placeholder="Search"
                                    fill="outline"
                                >
                                </ion-input>
                            </div>
                        </div>
                        <div class="py-3">
                            <EasyDataTable
                                :headers="headers"
                                :items="items"
                                
                            />
                        </div>
                    </div>
                </ion-content>
                <!-- Content::Begin -->
            </ion-split-pane>
        </ion-content>
        <!-- SplitPane::Begin -->
    </ion-page>
</template>