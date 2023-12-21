import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from "/src/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#eef1f6] rounded-lg shadow dark:bg-gray-900 ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="space-y-2 text-center">
            <img src={logo} className="max-w-56 m-auto" alt="" />
          <p className=" font1 m-auto text-center text-[#666] font-medium md:max-w-[70%]">
            Embark on a journey through lines of code and pixels, where
            creativity meets functionality.Connect with me to turn ideas into
            captivating realities. Let&apos;s build something extraordinary
            together!
          </p>

          <ul className="flex flex-wrap justify-center items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 py-5 gap-5">
            <li>
              <Link
                to={"https://www.facebook.com/profile.php?id=61552467179053"}
              >
                <button
                  type="button"
                  className="bg-white border hover:border-transparent border-[#801f82] hover:bg-gradient-to-r hover:from-[#801f82] hover:to-[#844e85] text-[#801f82] hover:text-white p-3 text-sm md:text-3xl rounded-lg"
                >
                  <FaFacebookF />
                </button>
              </Link>
            </li>

            <li>
              <Link to={"https://github.com/Talukder-Asif"}>
                <button
                  type="button"
                  className="bg-white border hover:border-transparent border-[#801f82] hover:bg-gradient-to-r hover:from-[#801f82] hover:to-[#844e85] text-[#801f82] hover:text-white p-3 text-sm md:text-3xl rounded-lg"
                >
                  <FaGithub />
                </button>
              </Link>
            </li>

            <li>
              <Link to={"https://www.linkedin.com/in/talukder-asif/"}>
                <button
                  type="button"
                  className="bg-white border hover:border-transparent border-[#801f82] hover:bg-gradient-to-r hover:from-[#801f82] hover:to-[#844e85] text-[#801f82] hover:text-white p-3 text-sm md:text-3xl rounded-lg"
                >
                  <FaLinkedin />
                </button>
              </Link>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-[#801f82] sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          {" "}
          © All Rights Reserved - 2024 -{" "}
          <a
            href="https://github.com/Talukder-Asif"
            className="hover:underline"
          >
            Asif Talukder
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
