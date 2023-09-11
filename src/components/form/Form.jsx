import Button from "../button/Button";
import Panel from "../panel/Panel";

function Form({ children }) {
    return (
      <Panel title="Bienvenido">
        <Button>Registrarse</Button>
        <Button>Iniciar sesión</Button>
      </Panel>
    );
}
export default Form;