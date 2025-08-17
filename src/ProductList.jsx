import React, { useState } from 'react';

// The main application component that manages state and views.
const App = () => {
    // State to toggle between the product list view and the shopping cart view.
    const [showCart, setShowCart] = useState(false);
    // State to hold the items currently in the shopping cart.
    const [cartItems, setCartItems] = useState([]);

    // Data for all the plants, including their images, descriptions, and costs.
    // This is the array that was originally in ProductList.jsx.
    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12"
                },
                {
                    name: "Peace Lily",
                    image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
                    description: "Removes mold spores and purifies the air.",
                    cost: "$18"
                },
                {
                    name: "Boston Fern",
                    image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
                    description: "Adds humidity to the air and removes toxins.",
                    cost: "$20"
                },
                {
                    name: "Rubber Plant",
                    image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
                    description: "Easy to care for and effective at removing toxins.",
                    cost: "$17"
                },
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Purifies the air and has healing properties for skin.",
                    cost: "$14"
                }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$20"
                },
                {
                    name: "Jasmine",
                    image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Sweet fragrance, promotes relaxation.",
                    cost: "$18"
                },
                {
                    name: "Rosemary",
                    image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
                    description: "Invigorating scent, often used in cooking.",
                    cost: "$15"
                },
                {
                    name: "Mint",
                    image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
                    description: "Refreshing aroma, used in teas and cooking.",
                    cost: "$12"
                },
                {
                    name: "Lemon Balm",
                    image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                    description: "Citrusy scent, relieves stress and promotes sleep.",
                    cost: "$14"
                },
                {
                    name: "Hyacinth",
                    image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
                    description: "Hyacinth is a beautiful flowering plant known for its fragrant.",
                    cost: "$22"
                }
            ]
        },
        {
            category: "Insect Repellent Plants",
            plants: [
                {
                    name: "oregano",
                    image: "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg",
                    description: "The oregano plants contains compounds that can deter certain insects.",
                    cost: "$10"
                },
                {
                    name: "Marigold",
                    image: "https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg",
                    description: "Natural insect repellent, also adds color to the garden.",
                    cost: "$8"
                },
                {
                    name: "Geraniums",
                    image: "https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg",
                    description: "Known for their insect-repelling properties while adding a pleasant scent.",
                    cost: "$20"
                },
                {
                    name: "Basil",
                    image: "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg",
                    description: "Repels flies and mosquitoes, also used in cooking.",
                    cost: "$9"
                },
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$20"
                },
                {
                    name: "Catnip",
                    image: "https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg",
                    description: "Repels mosquitoes and attracts cats.",
                    cost: "$13"
                }
            ]
        },
        {
            category: "Medicinal Plants",
            plants: [
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Soothing gel used for skin ailments.",
                    cost: "$14"
                },
                {
                    name: "Echinacea",
                    image: "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg",
                    description: "Boosts immune system, helps fight colds.",
                    cost: "$16"
                },
                {
                    name: "Peppermint",
                    image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg",
                    description: "Relieves digestive issues and headaches.",
                    cost: "$13"
                },
                {
                    name: "Lemon Balm",
                    image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                    description: "Calms nerves and promotes relaxation.",
                    cost: "$14"
                },
                {
                    name: "Chamomile",
                    image: "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg",
                    description: "Soothes anxiety and promotes sleep.",
                    cost: "$15"
                },
                {
                    name: "Calendula",
                    image: "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg",
                    description: "Heals wounds and soothes skin irritations.",
                    cost: "$12"
                }
            ]
        },
        {
            category: "Low Maintenance Plants",
            plants: [
                {
                    name: "ZZ Plant",
                    image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Thrives in low light and requires minimal watering.",
                    cost: "$25"
                },
                {
                    name: "Pothos",
                    image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg",
                    description: "Tolerates neglect and can grow in various conditions.",
                    cost: "$10"
                },
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Needs infrequent watering and is resilient to most pests.",
                    cost: "$15"
                },
                {
                    name: "Cast Iron Plant",
                    image: "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg",
                    description: "Hardy plant that tolerates low light and neglect.",
                    cost: "$20"
                },
                {
                    name: "Succulents",
                    image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg",
                    description: "Drought-tolerant plants with unique shapes and colors.",
                    cost: "$18"
                },
                {
                    name: "Aglaonema",
                    image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg",
                    description: "Requires minimal care and adds color to indoor spaces.",
                    cost: "$22"
                }
            ]
        }
    ];

    // Function to handle adding a plant to the cart.
    const handleAddToCart = (plant) => {
        // Find if the item already exists in the cart.
        const existingItemIndex = cartItems.findIndex(item => item.name === plant.name);

        if (existingItemIndex > -1) {
            // If the item exists, create a new array to update its quantity.
            const newCartItems = [...cartItems];
            newCartItems[existingItemIndex].quantity += 1;
            setCartItems(newCartItems);
        } else {
            // If the item is new, add it to the cart with a quantity of 1.
            setCartItems([...cartItems, { ...plant, quantity: 1 }]);
        }
    };

    // Function to handle removing an item from the cart.
    const handleRemoveFromCart = (plantName) => {
        setCartItems(cartItems.filter(item => item.name !== plantName));
    };

    // Function to calculate the total cost of all items in the cart.
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const cost = parseFloat(item.cost.replace('$', ''));
            return total + (cost * item.quantity);
        }, 0).toFixed(2);
    };

    // JSX for the navigation bar, reused for both views.
    const Navbar = () => (
        <div className="bg-[#4CAF50] text-white p-4 flex justify-between items-center rounded-b-xl shadow-lg">
            <div className="flex items-center gap-2">
                <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="logo" className="w-12 h-12 rounded-full" />
                <div className="flex flex-col">
                    <h3 className="text-xl font-bold">Paradise Nursery</h3>
                    <i className="text-sm italic">Where Green Meets Serenity</i>
                </div>
            </div>
            <div className="flex items-center gap-6 text-xl">
                <button onClick={() => setShowCart(false)} className="hover:text-gray-200 transition-colors">
                    Plants
                </button>
                <div className="relative">
                    <button onClick={() => setShowCart(true)} className="hover:text-gray-200 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                            <circle cx="80" cy="216" r="12"></circle>
                            <circle cx="184" cy="216" r="12"></circle>
                            <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"></path>
                        </svg>
                    </button>
                    {cartItems.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">
                            {cartItems.length}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );

    // JSX for the product list view.
    const ProductList = () => (
        <div className="p-8">
            {plantsArray.map((categoryData, index) => (
                <div key={index} className="mb-10">
                    <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">{categoryData.category}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {categoryData.plants.map((plant, plantIndex) => (
                            <div key={plantIndex} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                                <img
                                    src={plant.image}
                                    alt={plant.name}
                                    className="w-full h-48 object-cover object-center transform transition-transform duration-300 hover:scale-105"
                                />
                                <div className="p-5 flex flex-col justify-between h-[calc(100%-12rem)]">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{plant.name}</h3>
                                    <p className="text-gray-600 text-sm mb-4 flex-grow">{plant.description}</p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="text-2xl font-bold text-[#4CAF50]">{plant.cost}</span>
                                        <button
                                            onClick={() => handleAddToCart(plant)}
                                            className="bg-[#4CAF50] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#3e8e41] transition-colors shadow-md"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );

    // JSX for the shopping cart view.
    const CartItem = () => (
        <div className="p-8 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <div className="text-center text-xl text-gray-500">
                    <p>Your cart is empty. 😔</p>
                </div>
            ) : (
                <div className="space-y-6">
                    {cartItems.map((item, index) => (
                        <div key={index} className="flex items-center bg-white rounded-xl shadow-md p-6">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-24 h-24 object-cover rounded-xl mr-6"
                            />
                            <div className="flex-grow">
                                <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                                <span className="text-lg font-bold text-[#4CAF50] block mt-2">{item.cost}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-gray-700 text-xl font-medium">Qty: {item.quantity}</span>
                                <button
                                    onClick={() => handleRemoveFromCart(item.name)}
                                    className="text-red-500 hover:text-red-700 transition-colors p-2 rounded-full"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="mt-8 pt-4 border-t-2 border-gray-200 flex justify-between items-center text-2xl font-bold text-gray-800">
                        <span>Total:</span>
                        <span>${calculateTotal()}</span>
                    </div>
                </div>
            )}
            <div className="flex justify-center mt-8">
                <button
                    onClick={() => setShowCart(false)}
                    className="bg-gray-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors shadow-md"
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 font-[Inter] antialiased">
            <Navbar />
            {showCart ? <CartItem /> : <ProductList />}
        </div>
    );
};

export default App;
