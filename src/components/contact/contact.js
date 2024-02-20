import './contact.css'
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import ImgPowerBI from './../../imagens-dashboard/PowerBI.svg'


export function Contact () {
    return (
        <>
             <section className='ContainerContact'>
                <div className='title' > 
                <h3>| Entre em contato comigo:</h3>
                </div>

                <div className='BoxInfo'>
                    <div className='ContainerInfo'>

                        <div className='ContainerTextContact'> 
                            
                        <span>
                            <FaLinkedin size={24}/>
                            </span>
                            <p>
                            <a href='https://www.linkedin.com/in/gustavo-scopinho/'>
                                /GustavoScopinho
                                </a>
                            </p>
                          
                        </div>
                       
                            
                        <div className='ContainerTextContact'> 

                        <span>
                        <MdEmail size={24} />

                        </span>
                        <p>
                            gustavo.scopinho@dbccompany.com.br
                        </p>
                        </div>
                    </div>
                </div>
             </section>

             <div className='ContainerPowerBI'>
                <div className='ContainerImg'>
                 <img className='ImagPowerBi' src={ImgPowerBI} />
                </div>
             </div>
        </>
    )
}