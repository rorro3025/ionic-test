import { useState, useEffect } from "react";
import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/react";
import { Customer } from "../../models/interfaces";
import { Console } from "console";

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

  const [text, setText] = useState<Customer>(initialState);
  const handleSubmit = () => {
    console.log(text)
  };
  const getUser = async () => {
    let res = await fetch(`http://localhost:8080/api/customers/${id}`)
    let user = await res.json()
    console.log(user)
    setText(user)
  }
  useEffect(() => {
    if (id) getUser().catch(e => console.log(e))
  }, [])
  useEffect(() => {
    if (id) getUser().catch(e => console.log(e))
  }, [id])
  return (
    <IonContent>
      <IonList>
        <IonItem>{id ? "Editing customer " + id : "Create new customer"}</IonItem>
        <IonItem>
          <IonLabel position="floating">Name</IonLabel>
          <IonInput value={text.name} onIonChange={({ detail }) => setText({ ...text, name: detail.value?.toString() })}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="fixed">Address</IonLabel>
          <IonInput value={text.address} onIonChange={({ detail }) => setText({ ...text, address: detail.value?.toString() })}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="fixed">City</IonLabel>
          <IonInput value={text.city} onIonChange={({ detail }) => setText({ ...text, city: detail.value?.toString() })}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="fixed">State</IonLabel>
          <IonInput value={text.state} onIonChange={({ detail }) => setText({ ...text, state: detail.value?.toString() })}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="fixed">Zip</IonLabel>
          <IonInput value={text.zip} onIonChange={({ detail }) => setText({ ...text, zip: detail.value?.toString() })}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Phone</IonLabel>
          <IonInput value={text.phone} onIonChange={({ detail }) => setText({ ...text, phone: detail.value?.toString() })}></IonInput>
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
