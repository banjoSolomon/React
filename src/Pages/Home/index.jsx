import Hero from "./Hero";
import Clients from "./Client/client.index";
import Section2 from "./Sections/section2";
import Section3 from "./Sections/section3";
import Section4 from "./Sections/section4";
const Home = ()=>{
    return(
        <>
            <Hero/>
            <Clients/>
            <Section2/>
            <Section3/>
            <Section4/>
        </>
    )
}

export default Home;
