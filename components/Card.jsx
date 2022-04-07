
export default function Card(props) {
  return (
    <div className="shadow p-3 mb-5 bg-white rounded">
      <div className="card h-100">
        { props.children }
      </div>
    </div>
  )
}