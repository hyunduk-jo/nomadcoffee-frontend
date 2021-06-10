import { useForm } from "react-hook-form";
import { Button, Form, Input } from "../../components/AuthFormStyle";
import { gql, useMutation } from "@apollo/client";

const EDIT_COFFEE_SHOP = gql`
  mutation editCoffeeShop($id: Int!, $name: String, $latitude: String, $longitude: String, $photos: Upload){
    editCoffeeShop(id: $id, name: $name, latitude: $latitude, longitude: $longitude, photos: $photos){
      ok
      error
    }
  }
`;

const EditForm = ({ id, name: prevName, latitude: prevLatitude, longitude: prevLongitude, photos: prevPhotos }) => {


  const [editCoffeeShopMutation] = useMutation(EDIT_COFFEE_SHOP);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: prevName,
      latitude: prevLatitude,
      longitude: prevLongitude
    }
  });

  const onValid = async (data) => {
    const { data: { editCoffeeShop: { ok, error } } } = await editCoffeeShopMutation({
      variables: {
        id,
        name: data.name,
        latitude: data.latitude,
        longitude: data.longitude,
        photos: data.photos
      }
    });
    console.log(ok, error)
  }
  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <Input {...register("name")} />
      <Input {...register("latitude")} />
      <Input {...register("longitude")} />
      <Input {...register("photos")} type="file" />
      <Button>Edit</Button>
    </Form>
  )
}

export default EditForm;