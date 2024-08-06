<script setup lang="ts">
    import { useRouter } from 'vue-router'
    import { reactive, ref } from 'vue'
    import { Users, UserType } from '../../Types/Database'
    import { CurrentUser } from '../../Types/CustomFunction';

    // User Info
    const UserData = ({
        Name: Users.FullName,
        Email: Users.Email,
        ContactNo: Users.ContactNo,
        CountryCode: Users.CountryCode,
        ICNO: Users.ICNO,
        HomeAddress: Users.HomeAddress,
        image: Users.image,
        userType: Users.userType
    })
    const userTypes = UserType;

    // Take jpg/png from file input
    const fileInput = ref<HTMLInputElement | null>(null)
    const file = ref()
    let photoLink = ref()
    // Display file action
    const photoURL = () => {
        file.value = fileInput.value?.files
        const photoToLink = file.value[0]
        // Create a BLOB (Binary Large OBject) for file type
        photoLink.value = URL.createObjectURL(photoToLink)
        console.log(photoLink.value)
    }

    const uploadPhoto = () => {
        if (photoLink.value == null) {
            CurrentUser.updateUser("image", "")
        }
        else {
            CurrentUser.updateUser("image", photoLink.value)
        }
    }

    // Edit Button
    let edit = ref(false)
    function editButton() {
        edit.value = !edit.value
    }

    // Update Uaer Info
    function UpdateUser() {
        CurrentUser.updateUserInfo(UserData)
        alert("User Updated")
    }

    const router = useRouter()
//class style
const headerTitle = "font-bold text-size-[32px]"
</script>

<template>
    <CRMLayout>
        <!--CRM Header-->
        <div class="flex justify-between">
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <ion-icon class="h-[32px] w-[32px] p-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17.77 3.77L16 2L6 12l10 10l1.77-1.77L9.54 12z"></path></svg></ion-icon>
                        <ion-label :class="headerTitle" v-if="UserData.userType === userTypes.tenant || UserData.userType === userTypes.owner">Personal Profile</ion-label>
                        <!-- <ion-label :class="headerTitle" v-else>{{ userTypes[UserData.userType].charAt(0).toUpperCase() + userTypes[UserData.userType].substring(1) }} Details: {{ UserData.Name }}</ion-label> -->
                    </ion-col>
                    <ion-col size="2" v-if="edit">
                        <CRMButtons
                            Types="button1"
                            Content="Update"
                            @click="UpdateUser"
                        />
                    </ion-col>
                    <ion-col size="1">
                        <CRMButtons
                            Types="button2"
                            Content="Edit"
                            @click="editButton"
                        />
                    </ion-col>
                </ion-row>
            </ion-grid>
        </div>
        <!--User Details-->
        <div>
            <ion-grid>
                <!-- ProfileImg::Start -->
                <ion-row v-if="UserData.image" class="flex justify-center">
                    <ion-item lines="none"><img :src="UserData.image" alt="Profile Picture" class="h-[200px] w-[200px]" style="border-radius:50%"></ion-item>
                </ion-row>
                <ion-row  v-if="file && edit" class="flex justify-center">
                    <ion-item lines="none"><img :src="photoLink" alt="Preview Profile Picture" class="h-[200px] w-[200px]" style="border-radius:50%"></ion-item>
                </ion-row>
                <ion-row v-if="edit" class="grid">
                    <ion-col>
                        <input type="file" ref="fileInput" @change="photoURL">
                    </ion-col>
                    <ion-col v-if="photoLink">
                        <CRMButtons
                            Types="button1"
                            Content="Upload Photo"
                            @click="uploadPhoto"
                        />
                    </ion-col>
                </ion-row>
                <br>
                <!-- ProfileImg::End -->
                <!-- FullName::Start -->
                <ion-row>
                    <ion-col>
                        <ion-item lines="none">
                            <ion-label><strong>Full Name</strong></ion-label>
                        </ion-item>
                    </ion-col>
                    <ion-col size="10">
                        <ion-input v-model="UserData.Name" fill="outline" :disabled="!edit"></ion-input>
                    </ion-col>
                </ion-row>
                <!-- FullName::End -->
                <!-- Email::Start -->
                <ion-row>
                    <ion-col>
                        <ion-item lines="none">
                            <ion-label><strong>Email</strong></ion-label>
                        </ion-item>
                    </ion-col>
                    <ion-col size="10">
                        <ion-input v-model="UserData.Email" fill="outline" :disabled="!edit"></ion-input>
                    </ion-col>
                </ion-row>
                <!-- Email::End -->
                 <!-- Contact::Start -->
                <ion-row>
                    <ion-col>
                        <ion-item lines="none">
                            <ion-label><strong>Country Code</strong></ion-label>
                        </ion-item>
                    </ion-col>
                    <ion-col size="10">
                        <ion-input v-model="UserData.CountryCode" fill="outline" :disabled="!edit"></ion-input>
                    </ion-col>
                </ion-row>
                <!-- Contact::End -->
                <!-- Contact::Start -->
                <ion-row>
                    <ion-col>
                        <ion-item lines="none">
                            <ion-label><strong>Contact No</strong></ion-label>
                        </ion-item>
                    </ion-col>
                    <ion-col size="10">
                        <ion-input v-model="UserData.ContactNo" fill="outline" :disabled="!edit"></ion-input>
                    </ion-col>
                </ion-row>
                <!-- Contact::End -->
                <!-- IC::Start -->
                <ion-row>
                    <ion-col>
                        <ion-item lines="none">
                            <ion-label><strong>IC No</strong></ion-label>
                        </ion-item>
                    </ion-col>
                    <ion-col size="10">
                        <ion-input v-model="UserData.ICNO" fill="outline" :disabled="!edit"></ion-input>
                    </ion-col>
                </ion-row>
                <!-- IC::End -->
                <!-- Address::Start -->
                <ion-row>
                    <ion-col>
                        <ion-item lines="none">
                            <ion-label><strong>Home Address</strong></ion-label>
                        </ion-item>
                    </ion-col>
                    <ion-col size="10">
                        <ion-input v-model="UserData.HomeAddress" fill="outline" :disabled="!edit"></ion-input>
                    </ion-col>
                </ion-row>
                <!-- Address::End -->
            </ion-grid>
        </div>
        <!--Actions-->
        <ion-grid>
            <ion-row>
                <ion-col>
                    <ion-item lines="none">
                        <ion-card>
                            <ion-card-header>
                                <ion-card-title>Close Account</ion-card-title>
                                <ion-card-subtitle>*Notice that close account deposit will be forfeited</ion-card-subtitle>
                            </ion-card-header>
                            <ion-button>Close Account</ion-button>
                        </ion-card>
                    </ion-item>
                </ion-col>
                <ion-col>
                    <ion-item lines="none">
                        <ion-card>
                            <ion-card-header>
                                <ion-card-title>Card Title</ion-card-title>
                                <ion-card-subtitle>*Notice that close account deposit will be forfeited</ion-card-subtitle>
                            </ion-card-header>
                            <ion-button>Action 1</ion-button>
                        </ion-card>
                    </ion-item>
                </ion-col>
            </ion-row>
        </ion-grid>
    </CRMLayout>
</template>

<style lang="scss" scoped>
ion-card{
    @apply w-[330px] px-4 py-2 bg-[#BDD4D4];

    ion-card-header {
        ion-card-title, ion-card-subtitle {
            @apply text-black;
        }
    }

    ion-button{
        @apply w-full;
        --background: #ffffff;
        --color: #568085;
        --border-color: #568085;
        --border-radius: 10px;
        --border-size: 1px;
        font-size: bold;
        outline-offset: 1px;
    }
}

ion-button.editButton{
    --background: white;
    --color: black;
    --border-color: black;
    --border-radius: 5px;
    --border-width: 2px!important;
}



</style>