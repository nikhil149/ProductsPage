import "./ProductModal.css";
const ProductModal = (props) => {
    return (
        <div className="backdrop">
            <div className="modal">
                <header className="header">
                    <h1>{props.name}</h1>
                </header>
                <form className="form">
                    <div>
                        <label htmlFor="quantity">Enter Quantity</label>
                        <input type="number" min="1" max="10" />
                    </div>
                    <div>
                        <button type="submit"> Buy </button>
                        <button type="button" onClick={props.onConfirm}> Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductModal;
