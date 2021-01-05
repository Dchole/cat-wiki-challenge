import Link from "next/link";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";

const Header = () => {
  return (
    <header>
      <Container>
        <Toolbar disableGutters>
          <Link href="/">
            <a>
              <img src="/logo.svg" alt="logo" width="128" height="43" />
            </a>
          </Link>
        </Toolbar>
      </Container>
    </header>
  );
};

export default Header;
