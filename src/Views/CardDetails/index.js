import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./index.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
// import FbImageLibrary from "react-fb-image-grid";

function CardDetails() {
  const [cardData, setCardData] = useState([]);
  let { id } = useParams();
  console.log(id);
  const db = getFirestore();

  useEffect(function () {
    getSingleProduct();
  }, []);

  async function getSingleProduct() {
    try {
      const docRef = doc(db, "adInfo", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setCardData(docSnap.data());
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      alert("No such details for the Ad found");
    }
  }
  console.log("adDetails....", cardData);

  return (
    <>
      <Header />
      <div className="MainDivv">
        <div className="details">
          <div className="imagee">
            <img  alt="" src={cardData.imageUrl} />
          </div>
          <h3>{cardData.productName}</h3>
          <h4>
            <span>Price: Rs </span>
            {cardData.productPrice}{" "}
          </h4>
          <h4>
            <span>Quantity: </span>
            {cardData.quantity} pc
          </h4>
          <h4>
            <span>Category: Electronic Item </span>
          </h4>
          <h4>
            <span>Rating: 4.5 </span>
          </h4>
          <h4>
            <span>Description: </span>
            {cardData.description}
          </h4>
          <p>Posted 3 Days Ago</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CardDetails;
