import React from 'react'

const Navbar = () => {
  return (
    <div className="App">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
 <div className="container-fluid">
   <a className="navbar-brand mx-3" href="/">Floral<span>Haven</span></a>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarNavDropdown">
     <ul className="navbar-nav mx-auto">
       <li className="nav-item mx-5">
         <a className="nav-link active" aria-current="page" href="/">Home</a>
       </li>
       <li className="nav-item mx-5">
         <a className="nav-link " href="/">Flowers</a>
       </li>
       <li className="nav-item mx-5">
         <a className="nav-link" href="/">About Us</a>
       </li>
       <li className="nav-item mx-5">
         <a className="nav-link" href="/">Contact</a>
       </li>
       
      
        </ul>
        </div>
        <ul className="navbar-nav">

        <li className="nav-item dropdown mx-4">
                <a className="nav-link dropdown-toggle text-black" href="/" id="navbarDropdown" role="button"
                data-mdb-toggle="dropdown" aria-expanded="false"> <i className="far fa-user fa-lg "></i></a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li>
                        <a className="dropdown-item" href="/">My account</a>
                    </li>

                    <li>
                        <a className="dropdown-item" href="/">Log out</a>
                    </li>
                </ul>
            </li>
            <li className="nav-item me-3 me-lg-0 mx-4">
                <a className="nav-link text-black" href="/"><i class="fas fa-shopping-cart fa-lg mx-1"></i></a>
            </li>
            </ul>
      
 </div>
</nav>


   </div>
  )
}

export default Navbar
