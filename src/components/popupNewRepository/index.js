import React, {useState} from 'react';
import './style.css'
import{ 
    Form,
    FormControl
    } from 'react-bootstrap';

function PopupNewRepository({addRepo, getModel}){

    
    const [nameRepo, setNameRepo] = useState('new')//objetivo de manipular o nome digitado

    let modelStyle = {
             display: 'block',
            }

    //add um novo repositorio e fecha o popup
    function addRepository(nameRepo){
        addRepo(nameRepo)
        getModel()
    }

    return(
        <div className="modal" style={modelStyle}>
            <div className="modal-dialog addNewUser">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">New repository</h5>
                </div>
                <div className="modal-body">
                    <p>Repository *</p>
                    <Form className="d-flex w-70">                        
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-1"
                        aria-label="Search"
                        title="Digite o que você deseja procurar"
                        onChange={e => setNameRepo(e.target.value)} //captura o nome digitado
                    />                                       
                    </Form>
                </div>
                <div className="modal-footer">
                    <button type="button" onClick={()=>getModel()} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" onClick={()=>addRepository(nameRepo)} className="btn btn-primary">Add</button>
                </div>
                </div>
            </div>
        </div>
        
    )
}// as funções getModel, addRepository servem para manipular popup (primeiro caso), criar repositorio (segunda função)

export default PopupNewRepository;