import { Link } from "react-router-dom";
import './index.scss'
import React from 'react';
import Menu from '../../../components/Menu'
import Cabecalho from '../../../components/Cabeçalho'


export default function Index(){
    return(
       <main className="page-home">
        <section>
        <Menu />
            <div className='container'>
                <Cabecalho />
                
                <div className='conteudo'>
                    <img className='logo-estilizado' src='../assets/images/Rectangle-304(1).png' alt='logo estilizado' />
                </div>
            </div>
        </section>
       </main> 
    )
}