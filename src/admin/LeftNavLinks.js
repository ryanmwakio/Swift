import React from 'react';
import { Link } from 'react-router-dom';

const LeftNavLinks = () => {

    const links=[
        {
            id: 1,
            name: 'Dashboard',
            url: '/admin',
            icon:'fas fa-th-list'
        },
        {
            id: 2,
            name: 'Users',
            url: '/users',
            icon:'fas fa-users'
        },
        {
            id: 3,
            name: 'Products',
            url: 'productsadmin',
            icon:'fas fa-qrcode'
        },
        {
            id: 4,
            name: 'emails',
            url: 'emails',
            icon:'fas fa-envelope'
        },
        {
            id: 5,
            name: 'settings',
            url: 'settings',
            icon:'fas fa-cog'
        },
    ]

    // const [active,setActive]=React.useSate(false)
    // const [index,setIndex]=React.useState(1)


   
        // React.useState(()=>{
        //     setActive(true)
        //     setIndex(index)
        // })
        // return () => {};
    


    const myLinks=links.map(item=>{
                 return <li className="vert-link" key={item.id}>
                           <Link to={item.url}><i className={item.icon}></i> {item.name}</Link>
                        </li>
    })


    return (
        <div>
            {myLinks}
        </div>
    );
}

export default LeftNavLinks;
