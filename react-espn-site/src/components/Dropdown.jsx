import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ActiveSportContext from '../contexts/ActiveSport';
import { useState, useContext } from 'react';

function BasicButtonExample({ links }) {
  const sportContext = useContext(ActiveSportContext);

  const [title, setTitle] = useState("Select sport");

  const handleSelect = (eventKey) => {
    if (eventKey) {
      sportContext.setSport(eventKey);
      setTitle(eventKey);
      console.log("Selected:", eventKey);
    }
  };

  return (
    <DropdownButton id="dropdown-basic-button" title={title} onSelect={handleSelect}>
      {links.map((link, i) => (
        <Dropdown.Item key={i} eventKey={link.text}>{link.text}</Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

export default BasicButtonExample;