import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="text-center">
                <h3 className="text-orange-600 text-lg font-medium">Servces</h3>
                <h3 className="text-3xl">Our Servces Area</h3>
                <h3>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
                {
                    services.map(service => <div key={service._id} className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={service.img} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h1 className="text-2xl font-semibold">{service.title}</h1>
                            <h3 className="text-orange-600 text-lg font-medium">Price: ${service.price}</h3>
                            <div className="flex justify-end">
                                <Link to={`/book/${service._id}`}>
                                    <button className="btn btn-primary">book Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;