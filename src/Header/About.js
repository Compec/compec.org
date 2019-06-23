import React from 'react';


import {Container,   Typography} from '@material-ui/core';
// import logo from './logo.svg';
// import './App.css';

class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }
    render() {
        return (
            
            <Container  >
                <br/>
                <div >
                    {/* <h1 class=" text-monospace display-3">Kimdir? */}
                    {/* </h1> */}
                    <    Typography>

                    Compec (Boğaziçi Üniversitesi Bilişim Kulübü), 1994 yılından bu yana faaliyet gösteren ve bilişim alanında 
                    çalışmalar yapan kariyer kulübüdür. Sene boyunca bilişimin ve teknolojinin birçok dalında etkinlikler ve eğitimler düzenleyerek 
                    üyelerini gerek akademik dünyaya gerek iş dünyasına hazırlamayı ve onları daha donanımlı bireyler haline getirmeyi amaçlar.
                    </Typography>


                </div></Container>
        );

    }

}

export default About;
