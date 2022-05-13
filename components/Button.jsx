export default function Button(props) {

  const test = () => {
  }
  return (
    <button className="btn btn-outline-primary" type="submit" onClick={props.function}>{props.text}</button>
  )
}