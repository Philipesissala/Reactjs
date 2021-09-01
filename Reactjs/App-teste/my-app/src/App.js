import React from "react";

const App = () => {
  const nome = "Filipe sissala";
  const estiloH = {
    color: "blue",
  };

  const estiloP = {
    letterSpacing: 0.7,
  };
  return (
    <div>
        {nome}
      <h1 style={estiloH}>Meu App</h1>
      <p style={estiloP}>Meu primeiro app feito com Reactjs.</p>
    </div>
  );
};

export default App;
