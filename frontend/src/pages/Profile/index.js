import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api';

import './style.css';

import logoImg from '../../assets/logo.svg';


export default function Profile () {
    const [incidents, setIncidents] = useState([]);

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');
    
    useEffect(()  =>  {
        api.get('/profile', {
            headers: {
                Authorization: ongId,
            }
        }) 
        .then(response => {
            setIncidents(response.data);
        })
    },[ongId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });
        
            setIncidents(incidents.filter(incidents => incidents.id !== id ));
        } catch (err) {
            alert('Erro ao deletar caso, tente novamente.');
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }   

    return (
      <div className="profile-container">
          <header>
             <Link to="/">
                <img src={logoImg} alt="Be the Hero"/>
             </Link>
            <spam> Bem-Vinda, {ongName} </spam>

            <Link className="button" to="/incidents/new">Cadastrar um novo caso</Link>
            <button onClick={handleLogout} type="button">
                <FiPower size={18} color="e02041"/>
            </button>
          </header>

          <h1>Casos Cadastrados</h1>
          <ul>
                {incidents.map(incidents =>(
                                  <li key={incidents.id}>
                                  <strong>Caso:</strong>
                                    <p>{incidents.title}</p>
                
                                  <strong>Descrição:</strong>
                                    <p>{incidents.description}</p>
                
                                  <strong>Valor:</strong>
                                  <p>{Intl.NumberFormat('pt-BR', { style:'currency', currency: 'BRL' }).format(incidents.value)}</p>
                
                                  <button onClick={() => handleDeleteIncident(incidents.id)} type="button">
                                      <FiTrash2 size={20} color="#a5a5a5"/>
                                  </button>
                                  
                              </li>
                
                ))}
           
          </ul>
      </div>    
    )
}