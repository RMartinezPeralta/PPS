const LoadingScreen = () => {
  return (
    <div className="LoadingScreen">
      <h1>
        <strong>CARGANDO</strong>
        <div>
          {" "}
          <img className="LoadingImage" src={"https://i.imgur.com/cm3jo2x.png"} alt="Imagen no encontrada" />
        </div>
      </h1>
    </div>
  );
};

export default LoadingScreen;
