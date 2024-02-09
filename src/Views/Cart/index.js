import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function Cart() {
  const cartData = useSelector((state) => state.cartItem);
  console.log(cartData, "cart....");

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
              <tr>
                <td className="img-cell">
                  <img width={150} src={item.thumbnail} alt="" />
                </td>
                <td className="title-cell">{item.title}</td>
                <td className="desc-cell">{item.description}</td>
                <td className="price-cell">{item.price}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Cart;
