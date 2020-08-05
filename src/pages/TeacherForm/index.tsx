import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';


function TeacherForm(){
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    
                    <Input name="name" label="Nome completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />
                    <Textarea name="bio" label="Biografia" />
                    
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>
                    
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
                    <Input name="cost" label="Custo da sua hora por aula" />
                    <Input name="whatsapp" label="Whatsapp" />
                    
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante!<br />
                        Preencha todos os dados
                    </p>

                    <button type="button">Salvar cadastro</button>

                </footer>

            </main>

        </div>

    )

}

export default TeacherForm;