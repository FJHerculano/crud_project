import { GridView } from "@mui/icons-material";
import { TableRows } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import SecondSectionGrid from "../SecondSectionGrid";
import SecondSectionTable from "../SecondSectionTable";

export default function SecondSection() {

  const [gridOrTable, setGridOrTable] = useState(1);



  return (

    <div className="container ">
      <div className="card border border-2 p-4 shadow-sm">
        <div className="d-flex justify-content-end  ">

            {/* Botões e input da page home */}
            {/* Objetivo dos botões é mudar o tipo de visualização pra grid ou table */}
            <div className="col-2 gx-2 d-flex justify-content-end pe-4">
              
                <button 
                  className="btn btn-light me-1"
                  onClick={() => setGridOrTable(1)}
                  
                >
                    <GridView className="text-primary bg-light"/>
                </button>

                <button 
                  className="btn btn-primary"
                  onClick={() => setGridOrTable(0)}
                >
                    <TableRows className="bg-primary" />
                </button>
              
            </div>
 
            <div className="input-sm-group d-flex justify-content-end">
                <span className="input-group-text bg-light bg-warning border"><SearchIcon/></span>
                <input className="form form-control border-start-0 " type="text" placeholder="pesquisar"></input>
            </div>

        </div>
        
        {/* Listagem de projetos cadastrados */}
        {
          gridOrTable ? <SecondSectionGrid/> : <SecondSectionTable/>
        }
      </div>
    </div>
  )
}
