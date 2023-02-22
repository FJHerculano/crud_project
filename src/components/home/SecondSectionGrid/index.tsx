import { useEffect, useState } from "react"
import api from "../../../services/api"

interface IProject {
  id:number;
  project:string;
  client: string;
  date_initial: Date;
  deadline: Date;
  budget: number;
  status: boolean;
  situacao: string;
}

export default function SecondSectionGrid() {

  const [projects, setProjects] = useState<IProject[]>([])

  useEffect(() => {
    loadProjects()
  }, [])
  
  async function loadProjects() {
    const response = await api.get('/api/projects')
    console.log(response)
    setProjects(response.data)
  }

    return (
      <>

              <div className="col-md-3 col-lg-4 col-sm-12 my-2">
            {
              projects.map(project =>(
              <div className="card border border-2" >
                
                <div className="card-body">
                  <div className="d-block">
                    <span className="col-4 fw-bold text-nowrap bd-highlight">Empresa:</span>
                    <span>{project.client}</span>
                  </div>
                                 
                  <div className="d-block">
                    <span className="col-4 fw-bold text-nowrap bd-highlight">Projeto:</span>
                    <span>{project.project}</span>
                  </div>
                                 
                  <div className="d-block">
                    <span className="col-4 fw-bold text-nowrap bd-highlight">Tipo do projeto:</span>
                    <span>Recorrente</span>
                  </div>
                                      
                  <div className="d-block">
                    <span className="col-4 fw-bold text-nowrap bd-highlight">status:</span>
                    <span>{project.status ? "Liberado" : "Bloqueado"}</span>
                  </div>
                                         
                  <div className="d-block">
                    <span className="col-4 fw-bold text-nowrap bd-highlight">Lider:</span>
                    <span>Dado estatico</span>
                  </div>
                                           
                  <div className="d-block">
                    <span className="col-4 fw-bold text-nowrap bd-highlight">Tarefas abertas:</span>
                    <span>Dado estatico</span>
                  </div>
                         
                  <div className="d-flex">
                    <span className="col-4 fw-bold text-nowrap bd-highlight">Situação:</span>
                  </div>

                  <div className="d-flex justify-content-center">                      
                    <button className="btn btn-sm btn-success px-5">{project.situacao}</button>
                  </div>

                </div>

              </div>
               ))
              }
            </div>
           
           
      </>
    )
  }
  