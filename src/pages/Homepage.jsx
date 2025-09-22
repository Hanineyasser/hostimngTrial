import React from "react";
import Slidercomponent from "../components/Slidercomponent.jsx";
import Aboutcomponent1 from "../components/Aboutcomponent1.jsx";
import Contactcomponent1 from "../components/Contactcomponent1.jsx";
import HomepageComponent1 from "../components/HomepageComponent1.jsx";

function Homepage() {
    return (
        <>
            <HomepageComponent1 />
            <Slidercomponent />
            <Aboutcomponent1 />
            <Contactcomponent1 />
        </>
    );
}

export default Homepage;
