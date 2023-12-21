import Application from "./Application";
import Banner from "./Banner";
import ToDo from "./ToDo";
import WhatDo from "./WhatDo";

const Landing = () => {
    return (
        <div>
        <Banner></Banner>
        <ToDo></ToDo>
        <WhatDo></WhatDo>
        <Application></Application>
        </div>
    );
};

export default Landing;