import PropTypes from "prop-types";
function Item({ marca, ano_lancamento }) {
  return (
    <>
      <li>
        {marca} - {ano_lancamento}
      </li>
    </>
  );
}

Item.prototype = {
  marca: PropTypes.string.isRequired, //obrigatorio
  ano_lancamento: PropTypes.number,
};

Item.defaultProps = {
  //default e o padrao, caso alguem nao adicione algum campo sera mostrado o conteudo abaixo.
  marca: "Faltou adicionar a marca",
  ano_lancamento: 0,
};
export default Item;

//tag <> coringa usada para agrupar lista de filhos sem adicionar nós extra ao DOM <>

//O prototype coloca tipagem nas props
//isRequired - quando colocado reclama caso o component for vazio <item
