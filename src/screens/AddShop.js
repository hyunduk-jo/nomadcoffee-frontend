import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { Button, Form, Input } from "../components/AuthFormStyle";

const CREATE_COFFEE_SHOP = gql`
  mutation createCoffeeShop($name: String!, $latitude: String!, $longitude: String!, $photos: Upload!){
    createCoffeeShop(name: $name, latitude: $latitude, longitude: $longitude, photos: $photos){
      ok
      error
    }
  }
`;

const AddShop = () => {
  const [createCoffeeShopMutation] = useMutation(CREATE_COFFEE_SHOP);
  const [file, setFile] = useState(null);

  const { register, handleSubmit, setError, formState: { errors } } = useForm();

  const history = useHistory();

  const onValid = async (data) => {
    const { data: { createCoffeeShop: { ok, error } } } = await createCoffeeShopMutation({
      variables: {
        ...data,
        photos: file
      }
    })
    if (ok) {
      history.push('/');
    }
    if (error) {
      setError("error", {
        message: error
      })
    }
  }
  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <Input placeholder="Name" {...register("name", { required: true })} type="text" />
      <Input placeholder="Latitude" {...register("latitude", { required: true })} type="text" />
      <Input placeholder="Longitude" {...register("longitude", { required: true })} type="text" />
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <span style={{ color: "red" }}>{errors?.error?.message}</span>
      <Button>Add Shop</Button>
    </Form>
  )
}

export default AddShop;