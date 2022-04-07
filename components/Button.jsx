export default function Button(props, {onClick}) {
  return (
    <button type="submit" onClick={onClick}>{props.text}</button>
  )
}