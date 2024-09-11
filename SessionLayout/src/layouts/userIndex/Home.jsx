import "./home.css"
import Header from '../users/header/Header'
import Navbar from '../users/navbar/navbar'
import Menu from '../users/menu/Menu'
import Article from '../users/article/Article'
import Container from '../../views/userContent/Container'

export default function Home() {
  return (
    <>
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='user-content'>
                <Menu></Menu>
                <Container></Container>
                <Article></Article>
            </div>
        </div>
     </>
  )
}
