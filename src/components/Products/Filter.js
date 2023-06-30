const Filter = ({ filterCategory, categoryChanged, label, all }) => {
  const selectChangeHandler = (event) => {
    categoryChanged(parseInt(event.target.value, 10));
  };

  return (
    <div className="Filter_Div">
      <label>{label} </label>
      <select value={filterCategory} onChange={selectChangeHandler}>
        {all && <option value={0}>Todas</option>}
        <option value={1}>Auriculares</option>
        <option value={2}>Teclado</option>
        <option value={3}>Mouse</option>
        <option value={4}>Procesadores</option>
        <option value={5}>Motherboards</option>
        <option value={6}>Memorias</option>
        <option value={7}>Gabinetes</option>
        <option value={8}>Fuentes</option>
        <option value={9}>Almacenamiento</option>
        <option value={10}>Placas de Video</option>
      </select>
    </div>
  );
};

export default Filter;
