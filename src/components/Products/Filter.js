const Filter = ({ filterCategory, categoryChanged, label, all }) => {
  const selectChangeHandler = (event) => {
    categoryChanged(event.target.value);
  };

  return (
    <div className="Filter_Div">
      <label>{label} </label>
      <select value={filterCategory} onChange={selectChangeHandler}>
        {all && <option value="All">Todos</option>}
        <option value="Clavos">Clavos</option>
        <option value="Tornillos">Tornillos</option>
        <option value="Destornilladores">Destornilladores</option>
        <option value="Herramientas">Herramientas</option>
      </select>
    </div>
  );
};

export default Filter;
