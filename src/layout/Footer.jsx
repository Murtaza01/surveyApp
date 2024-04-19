import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="center h-[10vh] shadow-borderSh flex-col  text-heading bg-accent ">
      <div className=" text-lg">
        <ul className=" center gap-4 ">
          <li>
            <a
              href="https://www.instagram.com/murtaza_alkabie/"
              target={"_blank"}
              className="text-red-700 hover:brightness-50"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://t.me/murtaza_alkabie"
              target={"_blank"}
              className="text-sky-500 hover:brightness-50"
            >
              <FaTelegramPlane />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Murtaza01"
              target={"_blank"}
              className="text-slate-900 hover:brightness-50"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
      <p className=" capitalize ">
        all copyRights @ goes to{" "}
        <span className="italic  font-semibold text-accent2">Birdman.</span>{" "}
      </p>
    </footer>
  );
}
