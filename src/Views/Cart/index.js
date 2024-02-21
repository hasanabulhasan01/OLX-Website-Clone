import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { removeCartItem } from "../../Store/cartSlice";

function Cart() {
  const cartData = useSelector((state) => state.cartReducer.cartItem);
  console.log(cartData, "cart....");
  const dispatch = useDispatch();

  const handleDelete = (index) =>{
    dispatch(removeCartItem(index))
  }

  return (
    <div className="cart-main">
      <h2 className="cart-heading">
        <FontAwesomeIcon icon={faCartShopping} /> Your Cart
      </h2>
      <div>
        <table className="cart-item">
          <tr>
            <th className="img-cell">Products Image:</th>
            <th className="title-cell">Products Title:</th>
            <th className="desc-cell">Products Description:</th>
            <th className="price-cell">Price:</th>
          </tr>
          {cartData.map(function (item, index) {
            return (
              <tr className="itemss">
                <td className="img-cell">
                  <img width={150} src={item.thumbnail} alt="" />
                </td>
                <td className="title-cell">{item.title}</td>
                <td className="desc-cell">{item.description}</td>
                <td className="price-cell">{item.price}/-</td>
                <td className="del-cell delete">
                  <span onClick={() =>handleDelete(index)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </span>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Cart;
