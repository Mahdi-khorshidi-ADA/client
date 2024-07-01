import { useNavigate } from "react-router-dom";
export default function AddUser() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate("..");
  }
  return (
    <form
      className="flex justify-start items-center flex-col
      shadow-lg m-12 p-12 rounded-md shadow-gray-500
      "
      onSubmit={handleSubmit}
    >
      <div className="font-semibold pt-1">
        <h1 className="uppercase font-semibold font-mono text-2xl">
          Add A New user
        </h1>
      </div>
      <div className="font-semibold pt-2 md:w-full">
        <input
          type="text"
          placeholder="enter your user name ..."
          className="placeholder:capitalize text-sm rounded-md px-3 py-3 shadow-md sm:w-96 w-80 md:w-[100%]"
        />
      </div>
      <div className="font-semibold pt-2 md:w-full">
        <input
          type="text"
          placeholder="enter your email ..."
          className="placeholder:capitalize text-sm rounded-md px-3 py-3 shadow-md sm:w-96 w-80 md:w-full"
        />
      </div>
      <div className="font-semibold pt-2 md:w-full">
        <input
          type="text"
          placeholder="enter your password ..."
          className="placeholder:capitalize text-sm rounded-md px-3 py-3 shadow-md sm:w-96 w-80 md:w-full"
        />
      </div>
      <div className="font-semibold pt-2 md:w-full">
        <textarea
          name="bio"
          id="bio"
          className="placeholder:capitalize text-sm rounded-md px-3 py-3 shadow-md w-80 h-64 resize-none md:w-full"
          placeholder="Bio ..."
        ></textarea>
      </div>
      <div className="font-semibold pt-2 md:w-full">
        <button className="bg-blue-950 text-white w-80 sm:w-96 rounded-md p-2 flex justify-center items-center hover:shadow-md hover:shadow-blue-950 transition duration-150 hover:translate-y-[-1px] active:translate-y-0 active:shadow-sm md:w-full ">
          Add
        </button>
      </div>
    </form>
  );
}
