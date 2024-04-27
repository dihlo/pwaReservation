import { useState } from "react";
import "../App.css";
import { Form, Button } from "react-bootstrap";
import mytonaLogo from "../img/submited.gif";

function ConfirmForm({ place, setSubmited, submited, updatePlace }) {
  const [valueName, setValueName] = useState("");
  const [monitor, setMonitor] = useState(false);
  const [time, setTime] = useState("Full day");

  const onNameChange = ({ target: { value } }) => setValueName(value);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    updatePlace(place);
    setSubmited(true);
  };

  const handleMonitorChange = () => {
    setMonitor(!monitor);
  };

  const handleTimeChange = (time) => {
    setTime(time);
  };

  const title = `
  ${valueName} place ${place} reserved for you to ${time.toLocaleLowerCase()}${
    monitor ? " with monitor." : "."
  }`;

  return (
    <div className="mt-md-3 mb-5">
      {submited ? (
        <div className="submited">
          <div>
            <img src={mytonaLogo} className="App-logo mb-3" alt="logo" />
          </div>
          <div>{title}</div>
        </div>
      ) : (
        <div>
          <div className="selectedPlaceTitle">{`${
            place ? `Selected place ${place}` : ""
          }`}</div>
          <Form onSubmit={handleSubmit} className="mt-3">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                required
                type="text"
                placeholder="Enter your name"
                onChange={onNameChange}
                value={valueName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Need monitor"
                onChange={handleMonitorChange}
                checked={monitor}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox1"
              required
            >
              <Form.Label>Reservation time</Form.Label>
              <Form.Check
                label="Full day"
                name="group1"
                type="radio"
                onChange={() => handleTimeChange("Full day")}
                checked={time === "Full day"}
              />
              <Form.Check
                label="Half day before lunch"
                name="group1"
                type="radio"
                onChange={() => handleTimeChange("Half day before lunch")}
                checked={time === "Half day before lunch"}
              />
              <Form.Check
                label="Half day after lunch"
                name="group1"
                type="radio"
                onChange={() => handleTimeChange("Half day after lunch")}
                checked={time === "Half day after lunch"}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
}

export default ConfirmForm;
