import { useState } from "react";
import ProductFilter from "./ProductFilter";
import ProductItem from "./ProductItem";
const Products = ({ items }) => {
    const [category, setCategory] = useState("Fruits");

    const filterChangeHandler = (selectedCategory) => {
        setCategory(selectedCategory);
    };
    const filteredProducts = items.filter(item => {
        return item.category === category;
      });

    return (
        <div>
            <ProductFilter
                selected={category}
                onChangeFilter={filterChangeHandler}
            />
            {filteredProducts.map((item) => (
                <ProductItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    vendor={item.vendor}
                    category={item.category}
                    available={item.available}
                />
            ))}
        </div>
    );
};

export default Products;
