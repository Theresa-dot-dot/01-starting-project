import { EXAMPLES } from "../../assets/data";
import TabButton from "../TabButton/TabButton";
import { useState } from 'react';
import Tabs from "../TabButton/Tabs";
import Section from "../CoreConcept/Section";

export default function Examples(){

    let [selectedTopic, setSelectedTopic] = useState();
    function handleSelect(selectedButton){
        console.log('Selected Button', selectedButton);
        setSelectedTopic(selectedButton);
    }

    let tabContent= <p>Please Select a Topic</p>;
        if(selectedTopic){
            tabContent = <div id="tab-content">
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                     </pre>
                    </div>
            }

    return(
        <Section id="Examples" title="Examples">
                <Tabs buttonsContainer="menu" buttons={<>
                    <TabButton isSelected={selectedTopic==='components'} onClick={()=>handleSelect('components')}>Components</TabButton>
                    <TabButton isSelected={selectedTopic==='jsx'} onClick={()=>handleSelect('jsx')}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic==='props'} onClick={()=>handleSelect('props')}>Props</TabButton>
                    <TabButton isSelected={selectedTopic==='state'} onClick={()=>handleSelect('state')}>State</TabButton>                    
                    </>}>
                    {tabContent}
                </Tabs>
        </Section>
    );

}