import { useNavigate } from "react-router-dom";
import {
  Navigation,
  NavigationDropdown,
  NavigationDropdownItem,
  NavigationLink,
} from "../components/navigation"
import { Button } from "../components/button";
import { PersonFill } from "react-bootstrap-icons";

import { config } from "../../global/config";

const Header = (props) => {
  const navigate = useNavigate();
  const redirectToLogin = () => {
    navigate("/login");
  }
  
  const user = config.user;

  return (
    <Navigation {...props}>
      <NavigationLink href="#a">Tentang Kami</NavigationLink>
      <NavigationDropdown title="Layanan">
        <NavigationDropdownItem href="#b-1" text="Simulasi Psikotes" />
        <NavigationDropdownItem href="#b-2" text="Psikotes" />
        <NavigationDropdownItem href="#b-3" text="Konseling" />
      </NavigationDropdown>
      <NavigationLink href="#c">Testimoni</NavigationLink>
      <NavigationLink href="#d">FAQ</NavigationLink>
      {user.login ? (
        <NavigationLink href="/dashboard/profile">
          <PersonFill size={24} />
          {user.name}
        </NavigationLink>
      ) : (
        <NavigationLink href="#">
          <Button onClick={redirectToLogin} label={"Masuk"} />
        </NavigationLink>
      )}
    </Navigation>
  );
};

export default Header;
