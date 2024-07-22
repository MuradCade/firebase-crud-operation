import { initializeApp} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import {getFirestore,collection,getDocs,addDoc,doc,updateDoc,getDoc} from"https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
'https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js';
import {firebaseConfig} from './firebaseconfig.js';

//firebase intialize

const app = initializeApp(firebaseConfig);


// firestore intialize
const db = getFirestore();



let stdfullname = document.getElementById("stdfullname");
let stdclassname = document.getElementById("stdclassname");
let stdid = document.getElementById("stdid");
let updatedb = document.getElementById("updatedb");
let msg = document.getElementById("msg");
    msg.innerHTML = 'Loading...';

let url = window.location.search;
let documentid = url.slice(8,30);
// console.log(documentid.length);
// displaysingle student data


async function displaysinglestudentinfo(documentid){

    const query = collection(db,"studentinformation");
    const result = await getDocs(query);

   try {
    result.forEach(doc=>{
        msg.innerHTML = '';
        if(doc.id == documentid){
            // console.log(doc.data().studentfullname);
            stdfullname.value = doc.data().studentfullname;
            stdclassname.value = doc.data().studentclassname;
            stdid.value = doc.data().studentid;
        }
    });
   } catch (error) {
    console.log('error occur when displaying single student info'+error);
   }
}


async function updatesinglestudentdata(documentid){
    const query = doc(db,"studentinformation",documentid);
    await updateDoc(query,{
        "studentfullname":stdfullname.value,
        "studentclassname":stdclassname.value,
        "studentid":stdid.value,

    }).then(()=>{
        alert('Single Student Infromation updated successfully');
        window.location = 'index.html';
    }).catch((error)=>{
        console.log("error occur while updating single student information"+error);
    });
}

displaysinglestudentinfo(documentid);



updatedb.addEventListener('click',function(e){
    e.preventDefault();
    updatesinglestudentdata(documentid);
})