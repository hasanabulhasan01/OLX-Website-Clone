import "./index.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { updateCartItem } from "../../Store/cartSlice";
import { useDispatch } from "react-redux";

function Cards(props) {
  const { thumbnail, title, description, id, price } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div className="Main">
        <div className="image">
          <img alt="" src={thumbnail} />
        </div>
        <div className="CardBody">
          <h5>Rs {price}</h5>
          <h5 className="title">{title}</h5>
          <p>{description}</p>
          <button
            onClick={() => navigate(`/CardDetails/${id}`)}
            className="cart-btn"
          >
            {" "}
            <FontAwesomeIcon icon={faCircleInfo} /> Details
          </button>
          <button onClick={() => dispatch(updateCartItem(props))} className="cart-btn">
            {" "}
            <FontAwesomeIcon icon={faCartPlus} /> Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Cards;
