const ProductItem = (props) => {
    const availability = props.available === 0 ? "Not Available" : "Available";
    // console.log(props.available)
    return (
        <div>
            <div>
                <h1>{props.name}</h1>
                <h3>({availability})</h3>
            </div>
            <div>
                ₹{props.price}
            </div>
            <div>{props.category}</div>
            <div>{props.vendor}</div>
        </div>
    )
}

export default ProductItem
