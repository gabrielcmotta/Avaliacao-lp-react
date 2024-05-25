import Leonardo from '../Main/imgM/Leonardo.jpg'
import LuizCarlos from '../Main/imgM/Luiz Carlos.jpg'
import Marques from '../Main/imgM/Marques.jpg'

function DepoimentoDosAlunos () {
    return(
        <div>
            <h4 id="tt-dda">Depoimento dos Alunos</h4>
    <div className="container-sm container-dda">
    
        <div className="card">
            <img src={Leonardo} className="card-img-top" alt="Leonardo"/>
            <div className="card-body card-dda">
              <p className="card-text">"Conheci o Mota há 5 anos atrás, eramos motorista de aplicativo. Hoje eu tive o privilegio de realizar esse curso que ele criou e consegui mudar a minha vida e a da minha família" <p>- Leonardo Lima</p> </p> 
            </div>
          </div>

          <div className="card">
            <img src={LuizCarlos} className="card-img-top" alt="LuizCarlos"/>
            <div className="card-body card-dda">
              <p className="card-text">"Simplesmente o melhor curso de Fortaleza para quem quer se tornar um programador, se não for o melhor do Ceará. Eternamente grato a toda a equipe do Prota" <p>- Luiz Carlos</p> </p>
            </div>
          </div>

          <div className="card">
            <img src={Marques} className="card-img-top" alt="Marques"/>
            <div className="card-body card-dda">
              <p className="card-text">"Cara, eu simplesmente amei esse curso. Finalmente eu consegui realizar a tão sonhada transição de carreira e largar o trade. Obrigado Prota!" <p>- Marques Matos</p> </p>
            </div>
          </div>
    </div>
        </div>
    )
}

export default DepoimentoDosAlunos;