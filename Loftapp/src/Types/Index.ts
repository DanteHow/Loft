export interface User{
    fullName: string | null;
    email: string | null;
    contactNo: string | null;
    countryCode: string | null;
    icNo: number | null;
    homeAdress?: string | null;
    account?: Account | null;
    image?: string | null;
    userType: UserType | null;
}

export interface Account {
    username: string;
    password: string;
}

export interface Device {
    DeviceName: string;
    DeviceID: number;
    DeviceBalance: number;
    DeviceChargeRate: number;
    Status: boolean;
}

export interface BankAccount {
    Bank: string;
    BankCardHolder: string;
    BankCardNumber: number;
}

export interface Property {
    PropertyName: string;
    UnitNumber: number | string;
    RoomStatus: string;
    RoomNumber: string;

}

export enum UserType {
    "tenant",
    "owner",
    "cleaner",
    "technician",
    "auditor",
    "admin",
    "super-admin",
}

