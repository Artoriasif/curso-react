import Button from "../components/evento/Button";

function Evento({ numero, titulo }) {
  function meuEvento() {
    console.log(`Ativado!`);
  }

  function segundoEvento() {
    console.log("ativado segundo evento");
  }

  return (
    <div>
      <p>Clique para disparar um evento:</p>
      <Button event={meuEvento} text="Primeiro evento" />
      <Button event={segundoEvento} text="segundo evento" />
    </div>
  );
}

export default Evento;

//e.preventDefault() - para a execuçao do formulario
