import ImagemGu from '../../foto-gu.svg'
import './presentation.css'
import { IoMdPerson } from "react-icons/io";

export function Presentation() {
    return (
        <>
            <section className='SectionPresentation'>
                <div className='ContainerName'>
                    <div>
                        <h3>Olá! Meu nome é</h3>
                        <h1>Gustavo Scopinho</h1>
                        <p>Desenvolvo dashboards interativos e automatizados de fácil visualização.</p>
                        <button>
                            Sobre mim <span><IoMdPerson size={18} /></span>
                        </button>
                    </div>
                    <div className='ContainerImagem'>
                    <img className='ImgGu' src={ImagemGu}/>
                    </div>
                </div>
                <div></div>
            </section>
        </>
    )
}