import Card from "./Card"
import Button from "./Button"

export default function Form(props) {
  return (
    <Card>
      <form>
  <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label">I agree to the terms and conditions</label>
        </div>
        <Button text="submit" function={ props.function }/>
</form>
    </Card>
  )
}