import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider, Container, Row, Col } from "react-bootstrap";
import mytonaLogo from "./img/mytonaLogo.png";
import Seats from "./components/Seats";
import ConfirmForm from "./components/ConfirmForm";
import { useState } from "react";
import LoginModal from "./components/LoginModal";

function App() {
  const [place, setPlace] = useState(1);
  const [submited, setSubmited] = useState(false);
  const [reservedPlace, setReservedPlace] = useState([
    2, 5, 8, 10, 13, 16, 18, 19, 25,
  ]);
  const [isModalOpen, setModalOpen] = useState(true);

  const updatePlace = (val) => {
    setReservedPlace([...reservedPlace, val]);
  };

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      {isModalOpen ? (
        <LoginModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      ) : (
        <Container>
          <Row className="mt-2">
            <Col xxs={12} md={4}>
              <img src={mytonaLogo} className="App-logo" alt="logo" />
              <div>Coworking reservation</div>
            </Col>
          </Row>
          <Row>
            <Col xxs={12} md={6}>
              <Seats
                place={place}
                setPlace={setPlace}
                reservedPlace={reservedPlace}
                submited={submited}
              />
            </Col>
            <Col xxs={12} md={6}>
              <ConfirmForm
                place={place}
                submited={submited}
                setSubmited={setSubmited}
                updatePlace={updatePlace}
              />
            </Col>
          </Row>
        </Container>
      )}
    </ThemeProvider>
  );
}

export default App;
