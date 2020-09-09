import FabricSearch from "../components/views/FabricSearch";
import PatternSearch from "../components/views/PatternSearch";
import Home from "../components/views/Home";

var ROUTES = [
    {
        "path": "/patterns",
        "label": "Patterns",
        "component": PatternSearch
    },
    {
        "path": "/fabrics",
        "label": "Fabric",
        "component": FabricSearch
    },
    {
        "path": "/",
        "label": "Home",
        "component": Home
    }
];

export default ROUTES;