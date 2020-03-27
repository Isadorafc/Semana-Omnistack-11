import React from 'react';
import { Link } from "react-router-dom";
import {FiArrowLeft} from 'react-icons/fi';

import './style.css';

import logoImg from '../../assets/logo.svg';


export default function Register(){
    return (
        <div className="register-container">
          <div className="content">
              <section>
              <img src={logoImg} alt="Be The Hero"/>
              <h1>Cadastro</h1>
                 <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>
                 
                    <Link className="back-link" to="/">
                    <FiArrowLeft size= {16} color="e02041"/>
                    Já tenho cadastro
               </Link>

              </section>
              <form>
                      <input  placeholder="Nome da ONG"required/>
                      <input type="email" placeholder="Email"required/>
                      <input  placeholder="Whatsapp" required/>

                      <div className="input-group">

                          <input placeholder="Cidade" required/> 
                          <input placeholder="UF" required style={{ width:80 }}/> 
                      </div>

                     <button className="button" type="submit">Cadastrar</button>

              </form>
            </div>  

        </div>
    )
}