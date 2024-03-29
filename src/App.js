import "./App.css";
import Products from "./components/Products";

function App() {
    const products = [
        {
            name: "Potato",
            id: 1,
            price: 30,
            available: 1,
            vendor: "Himachal Pvt Ltd",
            category: "Vegetables",
        },
        {
            name: "Banana",
            id: 2,
            price: 50,
            available: 1,
            category: "Fruits",
            vendor: "Organic farms",
        },
        {
            name: "Drumsticks",
            id: 3,
            price: 20,
            available: 0,
            category: "Vegetables",
            vendor: "Mallikarjuna farms",
        },
        {
            name: "Orange",
            id: 4,
            price: 25,
            available: 1,
            vendor: "Nagpur farms",
            category: "Fruits",
        },
    ];

    return (
        <div className="App">
            <Products items={products}/>
        </div>
    );
}

export default App;
