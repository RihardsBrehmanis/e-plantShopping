import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

// Component to display the list of products
const ProductList = () => {
    // A list of sample products for the store
    const products = [
        { name: 'Fiddle-leaf Fig', image: 'https://cdn.pixabay.com/photo/2019/07/04/07/40/plant-4315671_1280.jpg', cost: '$45' },
        { name: 'Monstera Deliciosa', image: 'https://cdn.pixabay.com/photo/2019/08/21/04/10/monstera-4420108_1280.jpg', cost: '$30' },
        { name: 'Snake Plant', image: 'https://cdn.pixabay.com/photo/2020/09/25/11/52/snake-plant-5599818_1280.jpg', cost: '$25' },
        { name: 'Pothos', image: 'https://cdn.pixabay.com/photo/2019/07/04/14/08/houseplant-4316654_1280.jpg', cost: '$20' },
        { name: 'ZZ Plant', image: 'https://cdn.pixabay.com/photo/2020/05/27/15/51/zz-plant-5227715_1280.jpg', cost: '$35' },
        { name: 'Aloe Vera', image: 'https://cdn.pixabay.com/photo/2020/07/11/17/25/plant-5394272_1280.jpg', cost: '$18' },
        { name: 'Peace Lily', image: 'https://cdn.pixabay.com/photo/2019/08/04/12/35/lily-4383187_1280.jpg', cost: '$28' },
        { name: 'Rubber Plant', image: 'https://cdn.pixabay.com/photo/2020/01/21/11/18/plant-4782806_1280.jpg', cost: '$40' },
    ];
    
    // Get the dispatch function from react-redux to dispatch actions
    const dispatch = useDispatch();
    // Get the cart items from the Redux store
    const cartItems = useSelector(state => state.cart.items);
    // State to track which items have been added to the cart to disable the button
    const [addedItems, setAddedItems] = useState({});

    // Use useEffect to update the 'added' state when the cart changes
    useEffect(() => {
        const newAddedItems = {};
        cartItems.forEach(item => {
            newAddedItems[item.name] = true;
        });
        setAddedItems(newAddedItems);
    }, [cartItems]);

    // Function to calculate the total quantity of items in the cart
    const calculateTotalQuantity = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    // Function to handle adding an item to the cart
    const addToCart = (product) => {
        // Dispatch the addItem action with the product details as the payload
        dispatch(addItem(product));
    };

    return (
        <div className="product-list-container">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
                Products
                <div className="cart-total-quantity">
                    Total Items in Cart: {calculateTotalQuantity()}
                </div>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {products.map((product, index) => (
                    <div key={index} className="product-card bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img className="product-image w-full h-48 object-cover" src={product.image} alt={product.name} />
                        <div className="p-4 flex flex-col items-center">
                            <h3 className="product-name text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
                            <p className="product-cost text-gray-700 text-sm mb-3">{product.cost}</p>
                            <button
                                className={`
                                    add-to-cart-button 
                                    w-full 
                                    py-2 
                                    px-4 
                                    rounded-full 
                                    text-white 
                                    font-bold 
                                    transition-colors 
                                    duration-300
                                    ${addedItems[product.name] ? 'bg-green-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}
                                `}
                                onClick={() => addToCart(product)}
                                disabled={addedItems[product.name]}
                            >
                                {addedItems[product.name] ? 'Added to Cart' : 'Add to Cart'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
