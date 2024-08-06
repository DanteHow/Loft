import { db } from '../firebase/init'
import { query, where, updateDoc, getDocs, collection, doc, getDoc } from "firebase/firestore"

class User {
    
    public async updateUser(field: string, value: string) {
        const Collection = doc(db, "User", localStorage.useruid)
        try { 
            await updateDoc(Collection, { [field] : value }) 
            location.reload()
        }
        catch (error) { console.log(`Error Message show: ${error}`) }
    }

    public async updateUserInfo(Obj: object) {
        const Collection = doc(db, "User", localStorage.useruid)
        try {
            await updateDoc(Collection, Obj)
            location.reload()
        }
        catch (error) { console.log(`Error Message show: ${error}`) }
    }

    public deleteUser() {

    }

    public getUserDocument() {

    }

    public testFunction() {
        console.log(localStorage.useruid)
    }
}

export const CurrentUser = new User()

class Employee {

    private UserCollection = collection(db, "User")

    public async getEmployees() {
        let array: object[] = []
        try {
            const UserDocuments = await getDocs(this.UserCollection)
            UserDocuments.forEach((docs) => {
                array.push(docs.data())
            })
        }
        catch (error) {
            console.log(`Error message: ${error}`)
        }
        return array
    }
    
}

export const EmployeeList = Employee