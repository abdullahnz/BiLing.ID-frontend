import { Col } from "react-bootstrap";
 
import { ReactComponent as User } from "../../../assets/icon/user.svg";
import { ReactComponent as Note } from "../../../assets/icon/note.svg";
import { ReactComponent as Calendar } from "../../../assets/icon/calendar.svg";
import { ReactComponent as ClipboardTick } from "../../../assets/icon/clipboard-tick.svg";
import { ReactComponent as Setting } from "../../../assets/icon/setting.svg";
import { ReactComponent as Logout } from "../../../assets/icon/logout.svg";

import { SidebarLink, SidebarHeader } from "./sidebar.component";
 
const Sidebar = ({ fullname, email }) => {
  let currentPath = window.location.pathname
  if (currentPath === "/dashboard") 
    currentPath += "/profile"
  return (
    <Col xs={3} className="bg-white shadow-1 rounded-40" style={{ height: "fit-content" }}>
      <div className="my-5 mx-3">
        <SidebarHeader name={fullname} email={email} />
        <div className="pt-2">
          <SidebarLink to="/dashboard/profile" icon={<User />} text="Profil" active={currentPath} />
          <SidebarLink to="/dashboard/psikotes" icon={<Note />} text="Psikotes" active={currentPath} />
          <SidebarLink to="/dashboard/jadwal" icon={<Calendar />} text="Jadwal" active={currentPath} />
          <SidebarLink to="/dashboard/riwayat" icon={<ClipboardTick />} text="Riwayat" active={currentPath} />
          <SidebarLink to="/dashboard/setting" icon={<Setting />} text="Pengaturan" active={currentPath} />
          <SidebarLink to="/dashboard/logout" icon={<Logout />} text="Keluar" />
        </div>
      </div>
    </Col>
  );
};

export default Sidebar