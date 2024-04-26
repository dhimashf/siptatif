import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login"
import LupaPassword from "./Pages/LupaPassword/LupaPassword";
import DataMahasiswa from "./Pages/DataMahasiswa/datamahasiswa";
import EditDataMahasiswa from "./Pages/EditDataMahasiswa/EditDataMahasiswa";
import InputPenguji from "./Pages/InputPenguji/InputPenguji";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataDosenPembimbing from "./Pages/DataDosenPembimbing/DataDosenPembimbing";
import DataDosenPenguji from "./Pages/DataDosenPenguji/DataDosenPenguji"
import AddPembimbing from "./Pages/AddPembimbing/AddPembimbing"
import AddPenguji from "./Pages/AddPenguji/AddPenguji";
import DetailPenguji from "./Pages/DetailPenguji/DetailPenguji";
import DetailPembimbing from "./Pages/DetailPembimbing/DetailPembimbing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/lupapassword" element={<LupaPassword/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/datamahasiswa" element={<DataMahasiswa/>}/>
          <Route path="/Editdatamahasiswa" element={<EditDataMahasiswa/>}/>
          <Route path="/InputPenguji" element={<InputPenguji/>}/>
          <Route path="/datadosenpembimbing" element={<DataDosenPembimbing/>}/>
          <Route path="/datadosenpenguji" element={<DataDosenPenguji/>}/>
          <Route path="/AddPembimbing" element={<AddPembimbing/>}/>
          <Route path="/DetailPembimbing" element={<DetailPembimbing/>}/>
          <Route path="/AddPenguji" element={<AddPenguji/>}/>
          <Route path="/DetailPenguji" element={<DetailPenguji/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
