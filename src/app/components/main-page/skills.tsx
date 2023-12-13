import { faAngular, faHtml5, faJava, faJsSquare, faNode, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faChessPawn } from '@fortawesome/free-regular-svg-icons/faChessPawn'
import { faGem } from '@fortawesome/free-regular-svg-icons/faGem'
import { faChessBoard, faDatabase, faPersonBiking, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Skills() {
    return (
        <section>
            <div className="container">
                <h2 className="text-5xl text-center mb-8 mx-auto">Skills</h2>
                {/* <h4 className="font-bold  text-center text-sky-600 text-3xl mb-8">Core:</h4> */}
                <div className='grid md:grid-cols-3 gap-12 md:mx-16'>
                    <div className="border-sky-600 border p-6 w-full flex items-center flex-col">
                        <FontAwesomeIcon color='#C3002F' size='8x' icon={faAngular} />
                        <h4 className="my-2 text-xl text-center text-sky-600">Angular</h4>
                        <div className="w-full relative bg-gray-300 rounded-full h-8 dark:bg-gray-700">
                            <div className="bg-sky-600 h-8 rounded-full text-center text-white flex justify-center items-center" ><span>Expert</span></div>
                        </div>
                    </div>
                    <div className="border-sky-600 border p-6 w-full flex items-center flex-col">
                        <FontAwesomeIcon color='#F0DB4F' size='8x' icon={faJsSquare} />
                        <h4 className="my-2 text-xl text-center text-sky-600">Javascrip/Typescript</h4>
                        <div className="w-full bg-gray-300 rounded-full h-8 dark:bg-gray-700">
                            <div className="bg-sky-600 h-8 rounded-full text-center text-white flex justify-center items-center" ><span>Expert</span></div>
                        </div>
                    </div>
                    <div className="border-sky-600 border p-6 w-full flex items-center flex-col">
                        <FontAwesomeIcon color='#e34c26' size='8x' icon={faHtml5} />
                        <h4 className="my-2 text-xl text-center text-sky-600">Html/CSS</h4>
                        <div className="w-full bg-gray-300 rounded-full h-8 dark:bg-gray-700">
                            <div className="bg-sky-600 h-8 rounded-full text-center text-white flex justify-end items-center p-4" ><span>Expert</span></div>
                        </div>
                    </div>
                    <div className="border-sky-600 border p-6 w-full flex items-center flex-col">
                        <FontAwesomeIcon color='#3c873a' size='8x' icon={faNode} />
                        <h4 className="my-2 text-xl text-center text-sky-600">NodeJs</h4>
                        <div className="w-full bg-gray-300 rounded-full h-8 dark:bg-gray-700  flex flex-col justify-center items-start">
                            <span className='absolute text-center text-white self-center'>Intermediate</span>
                            <div className="bg-sky-600 w-3/4 h-8 rounded-full self-start" ></div>
                        </div>
                    </div>
                    <div className="border-sky-600 border p-6 w-full flex items-center flex-col">
                        <FontAwesomeIcon color='#42b883' size='8x' icon={faVuejs} />
                        <h4 className="my-2 text-xl text-center text-sky-600">VueJs</h4>
                        <div className="w-full bg-gray-300 rounded-full h-8 dark:bg-gray-700  flex flex-col justify-center items-start">
                            <span className='absolute text-center text-white self-center'>Intermediate</span>
                            <div className="bg-sky-600 w-3/4 h-8 rounded-full self-start" ></div>
                        </div>
                    </div>
                    <div className="border-sky-600 border p-6 w-full flex items-center flex-col">
                        <FontAwesomeIcon color='#61dafb' size='8x' icon={faReact} />
                        <h4 className="my-2 text-xl text-center text-sky-600">React/Next</h4>
                        <div className="w-full bg-gray-300 rounded-full h-8 dark:bg-gray-700  flex flex-col justify-center items-start">
                            <span className='absolute text-center text-white self-center'>Intermediate</span>
                            <div className="bg-sky-600 w-3/4 h-8 rounded-full self-start" ></div>
                        </div>
                    </div>
                    <div className="border-sky-600 border p-6 w-full flex items-center flex-col">
                        <FontAwesomeIcon color='#f89820' size='8x' icon={faJava} />
                        <h4 className="my-2 text-xl text-center text-sky-600">Java</h4>
                        <div className="w-full bg-gray-300 rounded-full h-8 dark:bg-gray-700  flex flex-col justify-center items-start">
                            <span className='absolute text-center text-white self-center'>Proficient</span>
                            <div className="bg-sky-600 w-1/2 h-8 rounded-full self-start" ></div>
                        </div>
                    </div>
                    <div className="border-sky-600 border p-6 w-full flex items-center flex-col">
                        <FontAwesomeIcon color='rgb(24, 49, 83)' size='8x' icon={faDatabase} />
                        <h4 className="my-2 text-xl text-center text-sky-600">Databases</h4>
                        <div className="w-full bg-gray-300 rounded-full h-8 dark:bg-gray-700  flex flex-col justify-center items-start">
                            <span className='absolute text-center text-white self-center'>Proficient</span>
                            <div className="bg-sky-600 w-1/2 h-8 rounded-full self-start" ></div>
                        </div>
                    </div>
                    <div className="border-sky-600 border p-6 w-full flex items-center flex-col">
                        <FontAwesomeIcon color='#cc0000' size='8x' icon={faGem} />
                        <h4 className=" text-xl text-center my-2 text-sky-600">Ruby</h4>
                        <div className="w-full bg-gray-300 rounded-full h-8 dark:bg-gray-700  flex flex-col justify-center items-start">
                            <span className='absolute text-center text-white self-center'>Proficient</span>
                            <div className="bg-sky-600 w-1/2 h-8 rounded-full self-start" ></div>
                        </div>
                    </div>
                </div>
                <h2 className="text-5xl text-center my-8">Hobbies</h2>
                <div className='grid md:grid-cols-3 gap-12 md:mx-16'>
                    <div className="border-sky-600 border p-6 w-full flex items-center flex-col">
                        <FontAwesomeIcon size='8x' color='#5b6d2f' icon={faChessPawn} />
                        <h4 className="my-2 text-xl text-center text-sky-600">Chess</h4>
                        <div className="w-full bg-gray-300 rounded-full h-8 dark:bg-gray-700  flex flex-col justify-center items-start">
                            <span className='absolute text-center text-white self-center'>1300</span>
                            <div className="bg-sky-600 w-3/4 h-8 rounded-full self-start" ></div>
                        </div>
                    </div>
                    <div className="border-sky-600 border p-6 w-full flex items-center flex-col">
                        <FontAwesomeIcon size='8x' color='#bac7d8' icon={faPersonBiking} />
                        <h4 className="my-2 text-xl text-center text-sky-600">Biking</h4>
                        <div className="w-full bg-gray-300 rounded-full h-8 dark:bg-gray-700  flex flex-col justify-center items-start">
                            <span className='absolute text-center text-white self-center'>Amateur</span>
                            <div className="bg-sky-600 w-3/4 h-8 rounded-full self-start" ></div>
                        </div>
                    </div>
                    <div className="border-sky-600 border p-6 w-full flex items-center flex-col">
                        <FontAwesomeIcon size='8x' color='#ea9b67' icon={faUmbrellaBeach} />
                        <h4 className="my-2 text-xl text-center text-sky-600">Surfing</h4>
                        <div className="w-full bg-gray-300 rounded-full h-8 dark:bg-gray-700  flex flex-col justify-center items-start">
                            <span className='absolute text-center text-white self-center'>Begginer</span>
                            <div className="bg-sky-600 w-1/2 h-8 rounded-full self-start" ></div>
                        </div>
                    </div>
                </div>
                <h2 className="text-5xl text-center my-8">Languages</h2>
                <div className='grid md:grid-cols-3 gap-12 md:mx-16'>
                    <div className="border-sky-600 border p-6 w-full flex items-center flex-col">
                        <h4 className="my-2 text-xl text-center text-sky-600">Portuguese</h4>
                        <div className="w-full bg-gray-300 rounded-full h-8 dark:bg-gray-700  flex flex-col justify-center items-start">
                            <span className='absolute text-center text-white self-center'>Native</span>
                            <div className="bg-sky-600 w-full h-8 rounded-full self-start" ></div>
                        </div>
                    </div>
                    <div className="border-sky-600 border p-6 w-full flex items-center flex-col">
                        <h4 className="my-2 text-xl text-center text-sky-600">English</h4>
                        <div className="w-full bg-gray-300 rounded-full h-8 dark:bg-gray-700  flex flex-col justify-center items-start">
                            <span className='absolute text-center text-white self-center'>Fluent</span>
                            <div className="bg-sky-600 w-full h-8 rounded-full self-start" ></div>
                        </div>
                    </div>
                    <div className="border-sky-600 border p-6 w-full flex items-center flex-col">
                        <h4 className="my-2 text-xl text-center text-sky-600">Spanish</h4>
                        <div className="w-full bg-gray-300 rounded-full h-8 dark:bg-gray-700  flex flex-col justify-center items-start">
                            <span className='absolute text-center text-white self-center'>Advanced</span>
                            <div className="bg-sky-600 w-3/4 h-8 rounded-full self-start" ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}