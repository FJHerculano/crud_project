import { ChangeEvent, useState } from "react";
import api from "../../../services/api";

interface IProject {
    project:string;
    client: string;
    date_initial: string;
    deadline: string;
    budget: number;
  }

export default function ModalCreate() {

    const [newproject, setNewProject] = useState<IProject>({
        project:'',
        client:'',
        date_initial:'',
        deadline:"",
        budget: 0,
    });

    function updatedProject (e: ChangeEvent<HTMLInputElement>){
        setNewProject({
            ...newproject,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit (e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()

        const response = await api.post('/api/projects', newproject)

    }

    return (
        <div>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#CriarProjetoModal">
            Novo projeto
            </button>     

            {/* modal */}
            <div className="modal fade" id="CriarProjetoModal" aria-labelledby="CriarProjetoModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">


                        <div className="modal-header">
                            <h5 className="modal-project:string;
                                client: string;
                                date_initial: Date;
                                deadline: Date;
                                budget: number;" id="CriarProjetoModalLabel">Dados do Projeto</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>


                        <div className="modal-body">
                            <form onSubmit={onSubmit}>
                                <div className="row">
                                    <div className="col-6 p-2">

                                        <div className="col-12">
                                            <label className="bg-transparent" htmlFor="">nome</label>
                                            <div className="input-group mb-3">
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    name="project"
                                                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProject(e)}
                                                />
                                            </div>
                                        </div>
                
                                        <div className="col-12">
                                            <label className="bg-transparent" htmlFor="">Cliente</label>
                                            <div className="input-group mb-3">
                                                <input 
                                                    type="text" 
                                                    className="form-control"
                                                    name="client"
                                                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProject(e)}
                                                />
                                            </div>
                                        </div>
                
                                        <div className="col-12">
                                            <label className="bg-transparent" htmlFor="">Data de inicio</label>
                                            <div className="input-group mb-3">
                                                <input 
                                                    type="date" 
                                                    className="form-control"
                                                    name="date_initial"
                                                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProject(e)}
                                                />
                                            </div>
                                        </div>
                
                                        <div className="col-12">
                                            <label className="bg-transparent" htmlFor="">Deadline</label>
                                            <div className="input-group mb-3">
                                                <input 
                                                    type="date" 
                                                    className="form-control"  
                                                    name="deadline"
                                                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProject(e)}
                                                />
                                            </div>
                                        </div>
                
                                        <div className="col-12">
                                            <label className="bg-transparent" htmlFor="">Budget</label>
                                            <div className="input-group mb-3">
                                                <input 
                                                    type="number" 
                                                    className="form-control"  
                                                    name="budget"
                                                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProject(e)}
                                                />
                                            </div>
                                        </div>
                
                                    </div>

                                    <div className="col-6 p-2">
                                        <div className="col-12">
                                            <h4>Tipo de projeto</h4>
                                        </div>

                                        <div className="col-12 mb-4">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label  className="form-check-label" >
                                                    Projeto com escopo fechado
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                                <label className="form-check-label">
                                                    Projeto Recorrente
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <h4>Categorias</h4>
                                        </div>

                                        <div className="col-12 ">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                <label className="form-check-label" >Marketing Digital</label>
                                            </div>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                <label className="form-check-label" >Desenvolvimento</label>
                                            </div>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                                <label className="form-check-label">Hospedagem</label>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="d-flex justify-content-end pe-3 pb-3">
                                        <button type="submit" className="btn btn-sm btn-primary">Salvar</button>
                                    </div>

                                </div>

                            </form>
                      
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
  }
  