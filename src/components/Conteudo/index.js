import React from 'react';
import imagCent from '../../assets/img/centroPagina.png'
import Image from 'react-bootstrap/Image'
import './style.css'
import Card from '../Cards'

//nesse componente realizamos uma analise, se a variável repositories estiver vazia, apresentamos a tela inicial
//caso contrario, apresentamos os cards
function Conteudo({repositories, deletRepo}){
    return(
        <div className="container">
           {0 === repositories.length ?(
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-auto">
                    <Image src={imagCent} alt='Imagem Central' rounded/>
                    <p className="textMain1"><b>There is still nothing here</b></p>
                    <p className="textMain2">Add some repositories by clicking add new</p>
                    <p className="textMain3">repository</p>
                </div>
            </div>
           ) : ( 
             <div className='grid'>
                {repositories.map((repo) => (
                    <Card key={repo.id} repo={repo} deletRepo={deletRepo}/>
                ))}
             </div>
           )}
        </div>
    )
}

export default Conteudo;