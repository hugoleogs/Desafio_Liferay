import React, {useState} from 'react';
import './style.css'
import life from '../../assets/img/life@1x.png'
import { FiStar, FiTrash2 } from 'react-icons/fi'; 
import PopupDelete from '../popupDelete';


function Card({repo, deletRepo}){

    //o objetivo desse hooks juntamente com a função getModel é de habilitar ou desabilitar o popup na hora de deletar
    const [model, setModel] = useState(false)

    const getModel = () => {
        return setModel(!model)
    }
    
    return(
        <div>
            <div className='head'>
                <img height={40} width={40} src={life} alt='Imagem da liferay' />
                <div className='title-wrapper'>
                    <b className='title'>{repo.name}</b>
                </div>
                <FiStar className='icon'/>
                <FiTrash2 onClick={()=>getModel()} className='icon'/>                
            </div>
            <div className='content'>
                <span><b className='info'>Stars</b> {repo?.stargazers_count ?? 0}</span>
                <span><b className='info'>Forks</b> {repo?.forks_count ?? 0}</span>
                <span><b className='info'>Open issues</b> {repo?.open_issues_count ?? 0}</span>
                <span><b className='info'>Age</b> {repo.created_at}</span>
                <span><b className='info'>Last commit</b> {repo?.update_at ?? 'N/A'}</span>
                <span><b className='info'>License</b> {repo?.license?.name ?? 'N/A'}</span>

            </div>
            {
                model === true ? <PopupDelete deletRepo={deletRepo} repo ={repo}  getModel={getModel}/> : ''
                //passamos alguns argumentos para o componente PopupDelete realizar a sua atividade
            }
        </div>
    )
}

export default Card;