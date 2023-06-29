import { toast } from 'react-toastify';

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;
  const copyClickBoard = async () => {
    try {
      await navigator.clipboard.writeText(`#hex:${hex}`);
      toast.success(`copied to click board  `);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <article className={index > 10 ? 'color color-light' : 'color'} style={{ background: `#${hex}` }} onClick={copyClickBoard}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </article>
  );
};
export default SingleColor;
