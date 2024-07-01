import { useNavigate } from "react-router-dom";
export default function SignIn() {
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
          login user
        </h1>
      </div>
      <div className="font-semibold pt-2 md:w-full">
        <input
          type="text"
          placeholder="enter your email ..."
          className="placeholder:capitalize text-sm rounded-md px-3 py-3 shadow-md w-80 sm:w-96 md:w-full"
        />
      </div>
      <div className="font-semibold pt-2 md:w-full">
        <input
          type="text"
          placeholder="enter your password ..."
          className="placeholder:capitalize text-sm rounded-md px-3 py-3 shadow-md w-80 sm:w-96 md:w-full"
        />
      </div>
      <div className="font-semibold pt-2 w-full">
        <button
          className="bg-blue-950 text-white rounded-md p-2 flex justify-center items-center hover:shadow-md hover:shadow-blue-950 transition duration-150 hover:translate-y-[-1px] active:translate-y-0 active:shadow-sm w-80 sm:w-96 md:w-full
        "
        >
          Login
        </button>
      </div>
    </form>
  );
}
