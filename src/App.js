import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

const App = () => {
  const [products, setProducts] = useState([
    {
      code: 10,
      name: "Smart TV Led 50 Semp",
      description:
        "SK8300 4K HDR Android Wi-Fi 3 HDMI 2 USB Controle Remoto com atalhos Chromecast Integrado",
      price: 2299.99,
      discount: 190.99,
    },
    {
      code: 11,
      name: "Smartphone Samsung Galaxy A72 128GB",
      description:
        "4G Wi-Fi Tela 6.7 Dual Chip 6GB RAM Câmera Quádrupla + Selfie 32MP - Preto",
      price: 1988.4,
      discount: 87.89,
    },
    {
      code: 12,
      name: "Smartwatch Samsung Galaxy Watch Active",
      description:
        "4O Galaxy Watch Active é o smartwatch ideal para quem tem um estilo de vida ativo e saudável. Ele é leve, confortável e monitora diariamente suas atividades físicas, e os comportamentos de nível de stress e sono",
      price: 678.6,
      discount: 110.19,
    },
  ]);

  const addProducts = (newProd) => {
    const newList = products.filter((prod) => prod.name === newProd.name);
    if (newList.length !== 1) {
      setProducts([...products, newProd]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          Preço original: R${" "}
          {products.reduce((x, prod) => x + Number(prod.price), 0)}
        </div>
        <div>
          Total de desconto: R${" "}
          {products.reduce((x, prod) => x + Number(prod.discount), 0)}{" "}
        </div>
        <div>
          Preço Final: R${" "}
          {products.reduce((x, prod) => x + Number(prod.price), 0) -
            products.reduce((x, prod) => x + Number(prod.discount), 0)}{" "}
        </div>
        <Form addProducts={addProducts} />
        <List products={products} />
      </header>
    </div>
  );
};

export default App;
