import "../App.css";
import Seat from "./Seat";

const SeatsRow1 = Array.from({ length: 7 }, (_, i) => i + 1);
const SeatsRow2 = Array.from({ length: 7 }, (_, i) => i + 8);
const SeatsRow3 = Array.from({ length: 7 }, (_, i) => i + 15);
const SeatsRow4 = Array.from({ length: 7 }, (_, i) => i + 22);

function Seats(props) {
  return (
    <div className="my-5">
      <div className="mainWindow">A window with a view of Bangkok</div>
      <div className="tableRowsContainerMain">
        <div className="tableRowsContainer">
          <div className="tableRows">
            <div>
              {SeatsRow1.map((item) => (
                <Seat key={item} number={item} revert {...props} />
              ))}
            </div>
            <div>
              {SeatsRow2.map((item) => (
                <Seat key={item} number={item} {...props} />
              ))}
            </div>
          </div>
          <div className="tableRows">
            <div>
              {SeatsRow3.map((item) => (
                <Seat key={item} number={item} revert {...props} />
              ))}
            </div>
            <div>
              {SeatsRow4.map((item) => (
                <Seat key={item} number={item} {...props} />
              ))}
            </div>
          </div>
        </div>
        <div className="meetingRoom">
          <div className="meetingRoomTable">Meeting room</div>
        </div>
      </div>
    </div>
  );
}

export default Seats;
