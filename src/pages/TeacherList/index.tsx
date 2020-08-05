import React from 'react';
//import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';


function TeacherList(){
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Proffys disponíveis." >

                <form id="search-teachers">
                    
                    <Select 
                        name="subject" 
                        label="Matéria" 
                        options = {[
                            {value: 'Artes', label: 'Artes'},    
                            {value: 'Português', label: 'Português'},
                            {value: 'Programação', label: 'Programação'},
                            {value: 'Ciências', label: 'Ciências'},
                            {value: 'Biologia', label: 'Biologia'},
                            {value: 'Matemárica', label: 'Matemárica'},
                            {value: 'História', label: 'História'},
                        ]}
                    />

                    <Select 
                        name="week_day" 
                        label="Dia da Semana" 
                        options = {[
                            {value: '0', label: 'Domingo'},
                            {value: '1', label: 'Segunda-feira'},    
                            {value: '2', label: 'Terça-feira'},
                            {value: '3', label: 'Quarta-feira'},
                            {value: '4', label: 'Quinta-feira'},
                            {value: '5', label: 'Sexta-feira'},
                            {value: '6', label: 'Sábado'},
                        ]}
                    />

                    <Input name="time" label="Dia Hora Semana" type="time" />

                </form>    

            </ PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>

        </div>

    )

}

export default TeacherList;