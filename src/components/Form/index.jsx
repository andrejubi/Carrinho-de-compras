import { useState } from "react";
import "./style.css";

const Form = ({ addProducts }) => {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [disc, setDisc] = useState("");

  const card = {
    code: code,
    name: name,
    description: desc,
    price: price,
    discount: disc,
  };

  return (
    <div className="form">
      <input
        type="number"
        placeholder="Code"
        onChange={(event) => setCode(event.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Descrição"
        onChange={(event) => setDesc(event.target.value)}
      />
      <input
        type="number"
        placeholder="Preço"
        onChange={(event) => setPrice(event.target.value)}
      />
      <input
        type="number"
        placeholder="Desconto"
        onChange={(event) => setDisc(event.target.value)}
      />
      <button onClick={() => addProducts(card)}>Novo produto</button>
    </div>
  );
};

export default Form;
