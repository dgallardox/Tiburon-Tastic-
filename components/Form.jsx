import Card from "./Card"
import Button from "./Button"

export default function Form(props) {
  return (
    <>
    <div className="row row-cols-1 row-cols-md-3 g-4">
    <Card>
    <form>
            {props.children}
      </form>
      </Card>
      </div>
      </>
  )
}