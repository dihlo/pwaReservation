import "../App.css";

function Seat({ revert, number, setPlace, place, reservedPlace, submited }) {
  return (
    <div
      className={`tableContainer ${revert && "revertTable"} `}
      onClick={() => {
        if (!submited && !reservedPlace.includes(number)) setPlace(number);
      }}
    >
      <div
        className={`tableWork ${revert && "revertTable"} ${
          number === place && "selectedPlace"
        } ${reservedPlace.includes(number) && "reservedPlace"}  ${
          submited && "reservedPlaceSubmited"
        }`}
      >
        {number}
      </div>
      <div className="chair"></div>
    </div>
  );
}

export default Seat;
