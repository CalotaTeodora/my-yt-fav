import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">MyFavYoutube</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/content">List of Youtubers</Link>
        </li>
      </ul>
      <form class="d-flex">
        <Link class="nav-link" to='/findme'>
        <p1 class="text-dark" >find me</p1>
        </Link>
        
      </form>
    </div>
  </div>
</nav>
        </>
    );

}

export default NavBar;