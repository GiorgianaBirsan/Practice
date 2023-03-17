import React, {useState} from "react";
import {Stack, Input} from "@chakra-ui/react";
import {ButtonUI} from "../UI/Button";
import {auth, database} from "../../firebase";
import {signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {pagesPath} from "../../utils/pagesPaths";

const initialValuesLogin = {
  emailLogin: "",
  passwordLogin: "",
};

export default function LogInForm(props) {
  const [values, setValues] = useState(initialValuesLogin);
  const navigate = useNavigate();

  const inputHandler = (event) => {
    const {name, value} = event.target;
    setValues({...values, [name]: value});
  };

  const onSubmitLogIn = (event) => {
    event.preventDefault();
    props.handlerModalVisibility(false);

    // LET USER TO LOGIN WITH HIS CREDENTIALS FROM FIREBASE
    signInWithEmailAndPassword(auth, values.emailLogin, values.passwordLogin)
      .then((userCredential) => {
        const user = userCredential.user;
       console.log("cdcc",database)
        navigate(pagesPath.DASHBOARD);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <>
      <form onSubmit={onSubmitLogIn}>
        <Stack spacing={4}>
          <Input
            type="email"
            placeholder="Email"
            value={values.emailLogin}
            name="emailLogin"
            onChange={inputHandler}
            isRequired
          />

          <Input
            type="password"
            name="passwordLogin"
            placeholder="Enter password"
            onChange={inputHandler}
            value={values.passwordLogin}
            isRequired
          />
        </Stack>
        <ButtonUI type="submit">Log in</ButtonUI>
      </form>
    </>
  );
}
