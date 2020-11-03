import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import ClimatizadoresJoape from '../Images/ClimatizadoresJoape.jpg'
import Aquecedores from '../Images/Aquecedores.jpg'
import manutencaoAquecedores from '../Images/manutencaoAquecedores.jpg'
 
function CarouselC () {
        return (
            <Carousel >
             <Carousel.Item>
              <img className="d-block w-100" src={ClimatizadoresJoape}/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Aquecedores}/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={manutencaoAquecedores}/>
            </Carousel.Item>
          </Carousel>
        );
    }

 
export default CarouselC