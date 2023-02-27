import React, { useState } from "react";

const MangeData = () => {
  let somaData = 10;
  console.log(somaData);

  const [number, setNumber] = useState();
  console.log(number);

  return (
    <div>
      <div>
        <p>Valor: {somaData}</p>
        <button onClick={() => (somaData = 15)}>Mudar Variável</button>
      </div>

      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(50)}>Mudar Variável</button>
      </div>
    </div>
  );
};

export default MangeData;
