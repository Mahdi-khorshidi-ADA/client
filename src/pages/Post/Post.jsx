import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
/* eslint-disable react/prop-types */
export default function Post({ title, content, createdAt, updatedAt }) {
      return (
    <div
      className="flex justify-between items-start gap-12 font-semibold capitalize shadow-lg shadow-gray-600 rounded-lg 
  p-6 mt-12 mr-12 mx-12"
    >
      <div>
        <h2>
          <span className="font-bold">title : </span>
          {title}
        </h2>
        <p>
          <span className="font-bold">content : </span>
          {content}
        </p>
        <p>
          <span className="font-bold">Created At : </span>
          {createdAt}
        </p>
        <p>
          <span className="font-bold">Updated At : </span>
          {updatedAt}
        </p>
      </div>
      <ul className="flex gap-3 items-center flex-col text-3xl">
        <li>
          <MdDeleteForever className="text-red-700 cursor-pointer hover:text-rose-800 transition duration-150" />
        </li>
        <li>
          <FaEdit className="text-2xl text-yellow-600 cursor-pointer hover:text-orange-500 transition duration-150" />
        </li>
      </ul>
    </div>
  );
}
