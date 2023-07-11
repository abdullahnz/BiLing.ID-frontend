
import { ReactComponent as User } from "../../../assets/icon/user.svg";
import { ReactComponent as Note } from "../../../assets/icon/note.svg";
import { ReactComponent as Calendar } from "../../../assets/icon/calendar.svg";
import { ReactComponent as ClipboardTick } from "../../../assets/icon/clipboard-tick.svg";
import { ReactComponent as Setting } from "../../../assets/icon/setting.svg";
import { ReactComponent as Logout } from "../../../assets/icon/logout.svg";

import { Col } from "react-bootstrap";
import { useState } from "react"; 
import { useNavigate } from "react-router-dom";

import { SidebarLink, SidebarHeader, SidebarButton } from "./sidebar.component";
import { Button } from "../../../components/button";
import styles from "../styles/style.module.css"

import Cookies from "js-cookie";


const Sidebar = (props) => { 
  const navigate = useNavigate()
  const [logout, setLogout] = useState(false)

  const handleCancelLogout = () => {
    setLogout((logout) => !logout)
  }

  const handleLogout = () => {
    Cookies.remove('user');
    Cookies.remove('token');
    navigate('/dashboard/logout')
  }
  
  return (
    <>
      {logout && <div className={styles.blur}></div>}
      <div className={`${logout ? styles.popupConfirm : styles.popupConfirmHide} border`}>
        <h4 className="mb-3">Konfirmasi Keluar</h4>
        <span className="mb-5">Apakah kamu yakin akan keluar?</span>
        <div className="text-end">
          <Button label={"Batal"} className="btn-light me-2" onClick={handleCancelLogout} />
          <Button label={"Keluar"} className="btn-danger" onClick={handleLogout} />
        </div>
      </div>
      <Col xs={3} className="bg-white shadow-1 rounded-40" style={{ height: "fit-content" }}>
        <div className="my-5 mx-3">
          <SidebarHeader name={props.user.fullname} email={props.user.email} />
          <div className="pt-2">
            <SidebarLink to="/dashboard/profile" icon={<User />} text="Profil" />
            <SidebarLink to="/dashboard/psikotes" icon={<Note />} text="Psikotes" />
            <SidebarLink to="/dashboard/jadwal" icon={<Calendar />} text="Jadwal" />
            <SidebarLink to="/dashboard/riwayat" icon={<ClipboardTick />} text="Riwayat" />
            <SidebarLink to="/dashboard/setting" icon={<Setting />} text="Pengaturan" />
            <SidebarButton icon={<Logout />} text="Keluar" onClick={handleCancelLogout} />
          </div>
        </div>
      </Col>
    </>
  );
};

export default Sidebar