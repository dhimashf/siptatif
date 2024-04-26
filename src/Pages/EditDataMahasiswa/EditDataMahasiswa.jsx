import React from 'react';
import "./EditDataMahasiswa.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faUsers, faSignOutAlt, faTrash, faPen, faSearch, faFile } from '@fortawesome/free-solid-svg-icons';

function EditDataMahasiswa() {
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
            <ul>
                <li><Link to="/EditDataMahasiswa"> Berkas Mahasiswa</Link></li>
                <li><Link to="/InputPenguji"> Input Dosen Penguji</Link></li>
            </ul> 
        <div className="container-berkasmahasiswa">
            <form>
                <div className="form-group">
                    <label htmlFor="nama">Jenis Pendaftaran</label>
                    <div className="input-text">Seminar Proposal</div>
                </div>
                <div className="form-group">
                    <label htmlFor="nama">Nama Mahasiswa</label>
                    <div className="input-text">Dhimas Hadid</div>
                </div>
                <div className="form-group">
                    <label htmlFor="nama">NIM</label>
                    <div className="input-text">12250111231</div>
                </div>
                <div className="form-group">
                    <label htmlFor="nama">Judul</label>
                    <div className="input-text">Pengaruh Power Hero Terhadap Laning Phase</div>
                </div>
                <div className="form-group">
                    <label htmlFor="nama">Kategori TA</label>
                    <div className="input-text">Skripsi</div>
                </div>
                <div className="form-group">
                    <label htmlFor="nama">Calon Dosen Pembimbing 1</label>
                    <div className="input-text">Fulan S.Tank</div>
                </div>
                <div className="form-group">
                    <label htmlFor="nama">Calon Dosen Pembimbing 2</label>
                    <div className="input-text">Ahmad S.Tank</div>
                </div>
                <div className="form-group">
                    <label htmlFor="nama">Berkas</label>
                    <div className="input-text"><Link to="datadummy.txt"><FontAwesomeIcon icon={faFile} /></Link></div>
                </div>
                <div className="form-group1">
                    <label htmlFor="status_berkas">Status Berkas</label>
                    <div className="input-text">
                        <label htmlFor="diterima">
                            <input type="checkbox" id="diterima" name="status_berkas" />
                            Diterima
                        </label>
                        <label htmlFor="ditolak">
                            <input type="checkbox" id="ditolak" name="status_berkas" />
                            Ditolak
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="nama">Catatan Untuk Mahasiswa</label>
                    <div className="input-text">Rotasi!!</div>
                </div>
                <button type="submit">Daftar</button>
            </form>
            <div className="kembali">
                <Link to="/datamahasiswa">
                     <i className="fas fa-arrow-left back-icon"></i>
                    <span>Kembali</span>
                </Link>
            </div>
        </div>

          </div>
        </div>
  );
}

export default EditDataMahasiswa;
