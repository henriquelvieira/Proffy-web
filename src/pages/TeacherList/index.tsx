import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import PageHeader from '../../components/PageHeader';



function TeacherList(){
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Proffys disponíveis." >
                Teste
            </ PageHeader>
        </div>

    )

}

export default TeacherList;