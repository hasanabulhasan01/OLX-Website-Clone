import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
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
    const { email, password, fullName } = userInfo;
    await createUserWithEmailAndPassword(auth, email, password);
    await addDoc(collection(db, "users"), {
      fullName,
      email,
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
    const { productName, productPrice, description, quantity, image } = adInfo;

    const storageRef = ref(storage, `adInfo/${image.name}`);
    await uploadBytes(storageRef, image);
    const url = await getDownloadURL(storageRef);

    await addDoc(collection(db, "adInfo"), {
      productName,
      productPrice,
      description,
      quantity,
      imageUrl: url,
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
