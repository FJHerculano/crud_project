import Title from "../../geral/Title"
import ModalCreate from "../modal"

export default function FirstSection() {
  return (
    <div className="d-flex justify-content-between p-3">
      <Title/>
      <ModalCreate/>
    </div>
  )
}
