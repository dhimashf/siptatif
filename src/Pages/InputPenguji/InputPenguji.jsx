import React from 'react';
import "./InputPenguji.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faUsers, faSignOutAlt, faTrash, faPen, faSearch, faFile } from '@fortawesome/free-solid-svg-icons';

function InputPenguji() {
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
      </div>
      <div className="Content-EditDataMahasiswa1">
        <ul className="penguji">
          <li><Link to="/EditDataMahasiswa"> Berkas Mahasiswa</Link></li>
          <li><Link to="/InputPenguji"> Input Dosen Penguji</Link></li>
          <li>
            <Link to="#">
              <div className="search-containerPenguji">
                <div className="searchPenguji"></div>
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input type="search" placeholder="Search..." />
              </div>
            </Link>
          </li> 
        </ul>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Dosen</th>
              <th>NIDN</th>
              <th>Jenis Kelamin</th>
              <th>Kuota</th>
              <th>Keahlian</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Fulan</td>
              <td>12345</td>
              <td>Laki-Laki</td>
              <td>8</td>
              <td>Programming</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>2</td>
              <td>Fulan</td>
              <td>12345</td>
              <td>Laki-Laki</td>
              <td>8</td>
              <td>Programming</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>3</td>
              <td>Fulan</td>
              <td>12345</td>
              <td>Laki-Laki</td>
              <td>8</td>
              <td>Programming</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>4</td>
              <td>Fulan</td>
              <td>12345</td>
              <td>Laki-Laki</td>
              <td>8</td>
              <td>Programming</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>5</td>
              <td>Fulan</td>
              <td>12345</td>
              <td>Laki-Laki</td>
              <td>8</td>
              <td>Programming</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="dosen-penguji">
        <label htmlFor="nama">Dosen Penguji 1</label>
        <div className="input-text">Fulan S.T.,M.T.</div>
      </div>
      <div className="dosen-penguji">
        <label htmlFor="nama">Dosen Penguji 2</label>
        <div className="input-text">Fulan S.T.,M.T.</div>
      </div>
      <button className="dosen-button">Kirim</button>
      <Link to="/DataMahasiswa" className="dosen-button">Kembali</Link>

    </div>
  );
}

export default InputPenguji;
