import { useState } from "react";
import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/react";
import { Customer } from "../../models/interfaces";

interface Props {
  id?: string;
}

export default function UserForm({ id }: Props) {
  let initialState: Customer = {
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  };
  if (id) {
    initialState = {
      name: "User",
      address: "user address",
      city: "user city",
      state: "user state",
      zip: "user zip",
      phone: "user phone",
    };
  }

  const [text, setText] = useState<Customer>(initialState);
  const handleSubmit = () => {
    setText({
      name: "User",
      address: "user address",
      city: "user city",
      state: "user state",
      zip: "user zip",
      phone: "user phone",
    });
  };

  return (
    <IonContent>
      <IonList>
        <IonItem>
          <IonLabel position="floating">Name</IonLabel>
          <IonInput value={text.name}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="fixed">Address</IonLabel>
          <IonInput value={text.address}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="fixed">City</IonLabel>
          <IonInput value={text.city}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="fixed">State</IonLabel>
          <IonInput value={text.state}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="fixed">Zip</IonLabel>
          <IonInput value={text.zip}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Phone</IonLabel>
          <IonInput value={text.phone}></IonInput>
        </IonItem>
        <IonItem>
          <IonButton
            slot="end"
            color="success"
            fill="outline"
            size="large"
            onClick={handleSubmit}
          >
            Save
          </IonButton>
        </IonItem>
      </IonList>
    </IonContent>
  );
}
