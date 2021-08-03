import { useState } from "react";
import ProductFilter from "./ProductFilter";
import ProductItem from "./ProductItem";
import ProductModal from "./ProductModal";
const Products = ({ items }) => {
    const [category, setCategory] = useState("Fruits");
    const [isModal, setIsModal] = useState(false)
    const [productName, setProductName] = useState('')

    const filterChangeHandler = (selectedCategory) => {
        setCategory(selectedCategory);
    };
    const filteredProducts = items.filter(item => {
        return item.category === category;
      });
    
      const buyProductsModal = (modal,name)=>{
        setIsModal(modal)
        setProductName(name)
      }

      const closeProductModal=()=>{
          setIsModal(false)
          setProductName('')
      }
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
                    onSetModal={buyProductsModal}
                />
            ))}
            {isModal && <ProductModal name={productName} onConfirm={closeProductModal}/>}
        </div>
    );
};

export default Products;
