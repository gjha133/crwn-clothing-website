import { initializeApp } from 'firebase/app'
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD9wbilDKiZTsiZ0LECLc8P41Uq26n2qQ8",
    authDomain: "crwn-clothing-react-db-72961.firebaseapp.com",
    projectId: "crwn-clothing-react-db-72961",
    storageBucket: "crwn-clothing-react-db-72961.appspot.com",
    messagingSenderId: "634285547432",
    appId: "1:634285547432:web:b1a7b4e38f05de6943079d"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: 'select_account'
})


export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const db = getFirestore() 

export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation = {}
) => {
    if(!userAuth) return

    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)

    // If user data does not exists
    // Create / set the document with data from userAuth in my collection
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email, 
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }
    // If user data does not exists
    // Return userDocRef
    return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return

    return await createUserWithEmailAndPassword(auth, email, password)
}