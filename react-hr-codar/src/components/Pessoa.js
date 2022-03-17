function Pessoa({ foto, nome, idade, profissao }) {
  //desestruturas props: colocar entre chaves dentro do parentese
  return (
    <div>
      <img src={foto} alt={nome} />
      <h2>Nome: {nome}</h2>
      <p>idade:{idade}</p>
      <p>profissao: {profissao}</p>
    </div>
  );
}

export default Pessoa;

//props são passados para o componente (como parâmetros de funções)
