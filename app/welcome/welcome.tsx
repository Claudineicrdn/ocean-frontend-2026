export function Welcome() {
  
  const titulo = 'Hello Ocean!';
  
  return (
    <>
      <div className="header">
        <h1>
          {titulo}
        </h1>
      </div>
      <div className="div-link">
        <img className="img-link" src="https://i.pinimg.com/originals/68/07/bf/6807bf57a06e266c5fb07a4e81d37823.jpg" />
        <p>De: R$ 50,00</p>
        <p>Por: R$ 25,00</p>
      </div> 
      <div className="botao-comprar">
        <button>Comprar</button>
      </div>   
    </>
  );
}

