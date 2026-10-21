import db from "./conn"
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore"

class FirestoreService {
    constructor() {
        this.db = db
    }
}