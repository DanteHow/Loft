<script setup lang="ts">
    import { useRouter } from 'vue-router'
    import { ref } from 'vue'
    import { Property } from '../../Types/Index'
    import { Header, Item } from 'vue3-easy-data-table'
    import { Users, Invoice, PropertyData } from '../../Types/Database'

    const Client = ref([0, 1])
    const Technician = ref([2, 3, 4])
    let filterResult = ref(Invoice)

    const searchValue = (event) => {
        const query = event.target.value.toLowerCase()
        filterResult.value = Invoice.filter(e => e.DueDate?.toLocaleLowerCase().indexOf(query) > -1)
    }

    let UserInfo = ref({
        Name: Users.FullName,
        Email: Users.Email,
        ContactNo: Users.ContactNo,
        CountryCode: Users.CountryCode,
        ICNO: Users.ICNO,
        HomeAddress: Users.HomeAddress,
        image: Users.HomeAddress,
        userType: Users.userType
    })

    var RoomDetail = ref<Property> ({
        PropertyName: PropertyData["Name"] == undefined ? "Unknown" : PropertyData["Name"],
        UnitNumber: PropertyData["UnitNumber"] == undefined ? "Unknown" : PropertyData["UnitNumber"],
        RoomStatus: PropertyData["RoomStatus"] == undefined ? "Unknown" : PropertyData["RoomStatus"],
        RoomNumber: PropertyData["RoomNumber"] == undefined ? "Unknown" : PropertyData["RoomNumber"]
    })

    var PropertyInvoice = ref({
        InvoiceLink: Invoice["InvoiceLink"] == undefined ? "Unknown" : Invoice["InvoiceLink"],
        InvoiceNo: Invoice["InvoiceNo"] == undefined ? "Unknown" : Invoice["InvoiceNo"],
        Rental: Invoice["Rental"] == undefined ? "Unknown" : Invoice["Rental"],
        Status: Invoice["Status"] == undefined ? "Unknown" : Invoice["Status"],
        DueDate: Invoice["DueDate"] == undefined ? "Unknown" : Invoice["DueDate"],
        BillType: "Rental Fee"
    })

    //----------- Client Table -----------

    const Clientheaders: Header[] = [
        { text: "ID", value: "id" },
        { text: "INV_NO", value: "inv_no" },
        { text: "Due Date", value: "date" },
        { text: "TenantName", value: "name" },
        { text: "Amount (RM)", value: "Rental" },
        { text: "PayType", value: "PaymentType" },
        { text: "Status", value: "status" }
    ]

    const Clientitems: Item[] = [
        { id: "1", inv_no: PropertyInvoice.value.InvoiceNo, date: PropertyInvoice.value.DueDate, name: UserInfo.value.Name, Rental: PropertyInvoice.value.Rental, PaymentType: "Aircon", status: PropertyInvoice.value.Status ? "Not Due" : "Overdue"},
        { id: "1", inv_no: PropertyInvoice.value.InvoiceNo, date: PropertyInvoice.value.DueDate, name: UserInfo.value.Name, Rental: PropertyInvoice.value.Rental, PaymentType: "Aircon", status: PropertyInvoice.value.Status ? "Not Due" : "Overdue"},
        { id: "1", inv_no: PropertyInvoice.value.InvoiceNo, date: PropertyInvoice.value.DueDate, name: UserInfo.value.Name, Rental: PropertyInvoice.value.Rental, PaymentType: "Aircon", status: PropertyInvoice.value.Status ? "Not Due" : "Overdue"},
    ]

    //----------- Technician Table -----------

    const TechnicianHeaders: Header[] = [
        {text: "ID", value: "id"},
        {text: "Maintenance ID", value: "M_id"},
        {text: "Date Created", value: "Date"},
        {text: "Status", value: "status"},
        
    ]

    const TechnicianItems: Item[] =[
        {id: "1", M_id: "EFC-C011", Date: "3-6-2024", status: "Pending"},
        {id: "1", M_id: "EFC-C011", Date: "3-6-2024", status: "Pending"},
        {id: "1", M_id: "EFC-C011", Date: "3-6-2024", status: "Pending"},
    ]

    //----------- Manager Table -----------

    const AdminHeaders: Header[] = [
        {text: "ID", value: "id"},
        {text: "Room No", value: "RoomNo"},
        {text: "Unit No", value: "UnitNo"},
        {text: "Property Name", value: "Property"},
        {text: "Device ID", value: "Device_ID"},
        {text: "Power Rate", value: "PR"},
        {text: "Usage", value: "usage"},
        {text: "Price", value: "price"},
    ]

    const AdminItems: Item[] =[
        {id: "1", RoomNo: "EFC-C011", UnitNo: "3-6-2024", Property: "Pending", Device_ID: "YMX-103-FC", PR: "30kWph", usage: "500kW", price: "RM100.00"},
        {id: "1", RoomNo: "EFC-C011", UnitNo: "3-6-2024", Property: "Pending", Device_ID: "YMX-103-FC", PR: "30kWph", usage: "500kW", price: "RM100.00"},
        {id: "1", RoomNo: "EFC-C011", UnitNo: "3-6-2024", Property: "Pending", Device_ID: "YMX-103-FC", PR: "30kWph", usage: "500kW", price: "RM100.00"},
    ]

    //----------- Functions -----------

    const MonthIncrement = () => {
        var Month = Number(PropertyInvoice.value.DueDate.split("-")[1]) + 1
        var Year = Number(PropertyInvoice.value.DueDate.split("-")[2])

        if (Month > 12) {
            Year += 1
            Month -= 12
        }
        return `${PropertyInvoice.value.DueDate.split("-")[0]}-${Month}-${Year}`
    }

    const MaintenanceStatus = () => {

    }

    const isOpen = ref(true)
    const alertButtons = ['Dimiss']
    const setOpen = (state: boolean) => {
        isOpen.value = state
    }
    const router = useRouter()
</script>

<template>
    <CRMLayout>
        <ion-alert
            :is-open="isOpen"
            header="Property was not assign"
            message="Please contact the manager or owner to assign your unit"
            :buttons="alertButtons"
            @didDismiss="setOpen(false)"
        ></ion-alert>
        <div class="px-5">
            <!-- Info::Begin -->
            <div class="py-5">
                <div class="grid grid-cols-4 pb-5">
                    <div class="col-span-2">
                        <div>
                            <ion-label><h2><strong>Name</strong></h2></ion-label>
                        </div>
                        <div>
                            <ion-label>{{ UserInfo.Name }}</ion-label>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <div>
                            <ion-label><h2><strong>Aircon Usage this Month</strong></h2></ion-label>
                        </div>
                        <div>
                            <ion-label>RM{{ PropertyInvoice.Rental }}</ion-label>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-4">
                    <div>
                        <div>
                            <ion-label><h2><strong>Unit No</strong></h2></ion-label>
                        </div>
                        <div>
                            <ion-label>{{ RoomDetail.RoomNumber }}</ion-label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <ion-label><h2><strong>Unit Number</strong></h2></ion-label>
                        </div>
                        <div>
                            <ion-label>{{ RoomDetail.UnitNumber }}</ion-label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <ion-label><h2><strong>Rental</strong></h2></ion-label>
                        </div>
                        <div>
                            <ion-label>RM{{ PropertyInvoice.Rental }}</ion-label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <ion-label><h2><strong>Next Bill Date</strong></h2></ion-label>
                        </div>
                        <div>
                            <ion-label>{{ MonthIncrement() }}</ion-label>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Info::End -->
            <!-- List::Begin -->
            <!-- <div v-if="CheckUserType() === 0">
                <EasyDataTable
                    :headers="Clientheaders"
                    :items="Clientitems"
                />
            </div> -->
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <ion-searchbar @ionInput="searchValue($event)" placeholder="Filter by Due Date"></ion-searchbar>
                    </ion-col>
                    <ion-col></ion-col>
                </ion-row>                            
            </ion-grid>
            <ion-list>
                <ion-item>
                    <ion-grid>
                        <ion-row style="background-color: #488286;">
                            <ion-col>ID</ion-col>
                            <ion-col>Invoice No.</ion-col>
                            <ion-col>Date</ion-col>
                            <ion-col>Rental</ion-col>
                            <ion-col>Payment Type</ion-col>
                            <ion-col>Status</ion-col>
                        </ion-row>
                    </ion-grid>
                </ion-item>
            </ion-list>
            <ion-list>
                <ion-item v-for="(invoice, index) in filterResult" :key="index">
                    <ion-grid>
                        <ion-row>
                            <ion-col>{{ index }}</ion-col>
                            <ion-col>{{ invoice.InvoiceNo }}</ion-col>
                            <ion-col>{{ invoice.DueDate }}</ion-col>
                            <ion-col>{{ invoice.Rental }}</ion-col>
                            <ion-col>{{  }}</ion-col>
                            <ion-col>{{ invoice.Status }}</ion-col>
                        </ion-row>
                    </ion-grid>
                </ion-item>
            </ion-list>
            
            <!-- List::End -->
        </div>
    </CRMLayout>
</template>