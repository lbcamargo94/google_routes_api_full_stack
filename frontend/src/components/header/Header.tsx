import "./Header.css";
import Logo from "../../assets/images/logo-original.png";

function Header() {
  return (
    <header className="flex flex-col items-center justify-center align-middle bg-blue-950 shadow p-2">
      <h1 className="tittle-text h-full">RIDE REQUEST</h1>
      <img src={Logo} alt="logo" />
    </header>
  );
}

export { Header };
