import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useMatch} from 'react-router-dom';
import ActiveSportContext from '../contexts/ActiveSport';
import { useState, useContext } from 'react';

function BasicButtonExample({links}) {


    
    const sportContext = useContext(ActiveSportContext);
    const title = links.find((link)=> { return useMatch(link.link)}) || {text: "Select sport"}
    // const title = {text: "a test"}

  const handleSelect = (eventKey) => {
    if (eventKey) {
      sportContext.setSport(eventKey)
      console.log("Selected:", eventKey);
    }
  };



    return (
   <DropdownButton id="dropdown-basic-button" title={title.text}  onSelect={handleSelect}>
     {/* <Dropdown.Item href="/">Baseball</Dropdown.Item>
     <Dropdown.Item href="/football">Football</Dropdown.Item>
     <Dropdown.Item href="/soccer">Soccer</Dropdown.Item> */}
     {links.map((link, i)=>(
        <Dropdown.Item key={i} eventKey={link.text}> {link.text}</Dropdown.Item>
     ))}
   </DropdownButton>
 );
}

export default BasicButtonExample;