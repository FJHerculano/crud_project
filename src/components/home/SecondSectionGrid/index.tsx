import { useEffect, useState } from "react"
import api from "../../../services/api"
import './styles.css'


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
  const [situacao, setSituacao] = useState()


  useEffect(() => {
    loadProjects()
  }, [])
  
  async function loadProjects() {
    const response = await api.get('/api/projects')
    console.log(response)
    setProjects(response.data)
  }
  
  // pesquisar documentos de como mudar propriedades css 
  // const verificaSituacao = () =>{
  //   setSituacao(
  //     projects.map(project=>(
  //       if(){
  
  //       }
  //     ))
  //   )
    
  // }

    return (
      <>

        <div className="container-fluid ">
          <div className="row d-flex col-12">
          
          {projects.map(project =>(
              <div className="col-md-6 col-lg-4 col-sm-12 my-2">
                <div className="card border border-2">
                  <div className="card-body">
                    
                    <div className="d-block">
                      <span className="col-4 fw-bold text-nowrap bd-highlight px-1">Empresa:</span>
                      <span>{project.client}</span>
                    </div>
                                  
                    <div className="d-block">
                      <span className="col-4 fw-bold text-nowrap bd-highlight px-1">Projeto:</span>
                      <span>{project.project}</span>
                    </div>
                                  
                    <div className="d-block">
                      <span className="col-4 fw-bold text-nowrap bd-highlight px-1">Tipo do projeto:</span>
                      <span>Recorrente</span>
                    </div>
                                        
                    <div className="d-block">
                      <span className="col-4 fw-bold text-nowrap bd-highlight px-1">status:</span>
                      <span>{project.status ? "Liberado" : "Bloqueado"}</span>
                    </div>
                                          
                    <div className="d-block">
                      <span className="col-4 fw-bold text-nowrap bd-highlight px-1">Lider:</span>
                      <span>Dado estatico</span>
                    </div>
                                            
                    <div className="d-block">
                      <span className="col-4 fw-bold text-nowrap bd-highlight px-1">Tarefas abertas:</span>
                      <span>Dado estatico</span>
                    </div>
                          
                    <div className="d-flex">
                      <span className="col-4 fw-bold text-nowrap bd-highlight px-1">Situação:</span>
                    </div>

                    <div className="d-flex justify-content-center">                      
                      <button className="btn btn-sm button-style-green px-5">{project.situacao}</button>
                    </div>

                  </div>
                </div>
              </div>
            ))
          }

          </div>
        </div>
           
      </>
    )
  }
  