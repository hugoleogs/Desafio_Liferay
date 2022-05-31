import React, {useState} from 'react'
import Head from './components/Header'
import Coteudo from './components/Conteudo'
import './index.js'
import axios from 'axios'
import {v4} from 'uuid'

export function App() {

  const api ={
    baseUrl:"https://api.github.com",//após várias requisições realizada ao github, você pode ser barrado
    client_id:"0eb1a46759948c6e14a2", //dessa forma precisamos usar as chaves de segurança para 
    client_secret:"dc762c0f5017c869dd7c89cae01ea7355c7c3c58",//uma conexão boa
  }                                                   

  const [projects, setprojects] = useState([]) // uso de hooks nos auxilia na manipulação do array de projetos

  function deletRepo(repoId){
    const newRepos = projects.filter(({id}) => repoId !== id) // objetivo de remover o projeto indesejavel
    setprojects(newRepos)
  }

  function addRepo(name){
    const newRepo = {
      id: v4(), //usei uma biblioteca para gerar ids 
      name: name,
      created_at: new Date().toISOString() //para pegar a data de criação
    }

    setprojects([newRepo, ...projects]) //add no inicio do array para melhor visualização

  }

 
  function getApiGitRepos(nameUser){ //objetivo de pegar os repositorios de usuários solicitados

    axios.get(api.baseUrl + "/users/"+nameUser+"/repos", {

    })
      .then(function (response){
        setprojects(response.data)        
      })
      .catch(function(error){
        console.log("GitHub temporarily unavailable")
      })
}
  //componentes de abetura
  return (
    <div>     
      <Head addRepo={addRepo} getApiGitRepos={getApiGitRepos}/> 
      <Coteudo repositories={projects} deletRepo={deletRepo}/>
          
    </div>
  );
}

/* Considerações finais:

Para melhorar a manipulação dos dados e a passagens de funções, poderiamos usar um Storage,
por exemplo o Redux. 

Já para nos auxiliar no css, poderiamos ter abordado utilizando uma biblioteca do React 
conhecida como styled-components.

Infelizmente não foi possivel concluir todas as funções solicitadas, então buscamos 
implementar o basico, Busca, Adicionar, deletar

Muito obrigado pelo desafio.

*/