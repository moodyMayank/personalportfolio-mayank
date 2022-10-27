import { BsFillMoonStarsFill } from "react-icons/bs";

function NavBar() {
  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1>Mayank Kumar</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill />
        </li>
        <li className=" ml-10">
          <a href="#">Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
