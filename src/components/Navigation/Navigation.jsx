import { FaTelegram } from "react-icons/fa6";
import { IoMdPersonAdd } from "react-icons/io";
import { FaUsers } from "react-icons/fa6";
import { BsPostcardFill } from "react-icons/bs";
import { VscSignIn } from "react-icons/vsc";

import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div
      className="bg-blue-300 shadow-lg flex justify-between
    px-5 py-2 gap-5 flex-col sm:flex-row sm:gap-3
    "
    >
      <ul className="flex gap-2 items-center justify-center text-4xl text-blue-950">
        <li>
          <Link to="/" className="py-2">
            <FaTelegram className="hover:text-[#F7F9F2] transition duration-200 hover:translate-y-[-3px]" />
          </Link>
        </li>
        <li>
          <Link to="/">Telegram</Link>
        </li>
      </ul>
      <ul className="flex gap-7 items-center justify-center  text-blue-950 text-4xl">
        <li>
          <Link to="signIn" className="py-2">
            <VscSignIn className="hover:text-[#F7F9F2] transition duration-200 hover:translate-y-[-3px]" />
          </Link>
        </li>
        <li>
          <Link to="addUser" className="py-2">
            <IoMdPersonAdd className="hover:text-[#F7F9F2] transition duration-200 hover:translate-y-[-3px]" />
          </Link>
        </li>
        <li>
          <Link to="users" className="py-2">
            <FaUsers className="hover:text-[#F7F9F2] transition duration-200 hover:translate-y-[-3px]" />
          </Link>
        </li>
        <li>
          <Link to="posts" className="py-2">
            <BsPostcardFill className="hover:text-[#F7F9F2] transition duration-200 hover:translate-y-[-3px]" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
