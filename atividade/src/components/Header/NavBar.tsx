import Logo from '../Header/img/android-chrome-192x192.png'

function NavBar () {
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
    <div className="container-fluid">
        <img className="img-btn-navbar-prota" src={Logo} alt="icone"/>
      <a className="navbar-brand" href="index.html"> 
        <div>
            Prota Developer
        </div> 
    </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="index.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="index-qs.html">Quem Somos</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="index-ns.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Nossos Cursos 
            </a> 
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="index-ns.html">Programação Front-end</a></li>
              <li><a className="dropdown-item" href="index-ns.html">Programação Back-end</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="index-ns.html">Programação Full-Stack</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Mais
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="index-dda.html">Depoimentos dos Alunos</a></li>
              <li><a className="dropdown-item" href="index-pf.html">Perguntas Frequentes</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="index-c.html">Contato</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-dark" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
        </div>
    )
}

export default NavBar;