/* eslint-disable no-return-assign */
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import "./style.scss";

const Menu = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  // ajout de cette variable pour gérer la transition qui nous amène vers le composant cliqué via le li dans la navbar//

  return (
    <nav>
      <Logo />
      <ul>
        <li>
          <a onClick={() => scrollToSection("nos-services")}>Nos services</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("nos-realisations")}>Nos réalisations</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("notre-equipe")}>Notre équipe</a>
        </li>
      </ul>
      <Button title="Contact" onClick={() => scrollToSection("contact")}>
        Contact
      </Button>
  
    </nav>
    // appel de la variable créée plus haut pour chaques li //
  );
};

export default Menu;
