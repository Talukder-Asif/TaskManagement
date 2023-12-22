import Application from "./Application";
import Banner from "./Banner";
import Testimonial from "./Testimonial";
import ToDo from "./ToDo";
import WhatDo from "./WhatDo";

const Landing = () => {
    return (
        <div>
        <Banner></Banner>
        <ToDo></ToDo>
        <WhatDo></WhatDo>
        <Application></Application>
        <Testimonial></Testimonial>
        </div>
    );
};

export default Landing;