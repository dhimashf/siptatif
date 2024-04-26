import React from 'react';
import "./AddPenguji.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faUsers, faSignOutAlt, faTrash, faPen, faSearch, faFile } from '@fortawesome/free-solid-svg-icons';

function AddPenguji() {
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
    <div className="Content-EditDataMahasiswa"> 
    <h1>Edit Data Dosen</h1>
        <div className="container-berkasmahasiswa">
            <form>
                <div className="form-grouppembimbing">
                    <label htmlFor="nama">Nama Dosen</label>
                    <div className="input-text">Fulan S.T.,M.T.</div>
                </div>
                <div className="form-grouppembimbing">
                    <label htmlFor="nama">NIDN</label>
                    <div className="input-text">12345</div>
                </div>
                <div className="form-grouppembimbing">
                    <label htmlFor="nama">Jenis Kelamin</label>
                    <div className="input-text">Laki-Laki</div>
                </div>
                <div className="form-grouppembimbing">
                    <label htmlFor="nama">Kuota Bimbingan</label>
                    <div className="input-text">6</div>
                </div>
                <div className="form-grouppembimbing">
                    <label htmlFor="nama">Keahlian</label>
                    <div className="input-text">Programming</div>
                </div>
            </form>
            <div className="kembali">
                <Link to="#">
                     <i className="fas fa-arrow-left back-icon"></i>
                    <span>Daftar</span>
                </Link>
            </div>
            <div className="kembali">
                <Link to="/datadosenpembimbing">
                     <i className="fas fa-arrow-left back-icon"></i>
                    <span>Kembali</span>
                </Link>
            </div>
        </div>

          </div>
        </div>
  );
}

export default AddPenguji;
