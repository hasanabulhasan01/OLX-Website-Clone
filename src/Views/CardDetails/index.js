import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { getUsers } from "../../Config/firebase";
import ImageSlider from "../../Components/ImageSlider";

function CardDetails() {
  const [cardData, setCardData] = useState([]);
  const [sellerDetails, setSellerDetails] = useState(null);
  console.log(cardData, "Card data.....");
  let { id } = useParams();
  console.log(id);
  const db = getFirestore();

  // const [sellerData, setSellerData] = useState(null);


  useEffect(function () {
    getSingleProduct();
  }, []);

  useEffect(function () {
    getSeller();
  }, [cardData]);

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

  const getSeller = async () => {
    const sellerData = await getUsers();
    const seller = sellerData.find((user) => user?.email === cardData?.currentUser);
    setSellerDetails(seller);
    console.log(seller, "seller Data........")
  };

  return (
    <>
      <Header />
      <div>
        <div className="mainn">
          <div className="ad-container ">
            <div className="image-slider">
              <ImageSlider images={cardData?.imageUrls} />
            </div>
            <div className="price-sec">
              <h2>Rs {cardData.productPrice}</h2>
              <p className="intro">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                fermentum leo eget est consequat, nec laoreet mauris fermentum.
              </p>
              <p className="locat"><FontAwesomeIcon icon={faLocationDot} /> Katchery Bazar, Faisalabad</p>
            </div>
            <div className="details">
              <h3>Details</h3>
              <p className="itemss"><span className="keys">Product Name:</span> {cardData.productName}</p>
              <p className="itemss"><span className="keys">Category:</span> {cardData.category}</p>
              <p className="itemss"><span className="keys">Quantity:</span> {cardData.quantity}</p>
              <p className="itemss"><span className="keys">Condition:</span>Used</p>
            </div>
            <div className="desc-sec">
            <h3>Description</h3>
            <p>{cardData.description}</p>
            </div>
          </div>
          <div className="user-container ">
            <div className="seller-details">
              <img className="sellerImg" width={60} src={sellerDetails?.userImageUrl} alt=""/>
              <span className="sellerName"> {sellerDetails?.fullName}</span>
              <p className="member">Member since August 2019.</p>
              <div className="contact"><span><FontAwesomeIcon icon={faPhone} /> {sellerDetails?.phoneNo}</span></div>
              <div className="chat"><span><FontAwesomeIcon icon={faComments} /> Chat</span></div>
            </div>
            <div className="location">
              <h3>Location</h3>
              <p ><FontAwesomeIcon icon={faLocationDot} /> Katchery Bazar, Faisalabad</p>
            </div>
            <div className="adId">
            <h4>AD ID: {id}</h4>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CardDetails;
