import React, {useState} from 'react';
import './style.css' 
import{ 
Navbar,
Container,
Nav,
NavDropdown,
Form,
FormControl,
Stack
} from 'react-bootstrap';
import { BsGithub } from 'react-icons/bs';
import { FiStar, FiSearch } from 'react-icons/fi';
import { BsCircleHalf } from 'react-icons/bs';
import { BsGridFill } from 'react-icons/bs';
import { MdAddBox } from 'react-icons/md';
import PopupNewRepository from '../popupNewRepository'



function Head({addRepo, getApiGitRepos}){

    //hooks usados para sinalizar o popup (primeiro caso), e para pegar o nome do usuario desejado
    const [model, setModel] = useState(false)
    const [nameUser, setNameUser] = useState('users')

    //essa funcao é usada para habilitar ou desabilitar o popup de criar novo repositorio
    const getModel = () => {
        return setModel(!model)
    }

    return(
    <div className='headP'>     
        <Navbar bg="light" expand="md">
            <Container fluid className='w-100'>
                <Stack direction="horizontal" gap={4}>
                    <BsGithub size={20} />  
                    <Navbar.Brand href="#">Github Compare</Navbar.Brand>
                </Stack>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="my-2 my-lg-0 w-100"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >   
                    <Stack className='w-100' direction="horizontal" gap={5}>
                    <NavDropdown title="Filter and order" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Crescent</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">Decrescent</NavDropdown.Item>
                    </NavDropdown>
                    <Form className="d-flex w-50">                        
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-1"
                        aria-label="Search"
                        title="Type what you want to look for"
                        onChange={e => setNameUser(e.target.value)}
                        onKeyPress = {e => {
                            if(e.key === "Enter") {
                                getApiGitRepos(nameUser)
                                e.preventDefault()
                                }
                            }
                        }
                    /> 
                    <FiSearch onClick={()=>getApiGitRepos(nameUser)} className='iconSearch' size={25}/> 
                    {/* Enviamos o nome para pegar os repositorios */}
                    </Form>
                    <FiStar size={20} href="#"/> 
                    <BsCircleHalf size={20} href="#"/>
                    <BsGridFill size={20} href="#"/>
                    <MdAddBox onClick={()=>getModel()} color='blue' size={30}/>
                    {/* add novo repositorio */}
                    </Stack>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        {   //popup de novo repositorio
            model === true ? <PopupNewRepository addRepo={addRepo} getModel={getModel}/> : ''
        }
  </div>
    )
}

export default Head;