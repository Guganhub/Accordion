import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
        
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <button className='btn'><span className={`icon ${isOpen ? 'open' : ''}`}>{isOpen ? <i class="fa-solid fa-minus"></i>:<i class="fa-solid fa-plus"></i>}</span></button>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
