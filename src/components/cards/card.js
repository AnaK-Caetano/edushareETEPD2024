import React from 'react';
import PropTypes from 'prop-types';

// definido o componente 'card':
const Card = ({user,text}) => {
  return (
    // renderizando a estrutura do card
    <div className="card">
      <img src={user.foto} className="card-foto" alt="foto" />      
      <div className="card-content">       
      <h3 className="card-tituloProjeto"><strong>{tituloProjeto}</strong></h3>     
      <h4 className="card-username">{user.name}</h4> 
           
        <p className="card-text">{text}</p>
      </div>
      <div className="card-footer">
      <h4> Tecnologias Utilizadas: </h4>
      </div>
    </div>
  );
};

// todas as propriedades do card são strings obrigatórias
Card.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired, 
    foto: PropTypes.string.isRequired 
  }).isRequired,
  tituloProjeto: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

// teste
const user = {
  name: 'Victor Pereira',
  foto: 'https://blablabla.com/foto.jpg'
};
const tituloProjeto = 'Galeria de Projeto'
const text = 'compartilhando meu projeto realizado na ETE Porto Digital em 2024';


//renderizando o card com o id root
ReactDOM.render(
  <Card user={user} text={text} />,
  document.getElementById('root')
);


