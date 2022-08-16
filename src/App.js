import logo from './logo.svg';
import React, {useState} from "react";
import './App.css';
import Icon from "./components/Icon";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
 

const itemArray = new Array(9).fill("empty");
const App = () => {
  const [isCross,setIsCross] = useState(false);
  const [winMessage, setWinmessage] = useState("");
  const [isTie, setIsTie] = useState(false);
  var backg = document.getElementById('back');
  const reloadGame = () => {
    setIsCross(false);
    setWinmessage("");
    itemArray.fill("empty");
    setIsTie(false);
  }
  const changeItem = (itemNumber) => {
    if (winMessage) {
      return(toast(winMessage,{type:"success"}))
    }

    if (itemArray[itemNumber]==="empty") {
      itemArray[itemNumber] = isCross ? ("cross") : ("circle");
      setIsCross(!isCross);
    } else {
      return(toast("already turned",{type:"error"}))
    }

    chechIsWinner();
  }
  const chechIsWinner = () => {
    
    if (itemArray[0] === itemArray[1] && itemArray[0] === itemArray[2] && itemArray[0] !== "empty") {
      setWinmessage(`${itemArray[0]} wins`);
    } else if (itemArray[3] === itemArray[4] && itemArray[3] === itemArray[5] && itemArray[3] !== "empty") {
      setWinmessage(`${itemArray[3]} wins`);
    } else if (itemArray[6] === itemArray[7] && itemArray[6] === itemArray[8] && itemArray[6] !== "empty") {
      setWinmessage(`${itemArray[6]} wins`);
    }else if (itemArray[0] === itemArray[3] && itemArray[0] === itemArray[6] && itemArray[0] !== "empty") {
      setWinmessage(`${itemArray[0]} wins`);
    }else if (itemArray[1] === itemArray[4] && itemArray[1] === itemArray[7] && itemArray[1] !== "empty") {
      setWinmessage(`${itemArray[1]} wins`);
    }else if (itemArray[2] === itemArray[5] && itemArray[2] === itemArray[8] && itemArray[2] !== "empty") {
      setWinmessage(`${itemArray[2]} wins`);
    }else if (itemArray[0] === itemArray[4] && itemArray[0] === itemArray[8] && itemArray[0] !== "empty") {
      setWinmessage(`${itemArray[0]} wins`);
    }else if(itemArray[6] === itemArray[4] && itemArray[6] === itemArray[2] && itemArray[6] !== "empty"){
      setWinmessage(`${itemArray[6]} wins`);
    } else if (itemArray[0] !== "empty" && itemArray[0] !== "empty" && itemArray[1] !== "empty" &&
      itemArray[2] !== "empty" && itemArray[3] !== "empty" && itemArray[4] !== "empty"
      && itemArray[5] !== "empty" && itemArray[6] !== "empty" && itemArray[7] !== "empty"
      && itemArray[8] !== "empty") {
      setIsTie(true);
      }
  }
  return (
    <>
      <Container style={{ marginTop: "200px" }}>
      <h4 style={{textAlign:"center",marginBottom:"20px"}}>This is the TicTac Game</h4>
        <ToastContainer />
        <Row>
          <Col md={6} className="offset-5">
            {winMessage ? (
              <div className="my-2">
                <h1 className="text-success text-uppercase">
                  {winMessage}
                </h1>
                <Button color="success" block onClick={reloadGame}>Reload The Game</Button>
              </div>
            ) : (
                <h1 className="text-warning">
                  {isCross ? "cross":"circle"} turn
                </h1>
            )}
            {isTie ? (
              
              <div className="my-2">
                <h1 className="text-success text-uppercase">
                  Tie
                </h1>
                <Button color="success" block onClick={reloadGame}>Reload The Game</Button>
              </div>
            ) :  ("")}
            <div className="grid">
              {itemArray.map((item,index) => (
                // <Card  style={{width:"50px"}} onClick={()=>changeItem(index)}>
                  <CardBody onClick={()=>changeItem(index)}    className="box back">
                    <Icon  name={item} />
                  </CardBody>
                // </Card>
              ))}
              
            </div>
            
          </Col>
        </Row>
        </Container>
    </>
  )} 

export default App;
