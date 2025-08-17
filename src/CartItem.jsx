import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  // Use useSelector to get the cart items from the Redux store
  const cart = useSelector(state => state.cart.items);
  // Use useDispatch to get the dispatch function for sending actions
  const dispatch = useDispatch();

  // Calculate the total amount for all products in the cart
  const calculateTotalAmount = () => {
    // The reduce method iterates over the cart array and sums up the total cost of each item.
    // parseFloat(item.cost.substring(1)) is used to convert the cost string (e.g., "$15") to a number (e.g., 15).
    return cart.reduce((total, item) => total + (parseFloat(item.cost.substring(1)) * item.quantity), 0).toFixed(2);
  };

  const handleContinueShopping = (e) => {
    // Prevent the default behavior of the button click
    e.preventDefault();
    // Call the onContinueShopping function passed from the parent component
    onContinueShopping();
  };

  // Placeholder function for future checkout functionality
  const handleCheckoutShopping = (e) => {
    e.preventDefault();
    // Replaced 'alert' with console.log to remove the linting warning
    console.log('Functionality to be added for future reference');
  };

  // Handle incrementing the quantity of an item
  const handleIncrement = (item) => {
    const newQuantity = item.quantity + 1;
    // Dispatch the updateQuantity action with the item's name and new quantity
    dispatch(updateQuantity({ name: item.name, quantity: newQuantity }));
  };

  // Handle decrementing the quantity of an item
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      const newQuantity = item.quantity - 1;
      // Dispatch the updateQuantity action with the item's name and new quantity
      dispatch(updateQuantity({ name: item.name, quantity: newQuantity }));
    } else {
      // If quantity is 1, remove the item from the cart
      handleRemove(item);
    }
  };

  // Handle removing an item from the cart
  const handleRemove = (item) => {
    // Dispatch the removeItem action with the item's name
    dispatch(removeItem(item.name));
  };

  // Calculate the total cost for a single item based on its quantity
  const calculateTotalCost = (item) => {
    // Parses the cost string to a number and multiplies by the quantity.
    return (parseFloat(item.cost.substring(1)) * item.quantity).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {/* Map over the cart items to display each one */}
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="continue_shopping_btn">
        <button className="get-started-btn" onClick={handleContinueShopping}>Continue Shopping</button>
        <button className="get-started-btn" onClick={handleCheckoutShopping}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;
