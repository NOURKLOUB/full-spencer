/* eslint-disable react/prop-types */


export default function Add(props) {
  return (
    <div className="liune">
         <p className='hes-1'>{props.title}</p>
        <h1>{props.write}</h1>
        <p className='hes-2'>{props.paragraph}</p>
        <span>{props.zunhr}</span>
      </div>
  )
}



