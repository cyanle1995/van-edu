import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./styles.scss";
import Button from "components/button/Button";
import { useHistory } from "react-router-dom";


const Intro = () => {
  const history = useHistory();

  const [status, setStatus] = useState(1);
  const onChangeStatus = (status) => {
    setStatus(status)
    if (status === 1) {
      history.push('/login')
    }
  }
  const onCancel = () => {
    setStatus(status)
  }
  return (
    <Container className="intro-container">
      <div className="intro-header"><div className="intro-header-cancel" onClick={onCancel}>Bỏ qua</div></div>
      {status === 1 && <div className="slider-layout">
        <img className="slider-img" src="/intro1.svg" alt="image" />
        <div className="slider-title">Find clarity amidst the chaos</div>
        <div className="slider-des">Its easy to clear you mind and start learning something new</div>
        <Button className='intro-button' key="back" text="Tiếp tục" background="#6059E3" width={'70%'} onClick={()=>onChangeStatus(2)}/>
      </div>}
      {status === 2 && <div className="slider-layout">
        <img className="slider-img" src="/intro2.svg" alt="image" />
        <div className="slider-title">Find clarity amidst the chaos</div>
        <div className="slider-des">Its easy to clear you mind and start learning something new</div>
        <Button className='intro-button' key="back" text="Tiếp tục" background="#6059E3" width={'70%'} onClick={()=>onChangeStatus(3)}/>
      </div>}
      {status === 3 && <div className="slider-layout">
        <img className="slider-img" src="/intro3.svg" alt="image" />
        <div className="slider-title">Find clarity amidst the chaos</div>
        <div className="slider-des">Its easy to clear you mind and start learning something new</div>
        <Button className='intro-button' key="back" text="Bắt đầu" background="#6059E3" width={'70%'} onClick={()=>onChangeStatus(1)}/>
      </div>}
    </Container>
  );
};
export default Intro;
