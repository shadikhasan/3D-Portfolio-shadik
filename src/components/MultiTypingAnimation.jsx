import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const MultiTypingAnimation = ({ 
  texts = ['Professional in Full Stack Web application.',
            'Professional in Frontend application.', 
            'Professional in Django Backend application.', 
            'Professional in Django REST API.', 
            'Professional in React application.'
          ], 
  speed = 50, 
  delay = 1000 
}) => {
  return (
    <div style={{ textAlign: 'left', marginTop: '5px' }}>
      <TypeAnimation
        sequence={[
          ...texts.reduce((acc, text) => [...acc, text, delay], []), // Append each text followed by delay
        ]}
        wrapper="span"
        speed={speed} // Typing speed
        style={{ fontSize: '2em', display: 'inline-block', color: '#007bff' }} // Styling the text
        repeat={Infinity} // Repeat the sequence indefinitely
      />
    </div>
  );
};

export default MultiTypingAnimation;
