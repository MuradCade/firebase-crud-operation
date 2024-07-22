import { initializeApp} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import {getFirestore,collection,getDocs,addDoc,doc,updateDoc,getDoc} from"https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
'https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js';
import {firebaseConfig} from './firebaseconfig.js';

//firebase intialize

const app = initializeApp(firebaseConfig);


// firestore intialize
const db = getFirestore();

let displayalldata = document.getElementById('displayalldata');

displayalldata.innerHTML = 'Loading...';

async function displayalldataindb(){
    const query = collection(db,"studentinformation");
    const result  = await getDocs(query);
try {
    
    if(result.empty){
        displayalldata.innerHTML = 'there is not data to be displayed';
    }
    else{
        displayalldata.innerHTML = "";
        let number = 1;
        result.forEach(doc=>{
            displayalldata.innerHTML += `
            <tr>
            <td>${number}</td>
            <td>${doc.data().studentfullname}</td>
            <td>${doc.data().studentclassname}</td>
            <td>${doc.data().studentid}</td>
            <td><a href="updatedata.html?update=${doc.id}" class="btn btn-primary">Update</a>&numsp;<a href="index.html?delete=${doc.id}" class="btn btn-danger">Delete</a></td>
            
            </tr>
            
            
            `;
            number++;
        });
    }
} catch (error) {
    console.log("error occur when displaying all data inside studentinformation collection : "+error);
}
}



window.onload = displayalldataindb();