import React from 'react';
import "./DataDosenPenguji.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faUsers, faSignOutAlt, faTrash, faPen, faSearch, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function DataDosenPenguji() {
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
            <div className="search">Data Dosen Penguji</div>
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input type="search" placeholder="Search..." />
        </div>
        </div>
          <div className="table-container">
        <div className="add-button">
          <Link to="/AddPenguji" className="add-link">
            <button className="add-button">Add</button>
          </Link>
        </div>
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Dosen</th>
                  <th>NIDN</th>
                  <th>Jenis Kelamin</th>
                  <th>Kuota</th>
                  <th>Keahlian</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Fulan</td>
                  <td>12345</td>
                  <td>Laki-Laki</td>
                  <td>6</td>
                  <td>Database</td>
                  <td>
                    <Link to="/AddPenguji"><FontAwesomeIcon icon={faPen} /></Link>
                    <Link to="/"><FontAwesomeIcon icon={faTrash} /></Link>
                    <Link to="/DetailPenguji"><FontAwesomeIcon icon={faInfoCircle} /></Link>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Fulan</td>
                  <td>12345</td>
                  <td>Laki-Laki</td>
                  <td>6</td>
                  <td>Database</td>
                  <td>
                    <Link to="/AddPenguji"><FontAwesomeIcon icon={faPen} /></Link>
                    <Link to="/"><FontAwesomeIcon icon={faTrash} /></Link>
                    <Link to="/DetailPenguji"><FontAwesomeIcon icon={faInfoCircle} /></Link>
                  </td>
                </tr>
                
              </tbody>
            </table>  
          </div>
          <footer className="footer">
            <div className="footer-info">
              <p>Showing 2 Out Of 25 Entries</p>
            </div>
            <div className="pagination">
              <a href="#">1</a>
              <a href="#" className="active">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
            </div>
          </footer>

        </div>
    </div>
  </div>
  );
}

export default DataDosenPenguji;
