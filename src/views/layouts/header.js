import { useNavigate } from "react-router-dom";
import {
  Navigation,
  NavigationDropdown,
  NavigationDropdownItem,
  NavigationLink,
} from "../components/navigation"

import { PersonFill } from "react-bootstrap-icons";
import { Button } from "../components/button"
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Header = (props) => {
  
  const parseUserFromCookies = () => {
    return JSON.parse(Cookies.get('user') || "false" );
  }

  const [user, setUser] = useState({});

  useEffect(() => {
    const user = parseUserFromCookies();
    if (!user) {
      return navigate("/login");
    }
    setUser(() => user);
  }, [])

  const navigate = useNavigate();
  
  const redirectToLogin = () => {
    navigate("/login");
  }

  return (
    <Navigation {...props}>
      <NavigationLink href="/#tentang-kami">Tentang Kami</NavigationLink>
      <NavigationDropdown title="Layanan">
        <NavigationDropdownItem href="/psikotes" text="Simulasi Psikotes" />
        <NavigationDropdownItem href="/psikotes" text="Psikotes" />
        <NavigationDropdownItem href="/konseling" text="Konseling" />
      </NavigationDropdown>
      <NavigationLink href="/#testimoni">Testimoni</NavigationLink>
      <NavigationLink href="/#faq">FAQ</NavigationLink>
      {user ? (
        <NavigationLink href="/dashboard/profile">
          <PersonFill size={24} />
          {user.fullname}
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
