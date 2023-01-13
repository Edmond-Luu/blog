import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

export default function BootstrapAccordion(props) {

    const accordionElements = props.accordionContents.map((item, index) => {
        return (
            <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header><span id="accordionTitle">{item.icon ? item.icon : ""} {item.icon ? <p>&nbsp; &nbsp;</p> : ""} {item.title}</span></Accordion.Header>
                <Accordion.Body>
                    {item.text}

                    <div className={item.subtextB && item.urlB ? "multiSubtext" : ""}></div>

                    <div><a href={item.urlA} target="_blank" rel="noreferrer">{item.subtextA}</a></div>

                    {item.subtextB && item.urlB ?
                        <div className="accSubtextB"><a href={item.urlB} target="_blank" rel="noreferrer">{item.subtextB}</a></div> :
                        ""}
                </Accordion.Body>
            </Accordion.Item>
        )
    })

    return (
        <Accordion id="accordion">
            {accordionElements}
        </Accordion>
    )
}
