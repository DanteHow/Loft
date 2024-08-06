import { createRouter, createWebHashHistory } from 'vue-router';
import HeroLayout from './VuePages/Main/HeroPage.vue'

const routes = [
    {
        path: '/Test',
        component: () => import('./VueComponents/Test.vue')
    },
    {
        path: '/',
        component: HeroLayout
    },
    {
        path: '/Login',
        component: () => import('./VuePages/Main/LoginPage.vue')
    },
    {
        path: '/SignUp/:GUser',
        name: 'SignUp',
        component: () => import('./VuePages/Main/SignUpPage.vue')
    },
    {
        path: '/Validate',
        component: () => import('./VuePages/Main/Validate.vue')
    },
    {
        path: '/TenantDetail',
        component: () => import('./VuePages/Users/TenantDetailPage.vue')
    },
    {
        path: '/TenantDetail/Edit',
        component: () => import('./VuePages/Users/EditTenant.vue')
    },
    {
        path: '/Profile',
        component: () => import('./VuePages/Users/ProfilePage.vue')
    },
    {
        path:'/Profile/Edit',
        component: () => import('./VuePages/Users/ProfileEdit.vue')
    },
    {
        path: '/RoomDetails',
        component: () => import('./VuePages/DeviceAndProperty/RoomDetailPage.vue')
    },
    {
        path: '/DeviceDetails',
        component: () => import('./VuePages/DeviceAndProperty/DeviceDetailPage.vue')
    },
    {
        path: '/DeviceDetails/Edit',
        component: () => import('./VuePages/DeviceAndProperty/EditDevicePage.vue')
    },
    {
        path:'/Tenant/Register',
        component: () => import('./VuePages/Users/RegisterTenants.vue')
    },
    {
        path:'/Transaction/History',
        component: () => import('./VuePages/AccountAndMaintenance/TransactionHistory.vue')
    },
    {
        path:'/MainPage',
        component: () => import('./VuePages/Main/MainPage.vue')
    },
    {
        path:'/Tenant/List',
        component: () => import('./VuePages/Users/TenantList.vue')
    },
    {
        path:'/Employee/List',
        component: () => import('./VuePages/Users/EmployeeList.vue')
    },
    {
        path:'/Employee/Register',
        component: () => import('./VuePages/Users/RegisterEmployee.vue')
    },
    {
        path:'/MainPage/Maintenance-Request',
        component: () => import('./VuePages/AccountAndMaintenance/MaintenanceList.vue')
    },
    {
        path:'/Test',
        component: () => import('./VuePages/Users/TestPage.vue')
    }
];

const router = createRouter({ 
    history: createWebHashHistory(import.meta.env.BASE_URL), 
    routes 
})
export default router
