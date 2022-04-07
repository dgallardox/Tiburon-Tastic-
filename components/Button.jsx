export default function Button(props) {

  const test = () => {
    console.log("testing")
  }
  return (
    <button className="btn btn-outline-primary" type="submit" onClick={props.function}>{props.text}</button>
  )
}