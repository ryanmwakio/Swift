import React from 'react';

const Contact = () => {
    return (
        <section className="contact mx-auto">
            <div className="contact-body">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas culpa modi nemo fugit? Explicabo iure perferendis modi obcaecati natus mollitia.
                    </p>
                    <h5 className="contact-address">Address</h5>
                    <p>00100 Nairobi, Kenya</p>
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <h5 className="contact-address">email</h5>
                            swiftke@ecommerce.com
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <h5 className="contact-address">phone no</h5>
                            (+254) 712345678
                        </div>
                    </div>

                    <div className="my-4">
                    <form action="" method="post" className="inline-form">
                     
                            <input type="email" name="" id="" required placeholder="Email Address" className="swift-form-control"/>
                            <button type="submit" className="swift-form-btn"><i className="fas fa-envelope"></i></button>
                    
                    </form>
                    </div>
            </div>
        </section>
    );
}

export default Contact;
