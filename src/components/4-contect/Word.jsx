/* eslint-disable react/prop-types */
export default function Word(props) {
  return (
    <div className="hitie">
      <div className="hitei-2">
        <img src={props.imege} alt={props.title} />
        <div className="actione">
          <h5>{props.h5}</h5>
          <p>{props.pragh}</p>
        </div>
      </div>
      <div className="actione-2">
        <p>{props.praght}</p>
      </div>
    </div>
  );
}
