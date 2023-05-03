import { ClassSlot } from './ClassSlot'
import allClassesArray from "./classes.json"
import './modal.css'

export function Modal () {

    //Classes State
  const [currentClass, setCurrentClass] = useState({});
  const [showModal, setShowModal] = useState("grid");

  const classModalStyle = {
    "display" : showModal
  }

  return (
  <>

      <App />
  </>
  )
}