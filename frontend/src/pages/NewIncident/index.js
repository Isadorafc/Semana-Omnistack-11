import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    return (
        <div className="new-incident-container">
          <div className="content">
              <section>
              <Link  to="/">
                <img src={logoImg} alt="Be The Hero"/>
              </Link>
            
              <h1>Cadastrar novo caso</h1>
                 <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>
                 
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size= {16} color="e02041"/>
                        Voltar para o perfil da ONG
                    </Link>
                    
              </section>
              <form>
                   <input  placeholder="Título do caso"required/>
                   <textarea  placeholder="Descrição" required/>

                   <input placeholder="Valor em reais" /> 

                 <button className="button" type="submit">Cadastrar caso</button>

              </form>
            </div>  

        </div>
    );
}
