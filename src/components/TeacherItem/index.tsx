import React from 'react';
//import { Link } from 'react-router-dom';

import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

/*
interface TeacherItemProps {
    title: string;
}
*/
//const TeacherItem: React.FC<TeacherItemProps> = (props) => {
const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/14298531?s=120&v=4" alt="Henrique Lopes Vieira"/>
                <div>
                    <strong>Henrique Lopes</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.      
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80.00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>

        </article>
    )

}

export default TeacherItem;