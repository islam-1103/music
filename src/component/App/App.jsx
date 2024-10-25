import React from "react";

import Header from "../Header/Header";
import AppRoutes from "./AppRoutes";
import Footer from "../Footer/Footer";

import "../../styles/index.scss"

const App = () => (
<div className="app">
    <Header />
    <AppRoutes />
    <Footer />
</div>
);

export default App;
