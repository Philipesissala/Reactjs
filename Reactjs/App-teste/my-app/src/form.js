import React from "react";

const Form = () => {
 
  const estiloInput = {
    width: "200px",
    height: "30px",
    outline: "none",
    marginTop: "10px",
    backgroundColor: "lightgray",
    border: "solid 2px blue",
  };
  return (
    <div>
      <form>
        <div>
          <label htmlFor="nome">Nome</label>
          <input style={estiloInput} type="text" id="nome" />
        </div>
        <div>
          <label htmlFor="idade">Idade</label>
          <input style={estiloInput} type="text" id="idade" />
        </div>
        <div>
          <label htmlFor="morada">Morada</label>
          <input style={estiloInput} type="text" id="morada" />
        </div>
        <button>Salvar</button>
      </form>
    </div>
  );
};

export default Form;
