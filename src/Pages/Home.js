import { useRef } from "react"
import Notes from "../components/Notes"

const Home = (props) => {
  const ref = useRef(null)


  return (
    <div ref={ref} className="container my-3">
      <Notes showAlert={props.showAlert} mode={props.mode} reference={ref} />
    </div>

  )
}

export default Home
