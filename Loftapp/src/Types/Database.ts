import { collection, getDoc, doc, query, where, getDocs, clearIndexedDbPersistence } from 'firebase/firestore'
import { db, auth } from '../firebase/init.js'
import { onAuthStateChanged } from 'firebase/auth'

// query() always come with rows of documents, therefore getDocs with a 's' is needed

// When AuthStateChanged, user will not be cleared
onAuthStateChanged(auth, (user) => {
    // User's uid is store in local storage
    if (user) { localStorage.useruid = user.uid }
    else { 
        console.log("User is Log Out")
    }
})

// ---------------------------- User ----------------------------
const UserdocSnap = await getDoc(doc(db, "User", localStorage.useruid))
let User = {
    FullName: UserdocSnap.data()!["Name"],
    Email: UserdocSnap.data()!["Email"],
    ContactNo: UserdocSnap.data()!["Contact"],
    CountryCode: UserdocSnap.data()!["CountryCode"],
    ICNO: UserdocSnap.data()!["IC"],
    HomeAddress: UserdocSnap.data()!["HomeAddress"],
    image: UserdocSnap.data()!["image"],
    Username: UserdocSnap.data()!["Username"],
    userType: UserdocSnap.data()!["userType"]
}
export const Users = User

// ---------------------------- Device ----------------------------
const DeviceQuery = query(collection(db, "Device"), where("IC", "==", User.ICNO))
const DeviceSnapshot = await getDocs(DeviceQuery)

let Device = {}
DeviceSnapshot.forEach((collection) => {
    Device = {
        Name: collection.data()!["DeviceName"],
        ID: collection.data()!["DeviceID"],
        Balance: collection.data()!["DeviceBalance"],
        ChargeRate: collection.data()!["DeviceChargeRate"],
        Status: collection.data()!["Status"]
    }
})

export const DeviceData = Device

// ---------------------------- Property ----------------------------
const PropertyQuery = query(collection(db, "Property"), where("IC", "==", User.ICNO))
const PropertySnapshot = await getDocs(PropertyQuery)
let Property = {}

PropertySnapshot.forEach((collection) => {
    Property = {
        Name: collection.data()!["PropertyName"],
        UnitNumber: collection.data()!["UnitNumber"],
        RoomStatus: collection.data()!["RoomStatus"],
        RoomNumber: collection.data()!["RoomNumber"],
        Tenant: collection.data()!["Tenant"]
    }
})

export const PropertyData = Property

// First obtained the subCollection ID in order to extract subCollection Data
const CollectionRef = await getDocs(query(collection(db, "Property"), where("IC", "==", User.ICNO)))
let CollectionID = ""
CollectionRef.forEach((collection) => {
    CollectionID = collection.id
})

// After obtained subCollection id, then use it to extract subCollection Data
interface InvoiceParam {
    InvoiceLink: string | null,
    InvoiceNo: string | null,
    Rental: string | null,
    Status: boolean | null,
    DueDate: string
}
const Invoices : InvoiceParam[] = []
try {
    const subCollectionInstance = await getDocs(collection(db, "Property", CollectionID, "Invoices"))
    // This method is for one Invoice, if have multiple invoices, need to change the data structure
    subCollectionInstance.forEach((collection) => {
        Invoices.push({
            InvoiceLink: collection.data()!["InvoicePDF"],
            InvoiceNo: collection.data()!["InvoiceNo"],
            Rental: collection.data()!["Rental"],
            Status: collection.data()!["Status"],
            DueDate: collection.data()!["DueDate"]
        })
    })    
}
catch(error) {
    Invoices.push({
        InvoiceLink: 'Unknown',
        InvoiceNo: 'Unknown',
        Rental: 'Unknown',
        Status: null,
        DueDate: 'Unknown'
    })
}

export const Invoice = Invoices

// ---------------------------- Bank Account ----------------------------
const BankAccountQuery = query(collection(db, "Account"), where("IC", "==", User.ICNO))
const BankAccountSnapshot = await getDocs(BankAccountQuery)
let BankAccount = {}

BankAccountSnapshot.forEach((collection) => {
    BankAccount = {
        Bank: collection.data()!["Bank"],
        Holder: collection.data()!["CardHolder"],
        CardNumber: collection.data()!["CardNumber"]
    }
})

export const BankData = BankAccount

// ----------------------- Maintenance Request -----------------------
const MRQuery = query(collection(db, "MaintenanceRequest"), where("IC", "==", User.ICNO))
const MRSnapshot = await getDocs(MRQuery)
let MRList = {}

MRSnapshot.forEach((collection) => {
    MRList = {
        PersonRequest: collection.data()!["PersonRequest"],
        RiskLevel: collection.data()!["RiskLevel"],
        MaintenanceImage: collection.data()!["UploadedImage"],
        Progress: collection.data()!["Progress"],
        Maintenant: collection.data()!["Maintenant"]
    }
})

// ---------------------------- User Type ----------------------------
export enum UserType {
    "tenant", //0
    "owner", //1
    "cleaner", //2
    "technician", //3
    "auditor", //4
    "admin" //5
}