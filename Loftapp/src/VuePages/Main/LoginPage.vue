<script setup lang="ts">
    import { useRoute, useRouter } from 'vue-router'
    import { ref } from 'vue'
    import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
    import { doc, setDoc, getDoc } from 'firebase/firestore'
    import { db, auth } from '../../firebase/init.js'

    const route = useRoute()
    const router = useRouter()
    const account = ref({
        email:"",
        password:""
    })
    
    const Login = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, account.value.email, account.value.password)
            console.log(userCredential.user.uid)
            localStorage.UsernameEmpty = false
            router.push('/MainPage')
        }
        catch (error) {
            console.log("Error Code: ", error.code, "\nError Message: ", error.message)
            alert("Invalid Email or Password!!")
        }
    }

    const GoogleAuthentication = async () => {
        const provider = new GoogleAuthProvider()
        // New Window pop up to Sign In with Google
        try {
            const userCredential = await signInWithPopup(auth, provider)
            const docID = userCredential.user.uid
            console.log(docID)
            const docRef = doc(db, "User", docID)
            const user = await getDoc(docRef)
            if (!user.exists()) {
                // Create Empty Data
                let docInfo = {}
                setDoc(docRef, docInfo = {
                    Name: userCredential.user.displayName,
                    Email: userCredential.user.email,
                    Contact: userCredential.user.phoneNumber,
                    image: userCredential.user.photoURL,
                    Username: "",
                    IC: "",
                    HomeAddress: "",
                    userType: null
                })
                // Bring user to SignUpPage to complete the 
                localStorage.useruid = docID
                localStorage.UsernameEmpty = true
                router.push("/SignUp/1")
            }
            else {
                const page = !localStorage.UsernameEmpty ? "/SignUp/1" : "/MainPage"
                router.push(page)
            }
        }
        // If Error occur
        catch(error) {
            console.log("Error Code: ", error.code, "\nError Message: ", error.message)
            console.error('Failed to Sign In')
        }
    }

    const Register = () => {
        localStorage.UsernameEmpty = false
        router.push("/SignUp/0")
    }

    const isActive = (path) => path = route.fullPath
</script>

<template>
    <ion-page>
        <HeroHeader 
            :isUserLogin="false"
        />
        <ion-content>
            <div>
                <!-- Logo::Begin -->
                <div class="grid justify-center pt-[30px]">
                    <img src="../../ImageIcon/LoftLogo.jpg" alt="Loft. Logo" style="width:200px" class="rounded-4xl">
                </div>
                <!-- Logo::End -->
                <!-- Content::Begin -->
                <div class="flex flex-col justify-center px-[30%] gap-[20px] pt-[40px]">
                    <!-- Username::Begin -->
                    <div>
                        <ion-input
                            v-model="account.email"
                            label="Email"
                            label-placement="floating"
                            clear-on-edit="true"
                            placeholder="Enter Email"
                            fill="outline"    
                        >
                        </ion-input>
                    </div>
                    <!-- Username::End -->
                    <!-- Password::Begin -->
                    <div>
                        <ion-input
                            v-model="account.password"
                            label="Password"
                            label-placement="floating"
                            clear-on-edit="true"
                            placeholder="Enter Password"
                            type="password"
                            fill="outline"    
                        >
                        </ion-input>
                    </div>
                    <!-- Password::End -->
                    <div class="flex justify-end">
                    <!-- Button::Begin -->
                        <div>
                            <CRMButtons
                                Types="button1"
                                Content="Login"
                                @click="Login()"
                            />
                        </div>
                        <!-- Button::End -->
                        <!-- Register::Begin -->
                        <div>
                            <CRMButtons
                                Types="fill-outline-button"
                                Content="Register"
                                @click="Register()"
                            />
                        </div>
                    <!-- Register::End -->
                    <!-- SigninWithGoogle::Begin -->
                        <div>
                            <CRMButtons
                                Types="button1"
                                Content="Sign In with Google"
                                @click="GoogleAuthentication()"
                            />
                        </div>
                    <!-- SigninWithGoogle::Begin -->
                    </div>
                </div>
                <!-- Content::End -->
            </div>
        </ion-content>
    </ion-page>

</template>