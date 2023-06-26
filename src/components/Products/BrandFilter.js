const BrandFilter = ({ filterCategory, categoryChanged, label, all }) => {
  const selectChangeHandler = (event) => {
    categoryChanged(parseInt(event.target.value, 10));
  };

  return (
    <div className="Filter_Div">
      <label>{label} </label>
      <select value={filterCategory} onChange={selectChangeHandler}>
        {all && <option value={0}>Todas</option>}
        <option value={1}>Razer</option>
        <option value={2}>Logitech</option>
        <option value={3}>Redragon</option>
        <option value={4}>Steelseries</option>
        <option value={5}>HyperX</option>
        <option value={6}>Kingston</option>
        <option value={7}>Intel</option>
        <option value={8}>AMD</option>
      </select>
    </div>
  );
};

export default BrandFilter;
