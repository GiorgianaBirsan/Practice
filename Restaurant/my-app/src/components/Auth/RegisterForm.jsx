import React, {useState} from "react";
import {Input, Radio, RadioGroup, Stack, HStack} from "@chakra-ui/react";
import {ButtonUI} from "../UI/Button";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth, database} from "../../firebase";
import {AlertUI} from "../UI/Alert";
import {addDoc} from "firebase/firestore";
import {collectionRestaurantRef, collectionUserRef} from "../../firebase";
const userType = {
  typeClient: "client",
  typeRestaurant: "restaurant",
};

const initialValues = {
  email: "",
  username: "",
  phone: "",
  password: "",
  type: "",
};

export default function RegisterForm(props) {
  const [values, setValues] = useState(initialValues);
  const [isChecked, setIsChecked] = useState(false);
  const [user, setUser] = useState("");

  const inputHandler = (event) => {
    const {name, value} = event.target;
    setValues({...values, [name]: value});
  };
  user === userType.typeClient
    ? (values.type = userType.typeClient)
    : (values.type = userType.typeRestaurant);

  const onSubmitRegister = async (event) => {
    event.preventDefault();
    props.handlerModalVisibility(false);

    // ADD NEW USER CREDENTIALS IN FIREBASE
    await createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        alert(error.message);
        //<AlertUI status="error"  children={errorMessage}/>
      });

    // ADD NEW USER DETAILS IN FIREBASE DATABASE
    if (user === userType.typeClient) {
      addDoc(collectionUserRef, {
        email: values.email,
        username: values.username,
        phone: values.phone,
        password: values.password,
        type: values.type,
      })
        .then(() => {
          alert("Account created!");
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      addDoc(collectionRestaurantRef, {
        email: values.email,
        username: values.username,
        phone: values.phone,
        password: values.password,
        type: values.type,
      })
        .then(() => {
          alert("Account created!");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  return (
    <>
      <form onSubmit={onSubmitRegister}>
        <Stack spacing={4} alignItems="flex-start">
          <Input
            type="email"
            placeholder="Email"
            value={values.email}
            name="email"
            onChange={inputHandler}
            isRequired
          />
          <Input
            type="text"
            placeholder="Name"
            name="username"
            value={values.username}
            onChange={inputHandler}
            isRequired
          />
          <Input
            type="number"
            placeholder=" Phone"
            name="phone"
            value={values.phone}
            onChange={inputHandler}
            isRequired
          />
          <Input
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={inputHandler}
            value={values.password}
            isRequired
          />

          <label>I want to regisater as:</label>
          <RadioGroup name="userType" isRequired>
            <HStack>
              <Radio
                value={userType.typeClient}
                onChange={() => {
                  setIsChecked(!isChecked);
                  setUser(userType.typeClient);
                }}
              >
                {userType.typeClient}
              </Radio>
              <Radio
                value={userType.typeRestaurant}
                onChange={() => {
                  setIsChecked(!isChecked);
                  setUser(userType.typeRestaurant);
                }}
              >
                {userType.typeRestaurant}
              </Radio>
            </HStack>
          </RadioGroup>
        </Stack>
        <ButtonUI type="submit">Register</ButtonUI>
      </form>
    </>
  );
}
