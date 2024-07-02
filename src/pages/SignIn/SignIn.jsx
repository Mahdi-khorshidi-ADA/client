import { useNavigate } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/UserSlice";
import { useEffect } from "react";
import { BeatLoader } from "react-spinners";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
const SIGNIN = gql`
  mutation signin($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password }) {
      userError {
        message
      }
      token
    }
  }
`;

export default function SignIn() {
  const [signin, { data, loading }] = useMutation(SIGNIN);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const error = useSelector((state) => state.user.error);
  const password = useSelector((state) => state.user.password);
  let content = "";
  function handleSubmit() {
    signin({
      variables: {
        email,
        password,
      },
    });
  }
  useEffect(() => {
    if (data) {
      if (data.signIn.userError.length) {
        dispatch(userActions.setError(data.signIn.userError[0].message));
      }
      if (data.signIn.token) {
        localStorage.setItem("token", data.signIn.token);
        navigate("/users");
        dispatch(userActions.setEmail(""));
        dispatch(userActions.setPassword(""));
        dispatch(userActions.setError(""));
      }
    }
  }, [data, dispatch, navigate]);
  if (loading) {
    content = <BeatLoader color="#5dceff" className="text-center pb-5" />;
  }

  return (
    <form
      className="flex justify-start items-center flex-col
      shadow-lg m-12 p-12 rounded-md shadow-gray-500
      "
    >
      <div className="font-semibold pt-1">
        {content}
        <h1 className="uppercase font-semibold font-mono text-2xl">
          login user
        </h1>
      </div>
      <div className="font-semibold pt-2 md:w-full">
        <input
          type="text"
          placeholder="enter your email ..."
          className="placeholder:capitalize text-sm rounded-md px-3 py-3 shadow-md w-80 sm:w-96 md:w-full"
          onChange={(e) => dispatch(userActions.setEmail(e.target.value))}
          value={email}
        />
      </div>
      <div className="font-semibold pt-2 md:w-full">
        <input
          type="text"
          placeholder="enter your password ..."
          className="placeholder:capitalize text-sm rounded-md px-3 py-3 shadow-md w-80 sm:w-96 md:w-full"
          onChange={(e) => dispatch(userActions.setPassword(e.target.value))}
          value={password}
        />
      </div>
      <div className="font-semibold pt-2 md:w-full">
        <button
          className="bg-blue-950 text-white w-80 sm:w-96 rounded-md p-2 flex justify-center items-center hover:shadow-md hover:shadow-blue-950 transition duration-150 hover:translate-y-[-1px] active:translate-y-0 active:shadow-sm md:w-full"
          onClick={handleSubmit}
          type="button"
        >
          Login
        </button>
        {error && <ErrorComponent title={error} />}
      </div>
    </form>
  );
}
