import { CORE_CONCEPTS } from "../../assets/data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";


export default function CoreConcepts(){

    return(
        // <section id="core-concept">
        //     <h2>Time to get started!</h2>
        //     <ul>

        //         {CORE_CONCEPTS.map((conceptItem)=><CoreConcept {...conceptItem}/>)}

        //     </ul>
        // </section>
        <Section title="Time to get started">
            <ul>
                {CORE_CONCEPTS.map((conceptItem)=><CoreConcept {...conceptItem}/>)}
            </ul>
        </Section>
    );

}