import { useState } from "react";
import ReactDOM from 'react-dom/client';

function Form() {

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Success`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your lastname: 
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Form />);
export default Form;