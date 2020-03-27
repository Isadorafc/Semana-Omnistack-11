import React from 'react';
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './style.css';

import logoImg from '../../assets/logo.svg';


export default function Profile () {

    return (
      <div className="profile-container">
          <header>
            <img src={logoImg} alt="Be the Hero"/>
            <spam> Bem Vinda, APAD </spam>

            <Link className="button" to="/incidents/new">Cadastrar um novo caso</Link>
            <button type="button">
                <FiPower size={18} color="e02041"/>
            </button>
          </header>

          <h1>Casos Cadastrados</h1>
          <ul>
              <li>
                  <strong>Caso:</strong>
                  <p>Caso Teste</p>

                  <strong>Descrição:</strong>
                  <p>Descrição teste</p>

                  <strong>Valor:</strong>
                  <p>R$120</p>

                  <button type="button">
                      <FiTrash2 size={20} color="#a5a5a5"/>
                  </button>
                  
              </li>

              <li>
                  <strong>Caso:</strong>
                  <p>Caso Teste 2 </p>

                  <strong>Descrição:</strong>
                  <p>Descrição teste</p>

                  <strong>Valor:</strong>
                  <p>R$120</p>

                  <button type="button">
                      <FiTrash2 size={20} color="#a5a5a5"/>
                  </button>
                  
              </li>

              <li>
                  <strong>Caso:</strong>
                  <p>Caso Teste 3</p>

                  <strong>Descrição:</strong>
                  <p>Descrição teste</p>

                  <strong>Valor:</strong>
                  <p>R$120</p>

                  <button type="button">
                      <FiTrash2 size={20} color="#a5a5a5"/>
                  </button>
                  
              </li>

              <li>
                  <strong>Caso:</strong>
                  <p>Caso Teste</p>

                  <strong>Descrição:</strong>
                  <p>Descrição teste</p>

                  <strong>Valor:</strong>
                  <p>R$120</p>

                  <button type="button">
                      <FiTrash2 size={20} color="#a5a5a5"/>
                  </button>
                  
              </li>

          </ul>
      </div>    
  );
}