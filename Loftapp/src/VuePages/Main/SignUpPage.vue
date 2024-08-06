<script setup lang="ts">
    import { useRouter, useRoute } from 'vue-router'
    import { ref } from 'vue'
    import { createUserWithEmailAndPassword } from 'firebase/auth'
    import { doc, setDoc, updateDoc } from 'firebase/firestore'
    import { db, auth } from '../../firebase/init.js'

    const router = useRouter()
    const route = useRoute()

    const GAuth = ref()
    if (route.params.GUser == "0") { GAuth.value = false }
    else if (route.params.GUser == "1") { GAuth.value = true }
    else { throw encodeURI }

    // From Input Field of Web
    const inputs = ref({
        Username: null,
        Email: null || '',
        Password: null || '',
        ConfirmPass: null,
        Name: null,
        Contact: null,
        IC: null,
        HomeAddress: null
    })

    // For Goolge Authenticated Users update required information
    // Need to check whether username key in from the user is existed in database
    const updateField = ref({
        Contact: null,
        Username: null,
        IC: null,
        HomeAddress: null,
        userType: null
    })

    // Regiester Function
    const SignUp = async () => {

        if (inputs.value.Password != inputs.value.ConfirmPass) {
            alert("Password Unmatch!!")
            return 0
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, inputs.value.Email, inputs.value.Password)
            CreateUserProfile(userCredential)
            alert("Account is Registered!")
            router.push('/Login')
        }
        catch(error) {
            console.log("Error Code: ", error.code, "\nError Message: ", error.message)
        }
    }

    function CreateUserProfile(userCredential) {
        //Create New User Profile as in Document with paramters below
        const docRef = doc(db, "User", userCredential.user.uid)
        const UserData = {
            Name: inputs.value.Name,
            Email: inputs.value.Email,
            Contact: inputs.value.Contact,
            image: "",
            Username: inputs.value.Username,
            IC: inputs.value.IC,
            HomeAddress: inputs.value.HomeAddress,
            userType: 0            
        }
        setDoc(docRef, UserData)
        // Update or Add in New User Profile from Authentication
    }

    const updateUserProfile = async () => {
        const UserDoc = doc(db, "User", localStorage.useruid)
        await updateDoc(UserDoc, updateField.value)
        console.log(updateField.value)
        alert("Information Update, taking you to the mainpage shortly")
        localStorage.UsernameEmpty = !localStorage.UsernameEmpty
        router.push('/MainPage')
    }   
    
</script>

<template>
    <ion-page>
        <!-- Header::Begin -->
        <HeroHeader
            :isUserLogin="false"
        />
        <!-- Header::End -->
        <ion-content>
            <div>
                <!-- Logo::Begin -->
                <div class="grid justify-center pt-[30px]">
                    <img src="../../ImageIcon/LoftLogo.jpg" alt="Loft. Logo" style="width:200px" class="rounded-4xl">
                </div>
                <!-- Logo::End -->
                <!-- Content::Begin -->
                <div v-if="GAuth === false" class="grid pt-[40px]">
                    <ion-grid>
                        <ion-row>
                            <!-- Username::Begin -->
                            <ion-col>
                                <ion-input
                                    v-model=inputs.Username
                                    label="Username"
                                    label-placement="floating"
                                    clear-on-edit="true"
                                    fill="outline"
                                >
                                </ion-input>
                            </ion-col>
                            <!-- Username::End -->
                             <!-- Email::Begin -->
                            <ion-col>
                                <ion-input
                                    v-model=inputs.Email
                                    type="email"
                                    label="Email"
                                    label-placement="floating"
                                    clear-on-edit="true"
                                    fill="outline"
                                    helperText="Enter a valid Email"
                                    errorText="Invalid Email"
                                    ngModel
                                    email
                                >
                                </ion-input>
                            </ion-col>
                            <!-- Email::End -->
                        </ion-row>
                        <ion-row>
                            <ion-col>
                                <ion-input
                                    v-model=inputs.Password
                                    type="password"
                                    label="Password"
                                    label-placement="floating"
                                    clear-on-edit="true"
                                    fill="outline"
                                ></ion-input>
                            </ion-col>
                            <ion-col>
                                <ion-input
                                    v-model=inputs.ConfirmPass
                                    type="password"
                                    label="Confirm Password"
                                    label-placement="floating"
                                    clear-on-edit="true"
                                    fill="outline"
                                ></ion-input>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col>
                                <ion-input
                                    v-model=inputs.Name
                                    label="Full Name"
                                    label-placement="floating"
                                    clear-on-edit="true"
                                    fill="outline"
                                ></ion-input>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col>
                                <ion-input
                                    v-model=inputs.Contact
                                    label="Contact No"
                                    label-placement="floating"
                                    clear-on-edit="true"
                                    fill="outline"
                                ></ion-input>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col>
                                <ion-input
                                    v-model=inputs.IC
                                    label="IC No"
                                    label-placement="floating"
                                    clear-on-edit="true"
                                    fill="outline"
                                ></ion-input>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col>
                                <ion-textarea
                                    v-model=inputs.HomeAddress
                                    label="Home Address"
                                    labelPlacement="floating"
                                    fill="outline"
                                ></ion-textarea>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </div>
                <!-- Content::End -->
                <!-- UpdateContent::Begin -->
                <div v-else class="grid grid-cols-2 justify-center px-[30%] gap-[20px] pt-[40px]">
                    <div class="grid gap-5">
                        <!-- Username::Begin -->
                        <div>
                            <ion-input
                                v-model=updateField.Username
                                label="Username"
                                label-placement="floating"
                                clear-on-edit="true"
                                fill="outline"
                            >
                            </ion-input>
                        </div>
                        <!-- Username::End -->
                        <!-- ContactNo::Begin -->
                        <div class="row-span-1">
                            <ion-input
                                v-model=updateField.Contact
                                label="Contact No"
                                label-placement="floating"
                                clear-on-edit="true"
                                fill="outline"
                            ></ion-input>
                        </div>
                        <!-- ContactNo::End -->
                        <!-- ICNO::Begin -->
                        <div class="row-span-1">
                            <ion-input
                                v-model=updateField.IC
                                label="IC No"
                                label-placement="floating"
                                clear-on-edit="true"
                                fill="outline"
                            ></ion-input>
                        </div>
                        <!-- ICNO::End -->
                    </div>
                    <div class="grid grid-rows-3">
                        <!-- HomeAddress::Begin -->
                        <div class="row-span-3">
                            <ion-textarea
                                v-model=updateField.HomeAddress
                                label="Home Address"
                                labelPlacement="floating"
                                fill="outline"
                            ></ion-textarea>
                        </div>
                        <!-- HomeAddress::End -->
                    </div>
                </div>
                <!-- UpdateContent::End -->
                <!-- Button::Begin -->
                <div v-if="GAuth === false" class="grid grid-rows-2 justify-center pt-5">
                    <div>
                        <ion-label>
                            <strong>Already have an account? </strong><RouterLink to="/Login">Login to your account</RouterLink>
                        </ion-label>
                    </div>
                    <div class="grid justify-center">
                        <CRMButtons
                            Types="fill-outline-button"
                            Content="Sign Up"
                            @click="SignUp()"
                        />
                    </div>
                </div>
                <!-- Button::End -->
                <!-- UpdateButton::Begin -->
                <div v-else class="grid justify-center pt-5">
                    <div>
                        <CRMButtons
                            Types="fill-outline-button"
                            Content="Confirm"
                            @click="updateUserProfile()"
                        />
                    </div>
                </div>
                <!-- UpdateButton::End -->
            </div>
        </ion-content>
    </ion-page>
</template>