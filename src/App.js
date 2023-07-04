import React from 'react';
import Accordion from './components/Accordion';
import './App.css'

const App = () => {
  return (
    <div className='container'>
      <h1>Questions</h1>
      
      <Accordion title="Do I Have To Allow The Use Of Cookies?">
        <p>Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.</p>
      </Accordion>
      <Accordion title="How Do I Change My My Page Password?">
        <p>Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.</p>
      </Accordion>
      <Accordion title="What Is BankID?">
        <p>Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.</p>
      </Accordion>
      <Accordion title="Whose Birth Number Can I Use?">
        <p>Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.</p>
      </Accordion>
      <Accordion title="When Do I Recieve A Password Ordered By Letter?">
        <p>Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan</p>
      
        
      </Accordion>
      </div>
    
  );
};

export default App;
