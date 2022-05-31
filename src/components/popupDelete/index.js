import React from 'react';
import './style.css'
import { RiAlertFill } from 'react-icons/ri'; 

function PopupDelete({deletRepo, repo, getModel}){

    let modelStyle = {
             display: 'block',
             backgroundColor: 'rgba(0,0,0,0.8)'
            } //usado para aplicar estilo no popup

    return(
        <div className="modal" style={modelStyle}>
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <RiAlertFill size={15} className='iconpopup'/>
                    <h5 className="modal-title">Delete repository</h5>
                    <button type="button" onClick={()=>getModel()} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>Are you sure to delete the <b>{repo.name}</b> repository?</p>
                </div>
                <div className="modal-footer">
                    <button type="button" onClick={()=>getModel()} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" onClick={()=>deletRepo(repo.id)} className="btn btn-primary">Delete</button>
                </div>
                </div>
            </div>
        </div>
        
    )
}// as funções getModel, deletRepo servem para manipular popup (primeiro caso), deletar repositorio (segunda função)

export default PopupDelete;