import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const [form,setForm] =useState({});
  const handleChange=(e)=>{
      const {name,type,value,checked} = e.target;
      if(type==='Checkbox')
      {
        setForm({
          ...form,
          [name]:checked
        })
      }
      else{
        setForm({
          ...form,
          [name]:value
        })
      }
 
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(form);

  }
  return (
    <Flex justifyContent="center" alignItems="center" height="80vh">
      <form>
        <Box padding="2rem" maxW="1200px">
          <Text
            padding="0.2rem 0rem"
            textAlign="left"
            fontSize="1xl"
            fontWeight="600"
          >
            REGISTERED CUSTOMERS
          </Text>
          <Text textAlign="left" color="lightgray" fontSize="sm">
            {" "}
            <em>
            If you have an account, sign in with your email address.
            </em>
          </Text>
          <Flex justifyContent="space-evenly" gap="15px" flexDirection="column">
            <FormLabel>Email address</FormLabel>
            <Input w="350px" borderRadius="none" type="email"      name="email"
              value={form.email||''}   onChange={handleChange}/>

            <FormLabel>Password</FormLabel>
            <Input w="350px" borderRadius="none" type="password"      name="password"
              value={form.password||''}   onChange={handleChange}/>
          </Flex>
        </Box>
        <Flex justifyContent='space-evenly'>
          <Button
            w="40%"
            borderRadius="15px"
            backgroundColor="white"
            border='2px solid'
            // onClick={navigate("/")}
          >
            <Link to="/">Back</Link>
          </Button>
          <Button
            w="40%"
            borderRadius="0px"
            backgroundColor="black"
            color="white"
            _hover={{ backgroundColor: "#10693c" }}
            onClick={handleSubmit}
          >
           Login
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default Login;
