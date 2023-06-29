import { useState } from 'react';

const Form = ({ addColor }) => {
  const [color, setColor] = useState(); //controlled inputs
  const handleColor = e => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <section className='container'>
      <h1>Color-genrator</h1>
      <form className='color-form' onSubmit={handleColor}>
        <input type='color' value={color} onChange={e => setColor(e.target.value)} />
        <input type='text' value={color} onChange={e => setColor(e.target.value)} placeholder='#f15025' />
        <button className='btn' type='submit' style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
};
export default Form;
