
export default function Carreer() {
    return (
        <section>
            <div className="container">
                <h2 className="text-5xl text-center mb-8">Experience</h2>
                <div>
                    <div className="grid md:grid-cols-2 justify-items-end">
                        <div className=" items-center hidden md:flex">
                            <div className="flex flex-col items-center text-gray-600 text-2xl">
                                <span>Nov 2018 - Current</span>
                                <span>São Paulo, Brasil</span>
                            </div>
                            <div className="flex flex-col h-full items-center justify-end grow">
                                <div className="circle mx-4 bg-sky-600"></div>
                                <div className="linha h-1/2 border-r border-sky-600	"></div>
                            </div>
                        </div>
                        <div className="border-sky-600 border p-6 md:w-11/12 justify-self-start">
                            <h4 className="font-bold text-sky-600 text-2xl">Senior Full Stack Consultant</h4>
                            <h6 className="font-bold text-gray-400 text-lg">Accenture</h6>
                            <div>
                                <ul className="list-disc text-gray-600 pl-4">
                                    <li>Led Frontend teams in Brazil and Latin America</li>
                                    <li>Acted as a bridge between business team in US and development team in Brazil</li>
                                    <li>Created component library/design system for Santander Brasil</li>
                                    <li>Led front-end for international project for Santander Argentina</li>
                                    <li>New decision/flux based application for EDP energies customer service.</li>
                                </ul>
                            </div>
                        </div>
                        <div className=" items-center hidden md:flex">
                            <div className="flex flex-col items-center text-gray-600 text-2xl">
                                <span>Oct 2017- Oct 2018</span>
                                <span>Budapest, Hungary</span>
                            </div>
                            <div className="flex flex-col h-full items-center justify-end grow">
                                <div className="linha h-1/2 border-r border-sky-600	"></div>
                                <div className="circle mx-4 border-sky-600 border"></div>
                                <div className="linha h-1/2 border-r border-sky-600	"></div>
                            </div>
                        </div>
                        <div className="border-sky-600 border p-6 mt-6 md:w-11/12 justify-self-start">
                            <h4 className="font-bold text-sky-600 text-2xl">Angular Engineer</h4>
                            <h6 className="font-bold text-gray-400 text-lg">BlackRock</h6>
                            <div>
                                <ul className="list-disc text-gray-600 pl-4">
                                    <li>Developing high performance Angular applications for the sales team. (CRM)</li>
                                    <li>Migrating legacy systems from jquery and Angularjs to Angular 5+.</li>
                                    <li>Used NGRX - redux pattern.</li>
                                    <li>Used Jest for unit tests and integration with jenkins. High unit test coverage.</li>
                                </ul>
                            </div>
                        </div>
                        <div className=" items-center hidden md:flex">
                            <div className="flex flex-col items-center text-gray-600 text-2xl">
                                <span>Jan 2016 - Sep 2017</span>
                                <span>Budapest, Hungary</span>
                            </div>
                            <div className="flex flex-col h-full items-center justify-end grow">
                                <div className="linha h-1/2 border-r border-sky-600	"></div>
                                <div className="circle mx-4 border-sky-600 border"></div>
                                <div className="linha h-1/2 border-r border-sky-600	"></div>
                            </div>
                        </div>
                        <div className="border-sky-600 border p-6 mt-6 md:w-11/12 justify-self-start">
                            <h4 className="font-bold text-sky-600 text-2xl">Junior Java Web Developer</h4>
                            <h6 className="font-bold text-gray-400 text-lg">ItWare</h6>
                            <div>
                                <ul className="list-disc text-gray-600 pl-4">
                                    <li>Built Scalable microservices with Java using Spring/Dropwizard as main frameworks.</li>
                                    <li>Test coverage of all code of over 80% on all microservices delivered.</li>
                                    <li>Implemented important projects as security microservices using OAuth2 protocol standard.</li>
                                    <li>Highly performant apis due to over 50 millions users by our client.</li>
                                    <li>Micro-services compatible with Docker, AWS, Consul,  Ribbon, Cassandra, Redis among others.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center">
                            <div className="flex flex-col items-center text-gray-600 text-2xl">
                                <span>Sep 2014 - Dez 2015</span>
                                <span>Londrina, Brazil</span>
                            </div>
                            <div className="flex flex-col h-full items-center justify-end grow">
                                <div className="linha h-1/2 border-r border-sky-600	"></div>
                                <div className="circle mx-4 border-sky-600 border"></div>
                                <div className="linha h-1/2 border-r border-sky-600	"></div>
                            </div>
                        </div>
                        <div className="border-sky-600 border p-6 mt-6 md:w-11/12 justify-self-start">
                            <h4 className="font-bold text-sky-600 text-2xl">Web Developer-Java</h4>
                            <h6 className="font-bold text-gray-400 text-lg">DRZ - Geotecnologia</h6>
                            <div>
                                <ul className="list-disc text-gray-600 pl-4">
                                    <li>Implemented real time GIS applications using java with JSF and Hibernate and javascript with Jquery.</li>
                                    <li>Programmed one android application used internally for collecting GIS information.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}