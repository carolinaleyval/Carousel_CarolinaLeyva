import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Button, Carousel} from 'antd';
import imagen1 from './images/1.jpg';
import imagen2 from './images/2.jpg';
import imagen3 from './images/3.jpg';
import imagen4 from './images/4.jpg';
import imagen5 from './images/5.jpg';
import imagen6 from './images/6.jpg';
import imagen7 from './images/7.jpg';
import imagen8 from './images/8.jpg';
import imagen9 from './images/9.jpg';
import imagen10 from './images/10.jpg';
import imagen11 from './images/11.jpg';
import imagen12 from './images/12.jpg';

  function App() {

    function onChange(a, b, c) {
      console.log(a, b, c);
    }

  const contentStyle = {
    height: '820px',
    color: '#c4c4c4',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#c4c4c4',
    position: 'center',
  };

  return (
   <>
   <Carousel afterChange={onChange}>
    <div>
      <h3 style={contentStyle}>
        <img  width='100%' src={imagen1}/>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img  width='100%' src={imagen2}/>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img  width='100%' src={imagen3}/>  </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img  width='100%' src={imagen4}/></h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img  width='100%' src={imagen5}/>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img  width='100%' src={imagen6}/>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img  width='100%' src={imagen7}/>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img  width='100%' src={imagen8}/>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img  width='100%' src={imagen9}/>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img  width='100%' src={imagen10}/>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img  width='100%' src={imagen11}/>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img  width='100%' src={imagen12}/>
      </h3>
    </div>
  </Carousel>
   </>
    
  );
}

export default App;
