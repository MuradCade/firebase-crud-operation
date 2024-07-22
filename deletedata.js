import { initializeApp} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import {getFirestore,collection,getDocs,addDoc,doc,updateDoc,getDoc,deleteDoc} from"https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
'https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js';
import {firebaseConfig} from './firebaseconfig.js';

//firebase intialize

const app = initializeApp(firebaseConfig);


// firestore intialize
const db = getFirestore();


let url = window.location.search;
let deleteurl = url.slice(1,7);
let deleteid = url.slice(8,30);
if(deleteurl == 'delete'){
    deletesinglestudentdata(deleteid);
}else{
    console.log("delete url ka lama socto");
}


async function deletesinglestudentdata(deleteid){
    const docref = doc(db,"studentinformation",deleteid);
    await deleteDoc(docref).then(()=>{
        alert('student information deleted successfully');
        window.location = "index.html";
    }).catch((error)=>{
        console.log("error occur when deleting single student information"+error);
    });
}