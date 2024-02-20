import './skills.css'
import ImgGrafico from '../../grafico-pizza.png'
import ImgRocket from '../../design.png'
import ImgDesign from '../../rocket.png'

export function Skills () {
    return (
        <>
            <article>
                <div className='title'>
                    <h3>
                    | Principais habilidades:
                    </h3>
                </div>
                <section className='ContainerSkills'>
                    <div className='BoxFirst'>
                        <img className='IconSkills' src={ImgGrafico} />
                        <h4>
                        VISUALIZAÇÃO & ANÁLISE DE DADOS
                        </h4>
                        <p>
                        Desenvolvimento de dashboards profissionais através da ferramenta Power BI,
                        </p>
                    </div>
                    <div className='Box'>
                         <img className='IconSkills' src={ImgDesign} />
                        <h4>
                        DESIGN DE DASHBOARDS
                        </h4>
                        <p>
                        Aplicação do Figma ou Power Point para elaborar layouts premium para projetos de Business Intelligence.
                        </p>
                    </div>
                    <div className='Box'>
                         <img className='IconSkills' src={ImgRocket} />
                        <h4>
                        GESTÃO DE PROJETOS
                        </h4>
                        <p>
                        Implementação de softwares (Power BI) e otimização de processos através de dashboards de fácil interpretação e visualização.
                        </p>
                    </div>
                </section>
            </article>
        </>
    )

}