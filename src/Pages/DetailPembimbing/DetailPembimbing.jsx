import React from 'react';
import "./DetailPembimbing.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faUsers, faSignOutAlt, faTrash, faPen, faSearch } from '@fortawesome/free-solid-svg-icons';

function DetailPembimbing() {
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
            Hello, Fulan !!!
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            <div className="Koordinator-TA"><Link to="#"><FontAwesomeIcon icon={faUser} /><span>Koordinator TA</span></Link></div>
          </div>  
        </div>
        <div className="main-content">
        <div class="search-container">
        <div className="search-container">
            <div className="search">Fulan S.T.,M.T.</div>
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input type="search" placeholder="Search..." />
        </div>

        </div>
          <div className="table-container">
          <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Mahasiswa</th>
              <th>NIM</th>
              <th>Jenis Kelamin</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Fulan</td>
              <td>12345</td>
              <td>Laki-Laki</td>
              <td>Fulan@gmail.com</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>2</td>
              <td>Fulan</td>
              <td>12345</td>
              <td>Laki-Laki</td>
              <td>Fulan@gmail.com</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>3</td>
              <td>Fulan</td>
              <td>12345</td>
              <td>Laki-Laki</td>
              <td>Fulan@gmail.com</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>4</td>
              <td>Fulan</td>
              <td>12345</td>
              <td>Laki-Laki</td>
              <td>Fulan@gmail.com</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>5</td>
              <td>Fulan</td>
              <td>12345</td>
              <td>Laki-Laki</td>
              <td>Fulan@gmail.com</td>
            </tr>
          </tbody>
        </table>
          </div>
          <footer className="footer">
            <div className="footer-info">
              <p>Showing 5 Out Of 25 Entries</p>
            </div>
            <div className="pagination">
              <a href="#">1</a>
              <a href="#" className="active">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
            <div className="kembali">
                <Link to="/datadosenpembimbing">
                    <span>Kembali</span>
                </Link>
            </div>
            </div>
          </footer>

        </div>
    </div>
  </div>
  );
}

export default DetailPembimbing;
