import React from 'react';
import Title from '../components/Title';
import Service from './Service';

const services= [
    {
        id:1,
        icon: "fas fa-desktop",
        title: "Computers",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos rerum unde vitae odit, quidem excepturi.",
    },
    {
        id:2,
        icon: "fas fa-mobile",
        title: "Phones",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos rerum unde vitae odit, quidem excepturi.",
    },
    {
        id:3,
        icon: "fas fa-camera",
        title: "Cameras",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos rerum unde vitae odit, quidem excepturi.",
    }
]

const Services = () => {
    return (
        <section className="services mx-auto">
            <div className="container">
            <Title title="products on sell" subtitle="we deliver quality"/>
            <div className="row">
                {services.map(item=>{
                    return   <div className="col-sm-12 col-md-4 service-wrapper" key={item.id}>
                               <Service icon={item.icon} title={item.title} info={item.info}/>
                             </div>
                })}
              
            </div>
            
            </div>
        </section>
    );
}

export default Services;
