import "./Home.css"
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faUsers, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <h2>SIPTATIF</h2>
        <ul>
          <li><Link to="/home"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
          <li><Link to="/datamahasiswa"><FontAwesomeIcon icon={faUser} /> Data Mahasiswa</Link></li>
          <li className="dropdown">
            <a href="#"><FontAwesomeIcon icon={faUsers} /> Dosen</a>
            <ul className="dropdown-content">
              <li><Link to="/datadosenpembimbing">Pembimbing</Link></li>
              <li><Link to="/datadosenpenguji">Penguji</Link></li>
            </ul>
          </li>
        </ul> 
        <div className="logout">
          <ul>
            <li><Link to="/"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Link></li> 
          </ul>        
        </div>
      </div>
      <div className="content">
        <div className="header">
          <div className="welcome">
            Welcome back, Fulan !!!
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            <div className="Koordinator-TA"><Link to="#"><FontAwesomeIcon icon={faUser} /><span>Koordinator TA</span></Link></div>
          </div>  
        </div>
        {/* Tambahkan komponen lain di sini */}
      </div>
      <div className="Content-Home">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis beatae commodi aperiam architecto dignissimos, aliquam nam repudiandae quam unde! Quibusdam mollitia ullam temporibus omnis? Nihil, assumenda rem? Vitae, laboriosam provident!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis beatae commodi aperiam architecto dignissimos, aliquam nam repudiandae quam unde! Quibusdam mollitia ullam temporibus omnis? Nihil, assumenda rem? Vitae, laboriosam provident!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis beatae commodi aperiam architecto dignissimos, aliquam nam repudiandae quam unde! Quibusdam mollitia ullam temporibus omnis? Nihil, assumenda rem? Vitae, laboriosam provident!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis beatae commodi aperiam architecto dignissimos, aliquam nam repudiandae quam unde! Quibusdam mollitia ullam temporibus omnis? Nihil, assumenda rem? Vitae, laboriosam provident!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis beatae commodi aperiam architecto dignissimos, aliquam nam repudiandae quam unde! Quibusdam mollitia ullam temporibus omnis? Nihil, assumenda rem? Vitae, laboriosam provident!</p>
      </div>
    </div>
  );
}

export default Home;
