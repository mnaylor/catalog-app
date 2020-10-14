import FabricSearch from "../components/views/FabricSearch";
import PatternSearch from "../components/views/PatternSearch";
import PatternView from "../components/views/PatternView";
import Home from "../components/views/Home";

var ROUTES = [
    {
        path: "/",
        label: "Home",
        innerComponent: Home,
        isNavDrawer: true,
        isExact: true
    },
    {
        path: "/patterns",
        label: "Patterns",
        innerComponent: PatternSearch,
        isNavDrawer: true
    },
    {
        path: "/fabrics",
        label: "Fabric",
        innerComponent: FabricSearch,
        isNavDrawer: true
    },
    {
        path: "/pattern/:id",
        label: "pattern",
        innerComponent: PatternView
    }
];

export default ROUTES;