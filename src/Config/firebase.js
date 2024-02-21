import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnbD1YmUe1P0tAuRMQ8pOxmvOVRLibAbc",
  authDomain: "olx-clone-b3b6f.firebaseapp.com",
  projectId: "olx-clone-b3b6f",
  storageBucket: "olx-clone-b3b6f.appspot.com",
  messagingSenderId: "63712387875",
  appId: "1:63712387875:web:e1785ec342383447da2296",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export async function register(userInfo) {
  try {
    const { email, password, fullName, dob } = userInfo;
    await createUserWithEmailAndPassword(auth, email, password);
    await addDoc(collection(db, "users"), {
      fullName,
      email,
      dob,
    });
  } catch (e) {
    alert(e.message);
  }
}

export async function login(userInfo) {
  try {
    const { email, password } = userInfo;
    await signInWithEmailAndPassword(auth, email, password);
    alert("Logged in successfully");
  } catch (e) {
    alert(e.message);
  }
}

export async function postAd(adInfo) {
  try {
    const { productName, productPrice, description, quantity, category, images, currentUser, } = adInfo;
    const imageUrls = [];
    
    for (const image of images) {
    const storageRef = ref(storage, `adInfo/${image.name}`);
    await uploadBytes(storageRef, image);
    const url = await getDownloadURL(storageRef);
    imageUrls.push(url);
    }

    await addDoc(collection(db, "adInfo"), {
      productName,
      productPrice,
      description,
      quantity,
      imageUrls,
      category,
      currentUser
    });
    alert("Ad Posted successfully");
  } catch (e) {
    alert(e.message);
  }
}

export async function getAds() {
  const querySnapshot = await getDocs(collection(db, "adInfo"));
  const ads = []
  querySnapshot.forEach((doc) => {
    const ad = doc.data();
    ad.id = doc.id
    ads.push(ad)
    console.log(doc.id, " => ", doc.data());
  });
  return ads;
}

export async function getUsers(id) {
  try {
    let res = [];
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      const ad = doc.data();
      ad.id = doc.id;
      res.push(ad);
    });

    console.log(res, "data");

    return res;
  } catch (error) {
    alert(error.message);
  }
}

export async function updateUserData(data) {
  try {
    const { fullName, email, dob, phoneNo, address, userId, userImage } = data;

    const storageRef = ref(storage, `users/${userImage.name}`);
    await uploadBytes(storageRef, userImage);
    const url = await getDownloadURL(storageRef);

    const dataRef = doc(db, "users", userId);
    console.log(dataRef, "data-----");
    await updateDoc(dataRef, {
      fullName,
      email,
      dob,
      phoneNo,
      address,
      userImageUrl: url,
    });
    alert("Updated successfully");
    // console.log(res, "update response");
  } catch (error) {
    alert(error.message);
  }
}
