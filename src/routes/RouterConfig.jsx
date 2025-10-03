import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../components/pages/Home";
import PerfilAdmin from "../components/pages/VistaAdmin";
import PerfilCliente from "../components/pages/VistaClient";


const RouterConfig = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/perfil-admin" component={PerfilAdmin} />
            <Route path="/perfil-cliente" component={PerfilCliente} />

        </Switch>

    </Router>

);

export default RouterConfig;