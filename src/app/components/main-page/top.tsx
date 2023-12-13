import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'

export default function Top() {
    const bio = `Software engineer with 9 years of experience. My main focus is reactive-functional programming especially with angular, but I also have backend experience developing APIs and microservices.`
    const bio2 = `Even though I am specialized in Angular I am a believer in clean code and I am not attached to any technology or language. I am currently living in Florianópolis but I am willing to move or work remotely. I am looking for a senior or tech lead position.`
    return (
        <section>
            <div className='container '>
                <div className='flex text-lg flex-col md:flex-row'>
                    <div className='flex flex-col items-center md:mr-12  px-10'>
                        <img src="eu.jpeg" className="rounded-full w-48" alt="" />
                        <span className="mt-4 text-gray-600">Eduardo Vargas</span>
                        <span className=" text-gray-600">Senior FullStack Engineer</span>
                        <span className=" text-gray-600">eduardo704@gmail.com</span>
                        <div className="mt-4 w-full flex gap-8 justify-center">
                            <a target='_blank' href='https://github.com/eduardo704'> <FontAwesomeIcon color='#7f7f7f' size='2xl' icon={faGithub} /></a>
                            <a target='_blank' href='https://www.linkedin.com/in/eduardo704/'> <FontAwesomeIcon color='#007bb5' size='2xl' icon={faLinkedin} /></a>
                            <a target='_blank' href='https://stackoverflow.com/users/4636680/eduardo-vargas'> <FontAwesomeIcon color='#f48024' size='2xl' icon={faStackOverflow} /></a>
                            <a target='_blank' href='../Eduardo Vargas - English CV.pdf'> <FontAwesomeIcon size='2xl' icon={faFile} /></a>
                        </div>
                    </div>
                    <div className='md:w-3/4'>
                        <h2 className='text-5xl mt-12 md:mt-0 md:font-bold mb-8 text-sky-600'>Biography</h2>
                        <p className='mt-2 text-gray-600'>{bio}</p>
                        <p className='mt-2 text-gray-600'>My core skills are javascript, nodejs, and Angular which I am currently <a className='hover:underline text-sky-600' href='https://pt.stackoverflow.com/tags/angular/info' target='_blank'>top 1% on StackOverflow.</a> {bio2}</p>
                        <p className='mt-2 text-gray-600'>I am always open to new opportunities, collaborations, and discussions about technology. Feel free to connect with me on [LinkedIn/GitHub/email] to explore potential collaborations.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
