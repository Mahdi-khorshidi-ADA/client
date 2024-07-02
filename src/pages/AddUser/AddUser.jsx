import { useNavigate } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { addUserSliceActions } from "../../store/addUser";
import { useEffect } from "react";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import { BeatLoader } from "react-spinners";
const ADD_USER = gql`
  mutation signup(
    $name: String!
    $email: String!
    $password: String!
    $bio: String!
  ) {
    signUp(
      input: { name: $name, email: $email, password: $password, bio: $bio }
    ) {
      userError {
        message
      }
      token
    }
  }
`;

export default function AddUser() {
  const navigate = useNavigate();
  const [signup, { data, loading }] = useMutation(ADD_USER);
  const dispatch = useDispatch();
  const name = useSelector((state) => state.addUser.name);
  const email = useSelector((state) => state.addUser.email);
  const error = useSelector((state) => state.addUser.error);
  const password = useSelector((state) => state.addUser.password);
  const bio = useSelector((state) => state.addUser.bio);
  let content = "";
  function handleSubmit() {
    signup({
      variables: {
        name,
        email,
        password,
        bio,
      },
    });
  }
  useEffect(() => {
    if (data) {
      if (data.signUp.userError.length) {
        dispatch(
          addUserSliceActions.setError(data.signUp.userError[0].message)
        );
      }
      if (data.signUp.token) {
        navigate("/users");
        dispatch(addUserSliceActions.setName(""));
        dispatch(addUserSliceActions.setEmail(""));
        dispatch(addUserSliceActions.setPassword(""));
        dispatch(addUserSliceActions.setBio(""));
        dispatch(addUserSliceActions.setError(""));
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
          Add A New user
        </h1>
      </div>
      <div className="font-semibold pt-2 md:w-full">
        <input
          type="text"
          placeholder="enter your user name ..."
          className="placeholder:capitalize text-sm rounded-md px-3 py-3 shadow-md sm:w-96 w-80 md:w-[100%]"
          onChange={(e) =>
            dispatch(addUserSliceActions.setName(e.target.value))
          }
          value={name}
        />
      </div>
      <div className="font-semibold pt-2 md:w-full">
        <input
          type="text"
          placeholder="enter your email ..."
          className="placeholder:capitalize text-sm rounded-md px-3 py-3 shadow-md sm:w-96 w-80 md:w-full"
          onChange={(e) =>
            dispatch(addUserSliceActions.setEmail(e.target.value))
          }
          value={email}
        />
      </div>
      <div className="font-semibold pt-2 md:w-full">
        <input
          type="text"
          placeholder="enter your password ..."
          className="placeholder:capitalize text-sm rounded-md px-3 py-3 shadow-md sm:w-96 w-80 md:w-full"
          onChange={(e) =>
            dispatch(addUserSliceActions.setPassword(e.target.value))
          }
          value={password}
        />
      </div>
      <div className="font-semibold pt-2 md:w-full">
        <textarea
          name="bio"
          id="bio"
          className="placeholder:capitalize text-sm rounded-md px-3 py-3 shadow-md w-80 h-64 resize-none md:w-full"
          placeholder="Bio ..."
          onChange={(e) => dispatch(addUserSliceActions.setBio(e.target.value))}
          value={bio}
        ></textarea>
      </div>
      <div className="font-semibold pt-2 md:w-full">
        <button
          className="bg-blue-950 text-white w-80 sm:w-96 rounded-md p-2 flex justify-center items-center hover:shadow-md hover:shadow-blue-950 transition duration-150 hover:translate-y-[-1px] active:translate-y-0 active:shadow-sm md:w-full "
          onClick={handleSubmit}
          type="button"
        >
          Add
        </button>
        {error && <ErrorComponent title={error} />}
      </div>
    </form>
  );
}
