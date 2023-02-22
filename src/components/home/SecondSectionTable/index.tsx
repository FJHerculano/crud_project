import { useEffect, useState } from "react";
import api from "../../../services/api";
import './styles.css'

interface IProject {
  project:string;
  client: string;
  status: boolean;
  situacao: string;
}

export default function SecondSectionTable() {

  
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
      <div>
          <div className="table-responsive">
            <table className="table bg-table-white">
            <thead>
                <tr>
                  <th scope="col">Empresas</th>
                  <th scope="col">Projeto</th>
                  <th className="text-nowrap bd-highlight" scope="col">Tipo de projeto</th>
                  <th scope="col">Status</th>
                  <th scope="col">Lider</th>
                  <th className="text-nowrap bd-highlight" scope="col">Tarefas abertas</th>
                  <th scope="col">Situação</th>
                </tr>
              </thead>

              <tbody>
                {
                  projects.map(project =>(
                    <tr>
                      <td>{project.client}</td>
                      <td>{project.project}</td>
                      <td>Estatico</td>
                      <td>{project.status ? "Liberado" : "Bloqueado"}</td>
                      <td>Estatico</td>
                      <td>Estatico</td>
                      <td>
                        {/* Tem que mudar o background conforme a situação */}
                        <span className="badge badge  button-style-green">{project.situacao}</span>
                      </td>
                    </tr>
                  ))
                }
                
                
              </tbody>
            </table>
          </div>
      </div>
    )
  }
  