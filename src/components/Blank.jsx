import { useContext, useState } from 'react';
import AnswerContext from './AnswerContext'

const Blank = ({ answer }) => {
  const [revealed, setRevealed] = useState(false);
  const isShow=useContext(AnswerContext)
  console.log(isShow)
  return (
    <span
      onClick={() => {
        if(!isShow)setRevealed(!revealed)
      }}
      style={{
        display: 'inline-block',
        minWidth: '80px',
        borderBottom: '2px solid #333',
        color: (revealed||isShow) ? '#d32f2f' : 'transparent',
        fontWeight: (revealed||isShow) ? 'bold' : 'normal',
        cursor: 'pointer',
        textAlign: 'center',
        userSelect: 'none',
        backgroundColor: (revealed||isShow) ? '#ffebee' : 'transparent',
        padding: (revealed||isShow) ? '0 4px' : '0',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        if (!(revealed||isShow)) {
          e.target.style.backgroundColor = '#f0f0f0';
        }
      }}
      onMouseLeave={(e) => {
        if (!(revealed||isShow)) {
          e.target.style.backgroundColor = 'transparent';
        }
      }}
    >
      {(revealed||isShow) ? answer : '    '}
    </span>
  );
};

export default Blank;