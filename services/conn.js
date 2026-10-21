import firebase from '.../firebase/app'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const app = initializeApp (firebase)
const db = getFirestore(app)

const getFirestoreConn = () => {
    try {
        return db =getFirestore(app)
    } catch (e) {
        console.error('Erro ao iniciar a conexão com o Firestore:', e)
        return
    }
} 

export default db