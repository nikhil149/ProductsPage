import ProductItem from "./ProductItem"
const Products = ({items}) => {
    return (
        <div>
            <ProductItem
                name={items[0].name}
                price={items[0].price}
                vendor={items[0].vendor}
                category={items[0].category}
                available={items[0].available}
            />
            <ProductItem
                name={items[1].name}
                price={items[1].price}
                vendor={items[1].vendor}
                category={items[1].category}
                available={items[1].available}
            />
            <ProductItem
                name={items[2].name}
                price={items[2].price}
                vendor={items[2].vendor}
                category={items[2].category}
                available={items[2].available}
            />
            <ProductItem
                name={items[3].name}
                price={items[3].price}
                vendor={items[3].vendor}
                category={items[3].category}
                available={items[3].available}
            />
        </div>
    )
}

export default Products
