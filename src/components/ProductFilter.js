const ProductFilter = (props) => {
    const dropdownChangeHandler=(event)=>{
        props.onChangeFilter(event.target.value)
    }
    return (
        <div>
            <label>Filter by Category</label>
            <select value={props.selected} onChange={dropdownChangeHandler}>
                <option value="Vegetables">Vegetables</option>
                <option value="Fruits">Fruits</option>
            </select>
        </div>
    );
};

export default ProductFilter;
