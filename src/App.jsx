import { useState } from 'react';
import ColorList from './ColorList';
import Form from './Form';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  const [colors, setColor] = useState(new Values('#f15025').all(10));
  const addColor = color => {
    try {
      console.log('color argumetn>>>>>>>>', color);
      const newcolor = new Values(color).all(10);
      setColor(newcolor);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position='top-center' />
    </>
  );
};
export default App;
