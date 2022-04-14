import Nav from "./Navbar"
import Title from "./Title"

// active = "nav-link active"
// inactive = "nav-link" 

export default function Layout(props) {
  return (
    <div className="docDiv">
      <div id="footerDiv">
      <Nav home={props.home} blog={props.blog} submit={props.submit} />
      <div id="doc">
        <Title title={props.title}/>
      { props.children }
      </div>
        </div>
    </div>
  )
}