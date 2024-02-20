import './dashboard.css'
import Img1 from './../../imagens-dashboard/1.svg'
import Img2 from './../../imagens-dashboard/2.svg'
import Img3 from './../../imagens-dashboard/3.svg'
import Img4 from './../../imagens-dashboard/4.svg'
import Img5 from './../../imagens-dashboard/5.svg'
import Img6 from './../../imagens-dashboard/6.svg'
import { FaSearch } from "react-icons/fa";



export function Dashboard () {
    return(

        <>
            <section className='ContainerDashboard'>
                <div className='title' > 
                <h3>| Explore alguns projetos que já desenvolvi:</h3>
                </div>

                <section className='Dashboard'>
                        <div className='BoxDashboard'>
                            <div className='ContainerImagem'>
                            <img className='ImgDashboard' src={Img1} />
                            </div>
                            <h4>
                            STATUS DE EMPRÉSTIMO BANCÁRIO
                            </h4>
                            <p className='subtitle'>
                            Objetivos principais e indicadores:
                            </p>
                            <p>
                            Avaliar o status de empréstimo bancário, contendo score e quantidade de dívidas não pagas por quantidades de clientes.
                            </p>
                            <a href='https://app.powerbi.com/groups/me/reports/17110552-135c-4c67-becd-c56f906eb5f4/ReportSection?experience=power-bi'>
                            <button>
                                <span> <FaSearch /></span> Ver detalhes 
                            </button>
                            </a>
                        </div>
                        <div className='BoxDashboard'>
                            <div className='ContainerImagem'>
                            <img className='ImgDashboard' src={Img2} />
                            </div>
                            <h4>
                            ROTAÇÃO DE CLIENTES BANCÁRIOS
                            </h4>
                            <p className='subtitle'>
                            Objetivos principais e indicadores:
                            </p>
                            <p>
                            Controle de rotação de clientes bancários, contendo classificação de score, média de salário, região e segmentações.
                            </p>
                            <a href='https://app.powerbi.com/groups/me/reports/a672384e-8c27-4f66-86e5-952f0647093e/ReportSection?experience=power-bi'>
                            <button>
                                <span> <FaSearch /></span> Ver detalhes 
                            </button>
                            </a>
                        </div>
                        <div className='BoxDashboard'>
                        <div className='ContainerImagem'>
                            <img className='ImgDashboard' src={Img3} />
                            </div>
                            <h4>
                            GESTÃO DE PROJETOS
                            </h4>
                            <p className='subtitle'>
                            Objetivos principais e indicadores:
                            </p>
                            <p>
                            Dashboard de vendas com análises de lucro por categoria e sub-categoria, tipos de pagamento, quantia por mês e filtro por estado.
                            </p>
                            <a href='https://app.powerbi.com/groups/me/reports/abe5770f-64f1-4537-9769-4b2ae0831e39/ReportSection?experience=power-bi'>
                            <button>
                            <span> <FaSearch /></span> Ver detalhes 
                            </button>
                            </a>
                        </div>
                        <div className='BoxDashboard'>
                        <div className='ContainerImagem'>
                            <img className='ImgDashboard' src={Img4} />
                            </div>
                            <h4>
                            VISUALIZAÇÃO & ANÁLISE DE DADOS
                            </h4>
                            <p className='subtitle'>
                            Objetivos principais e indicadores:
                            </p>
                            <p>
                            Valores de Receita e Volume geral, sendo distribuidos por categoria, receita por ano e filtro por data e sub-categoria.

                            </p>
                            <a href='https://app.powerbi.com/groups/me/reports/9cdcf448-1a29-45c9-b797-d1e97bcb4e7d/ReportSection?experience=power-bi'>
                            <button>
                            <span> <FaSearch /></span> Ver detalhes 
                            </button>
                            </a>
                        </div>
                        <div className='BoxDashboard'>
                            <div className='ContainerImagem'>
                                <img className='ImgDashboard' src={Img5} />
                                </div>
                                <h4>
                                DESIGN DE DASHBOARDS
                                </h4>
                                <p className='subtitle'>
                                Objetivos principais e indicadores:
                                </p>
                                <p>
                                Indicadores de duração por campanha. Buscando a quantidade de cliente que subscreveu depósito a prazo por cada mês.
                                </p>
                                <a href='https://app.powerbi.com/groups/me/reports/3d10f599-93f9-4de0-8297-1d6a96900b1b/ReportSection?experience=power-bi'>
                                <button>
                                <span> <FaSearch /></span> Ver detalhes 
                                </button>
                                </a>
                            </div>
                        <div className='BoxDashboard'>
                        <div className='ContainerImagem'>
                            <img className='ImgDashboard' src={Img6} />
                            </div>
                            <div className='ContainerText'>
                            <h4>
                            GESTÃO DE PROJETOS
                            </h4>
                            <p className='subtitle'>
                            Objetivos principais e indicadores:
                            </p>
                            <p>
                            People Analytics - análise de perfil de colaboradores,formação, porcentagem de gênero, faixa etária, nível de senioridade dos times e filtros para afunilamento.
                            </p>
                            <a href='https://app.powerbi.com/groups/me/reports/8f718bc3-8376-42cf-9627-354acf12f6b6/ReportSection?experience=power-bi'>
                            <button>
                            <span> <FaSearch /></span> Ver detalhes 
                            </button>
                            </a>
                        </div>
                        </div>
                    </section>
            </section>
        </>
    )
}