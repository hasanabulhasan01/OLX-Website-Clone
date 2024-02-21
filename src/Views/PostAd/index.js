import "./index.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth, postAd } from "../../Config/firebase";
import { onAuthStateChanged} from "firebase/auth";

function PostAd() {
  const navigate = useNavigate();
  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();
  const [description, setDescription] = useState();
  const [quantity, setQuantity] = useState();
  const [category, setCategory] = useState();
  const [images, setImages] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  console.log(currentUser, 'currentUser in post Ad......');

  const handleSelectedCategory = (e) => {
    setCategory(e.target.value);
  }

  const handleImageUpload = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages(prevImages => [...prevImages, ...selectedImages]);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user , "current user");
        setCurrentUser(user?.email);
        // const uid = user.uid;
        // ...
      } else {
        setCurrentUser(null);
      }
    });

  }, []);

  const post = async () => {
    await postAd({ productName, productPrice, description, quantity, category, images, currentUser });
    navigate("/ ");
  };
  return (
    <>
      <h1 className="mb-3 mt-4 text-center">Post Your Ad</h1>
      <div class="post-ad-containerrr">
        <h3 className="post-ad-heading-add-details mb-5">
          Enter Product Details:
        </h3>

        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="mb-4">
                {/* <label for="exampleFormControlInput1" class="form-label">
                  Title
                </label> */}
                <h5 className="input-field-labels">Product Name:</h5>
                <input
                  type="text"
                  class="form-control input-field"
                  id="exampleFormControlInput1"
                  placeholder="Product Name"
                  // value={fullName}
                  required
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
            </div>

            <div class="col-md-6">
              <div class="mb-4">
                <h5 className="input-field-labels">Product Price:</h5>
                <input
                  type="text"
                  class="form-control input-field"
                  id="exampleFormControlInput1"
                  placeholder="Product Price"
                  required
                  // value={email}
                  onChange={(e) => setProductPrice(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="mb-4">
                {/* <label for="exampleFormControlInput1" class="form-label">
                  Title
                </label> */}
                <h5 className="input-field-labels">Quantity:</h5>
                <input
                  type="number"
                  class="form-control input-field"
                  placeholder="01"
                  // value={1}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                />
              </div>
            </div>

            <div class="col-md-6">
              <div class="mb-4">
                <h5 className="input-field-labels">Category:</h5>
                <select
                  type="text"
                  class="form-control input-field"
                  id="options"
                  required
                  // placeholder="Please Enter Phone Number"
                  value={category}
                  onChange={handleSelectedCategory}
                >
                  <option value="">Select...</option>
                  <option value="Cars">Cars</option>
                  <option value="Mobile Phones">Mobile Phones</option>
                  <option value="Electronic Appliances">
                    Electronic Appliances
                  </option>
                  <option value="Bikes">Bikes</option>
                  <option value="Furnitures">Furniture & Home Decors</option>
                  <option value="Books">Books</option>
                </select>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="mb-4">
              <h5 className="input-field-labels">Description:</h5>
              <input
                type="text"
                class="form-control input-field"
                id="exampleFormControlInput1"
                placeholder="Description of your product"
                // value={address}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-4">
              {/* <label for="exampleFormControlInput1" class="form-label">
                  Title
                </label> */}
              <h5 className="input-field-labels">Upload Images:</h5>
              <input
                type="file"
                multiple
                class="form-control input-field"
                id="exampleFormControlInput1"
                accept="image/png , image/jpeg, image/webp"
                // placeholder="Please Enter Username"
                // value={image}
                onChange={handleImageUpload}
              />
            </div>
          </div>

          <div class="row">
            <button
              type="button"
              class="btn btn-primary btn-lg postAdBtn mb-3"
              //   onClick={handlePostAdd}
              onClick={post}
            >
              <span class="post-btnn-text"> Post Ad</span>
            </button>
          </div>
        </div>
      </div>
    </>
    // <div className="form-v5">
    //   <div className="page-content">
    //     <div className="form-v5-contentt">
    //       <div className="form-detail" action="#" method="post">
    //         <h2>Post Your Ad</h2>
    //         <div className="form-row">
    //           <label for="product-name">Product Name:</label>
    //           <input
    //             onChange={(e) => setProductName(e.target.value)}
    //             type="text"
    //             name="product-name"
    //             id="product-name"
    //             className="input-text"
    //             placeholder="Product Name"
    //             required
    //           />
    //         </div>
    //         <div className="form-row">
    //           <label for="product-price">Product Price:</label>
    //           <input
    //             onChange={(e) => setProductPrice(e.target.value)}
    //             type="text"
    //             name="product-price"
    //             id="product-price"
    //             className="input-text"
    //             placeholder="Product Price"
    //             required
    //           />
    //         </div>
    //         <div className="form-row">
    //           <label for="description"> Description:</label>
    //           <input
    //             onChange={(e) => setDescription(e.target.value)}
    //             type="text"
    //             name="description"
    //             id="description"
    //             className="input-text"
    //             placeholder="Description"
    //             required
    //           />
    //         </div>
    //         <div className="form-row">
    //           <label for="quantity">Quantity:</label>
    //           <input
    //             onChange={(e) => setQuantity(e.target.value)}
    //             type="number"
    //             name="quantity"
    //             id="quantity"
    //             className="input-text"
    //             placeholder="Available Quantity"
    //             required
    //           />
    //         </div>
    //         <div className="form-row">
    //           <label for="image">Upload Image:</label>
    //           <input
    //             onChange={(e) => setImage(e.target.files[0])}
    //             type="file"
    //             name="image"
    //             id="image"
    //             className="input-text"
    //             placeholder=""
    //             required
    //           />
    //         </div>
    //         <div className="post-btn">
    //           <button onClick={post} className="reg">
    //             Post Ad
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default PostAd;
