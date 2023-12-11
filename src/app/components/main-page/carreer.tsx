
export default function Carreer() {
    return (
        <section>
            <div className="container mx-auto px-12 mt-8 text-lg">
                <h2 className="text-5xl text-center mb-8">Experience</h2>
                <div>
                    <div className="grid grid-cols-2 justify-items-end">
                        <div className="flex items-center">
                            <div className="flex flex-col items-center">
                                <span>Nov 2018 - Current</span>
                                <span>São Paulo, Brasil</span>
                            </div>
                            <div className="flex flex-col h-full items-center justify-end grow">
                                <div className="circle mx-4"></div>
                                <div className="linha h-1/2 border-r border-sky-600	"></div>
                            </div>
                        </div>
                        <div>
                            <h4>Senior Full Stack Consultant</h4>
                            <h6>Accenture</h6>
                            <div>
                                <ul>
                                    <li>Led Frontend teams in Brazil and Latin America</li>
                                    <li>Acted as a bridge between business team in US and development team in Brazil</li>
                                    <li>Created component library/design system for Santander Brasil</li>
                                    <li>Led front-end for international project for Santander Argentina</li>
                                    <li>New decision/flux based application for EDP energies customer service.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}