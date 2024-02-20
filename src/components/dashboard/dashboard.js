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
                            <p>
                            Objetivos principais e indicadores:
                            </p>
                            <p>
                            Avaliar o status de empréstimo bancário, contendo score e quantidade de dívidas não pagas por quantidades de clientes.
                            </p>
                            <button>
                                <span> <FaSearch /></span> Ver detalhes 
                            </button>
                        </div>
                        <div className='BoxDashboard'>
                            <div className='ContainerImagem'>
                            <img className='ImgDashboard' src={Img2} />
                            </div>
                            <h4>
                            ROTAÇÃO DE CLIENTES BANCÁRIOS
                            </h4>
                            <p>
                            Objetivos principais e indicadores:
                            </p>
                            <p>
                            Controle de rotação de clientes bancários, contendo classificação de score, média de salário, região e segmentações.
                            </p>
                            <button>
                                <span> <FaSearch /></span> Ver detalhes 
                            </button>
                        </div>
                        <div className='BoxDashboard'>
                        <div className='ContainerImagem'>
                            <img className='ImgDashboard' src={Img3} />
                            </div>
                            <h4>
                            GESTÃO DE PROJETOS
                            </h4>
                            <p>
                            Objetivos principais e indicadores:
                            </p>
                            <p>
                            Dashboard de vendas com análises de lucro por categoria e sub-categoria, tipos de pagamento, quantia por mês e filtro por estado.
                            </p>
                            <button>
                            <span> <FaSearch /></span> Ver detalhes 
                            </button>
                        </div>
                        <div className='BoxDashboard'>
                        <div className='ContainerImagem'>
                            <img className='ImgDashboard' src={Img4} />
                            </div>
                            <h4>
                            VISUALIZAÇÃO & ANÁLISE DE DADOS
                            </h4>
                            <p>
                            Objetivos principais e indicadores:
                            </p>
                            <p>
                            Valores de Receita e Volume geral, sendo distribuidos por categoria, receita por ano e filtro por data e sub-categoria.

                            </p>
                            <button>
                            <span> <FaSearch /></span> Ver detalhes 
                            </button>
                        </div>
                        <div className='BoxDashboard'>
                            <div className='ContainerImagem'>
                                <img className='ImgDashboard' src={Img5} />
                                </div>
                                <h4>
                                DESIGN DE DASHBOARDS
                                </h4>
                                <p>
                                Objetivos principais e indicadores:
                                </p>
                                <p>
                                Indicadores de duração por campanha. Buscando a quantidade de cliente que subscreveu depósito a prazo por cada mês.
                                </p>
                                <button>
                                <span> <FaSearch /></span> Ver detalhes 
                                </button>
                            </div>
                        <div className='BoxDashboard'>
                        <div className='ContainerImagem'>
                            <img className='ImgDashboard' src={Img6} />
                            </div>
                            <div className='ContainerText'>
                            <h4>
                            GESTÃO DE PROJETOS
                            </h4>
                            <p>
                            Objetivos principais e indicadores:
                            </p>
                            <p>
                            People Analytics - análise de perfil de colaboradores,formação, porcentagem de gênero, faixa etária, nível de senioridade dos times e filtros para afunilamento.
                            </p>
                            <button>
                            <span> <FaSearch /></span> Ver detalhes 
                            </button>
                        </div>
                        </div>
                    </section>
            </section>
        </>
    )
}