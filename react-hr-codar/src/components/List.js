import Item from "./item";

function List() {
  return (
    <>
      <h1>Lista do pai</h1>
      <ul>
        <Item marca="Intel" ano_lancamento={1980} />
        <Item marca="AMD" ano_lancamento={1985} />
        <Item />
      </ul>
    </>
  );
}

export default List;

//number passam entre {}
