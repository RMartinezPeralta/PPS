const Filter = ({ filterCategory, categoryChanged, label, all }) => {
  const selectChangeHandler = (event) => {
    categoryChanged(parseInt(event.target.value, 10));
  };

  return (
    <div className="Filter_Div">
      <label>{label} </label>
      <select value={filterCategory} onChange={selectChangeHandler}>
        {all && <option value={0}>Todos</option>}
        <option value={4}>Auriculares</option>
        <option value={5}>Teclado</option>
        <option value={6}>Mouse</option>
        <option value={7}>Procesadores</option>
        <option value={8}>Motherboards</option>
        <option value={9}>Memorias</option>
        <option value={10}>Gabinetes</option>
        <option value={11}>Fuentes</option>
        <option value={12}>Almacenamientos</option>
        <option value={13}>Placas de Video</option>
      </select>
    </div>
  );
};

export default Filter;
