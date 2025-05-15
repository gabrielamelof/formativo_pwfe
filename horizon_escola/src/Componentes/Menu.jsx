import estilos from './Menu.module.css';
import ambiente from '../assets/ambiente.png';
import disciplina from '../assets/disciplina.png';
import professor from '../assets/professor.png';
import gestor from '../assets/gestor.png';

export function Menu(){
    return(
        <div className={estilos.container}>
            <table>
                <tbody>
                    {/* linhas */}
                    <tr> 
                        {/* colunas */}
                        <td>
                            <img src={disciplina} alt="" />
                            <label alt='Disciplinas do Professor'>Disciplinas</label> 
                        </td>
                        <td>
                            <img src={ambiente} alt="" />
                            <label alt="">Ambientes</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={professor} alt="" />
                            <label alt="">Professor </label>
                        </td>
                        <td>
                            <img src={gestor} alt="" />
                            <label alt="">Gestores</label>
                        </td>
                    </tr>
                </tbody>
            </table>
        
        </div>
    )
}