import { Fragment } from "react";
const ProductItem = (props) => {
    const availability = props.available === 0 ? "Not Available" : "Available";
    // console.log(props.available)

    const modalChangeHandler =(event)=>{
        props.onSetModal(true,props.name)
    }
    // const closeModal=(event)=>{
    //     props.onSetModal(false)
    // }

    return (
        <Fragment>
            <div>
                <div>
                    <h1 onClick={modalChangeHandler}>{props.name}</h1>
                    <h3>({availability})</h3>
                </div>
                <div>₹{props.price}</div>
                <div>{props.category}</div>
                <div>{props.vendor}</div>
            </div>
            
        </Fragment>
    );
};

export default ProductItem;
