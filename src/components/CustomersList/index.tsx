import { useEffect, useState } from "react";
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonToggle,
  IonRadio,
  IonCheckbox,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonContent,
  IonButton,
  IonLoading,
  IonThumbnail,
} from "@ionic/react";
import { Customer } from "../../models/interfaces";
import { useHistory } from "react-router";

export default function List() {
  const {push} = useHistory();
  const [list, setList] = useState<Customer[]>([]);
  const handleNewCustomer = () => push("/page/User");
  const getData = async () => {
    let response = await fetch("http://localhost:8080/api/customers");
    let data = await response.json();
    console.log(data);
    setList(data);
  };
  useEffect(() => {
    getData().catch(null);
  }, []);

  return (
    <IonContent>
      <IonItem>
        <IonButton color="primary" onClick={handleNewCustomer} fill="outline" slot="end">
          Add new customer
        </IonButton>
      </IonItem>
      <IonList>
        {list !== [] ? (
          list.map((item: Customer) => (
            <IonItem key={item.id} onClick={() => console.log(item.id)} button>
              <IonThumbnail slot="start">
                <img src="assets/userD.png" alt="user default" />
              </IonThumbnail>
              <IonLabel>
                <h2>{item.name}</h2>
                <p>
                  {item.city} - {item.phone}
                </p>
              </IonLabel>
              <IonButton color="success" fill="outline" slot="end">
                Update
              </IonButton>
              <IonButton color="danger" fill="outline" slot="end">
                Delete
              </IonButton>
            </IonItem>
          ))
        ) : (
          <IonLoading isOpen={true} message={"Please wait..."} />
        )}
        <IonItem>
          <IonLabel>Mega Man X</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>The Legend of Zelda</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Pac-Man</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Super Mario World</IonLabel>
        </IonItem>
      </IonList>

      {/*-- List of Input Items --*/}
      <IonList>
        <IonItem>
          <IonLabel>Input</IonLabel>
          <IonInput></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Toggle</IonLabel>
          <IonToggle slot="end"></IonToggle>
        </IonItem>
        <IonItem>
          <IonLabel>Radio</IonLabel>
          <IonRadio slot="end"></IonRadio>
        </IonItem>
        <IonItem>
          <IonLabel>Checkbox</IonLabel>
          <IonCheckbox slot="start" />
        </IonItem>
      </IonList>

      {/*-- List of Sliding Items --*/}
      <IonList>
        <IonItemSliding>
          <IonItem>
            <IonLabel>Item</IonLabel>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption onClick={() => {}}>Unread</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>

        <IonItemSliding>
          <IonItem>
            <IonLabel>Item</IonLabel>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption onClick={() => {}}>Unread</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
      </IonList>
    </IonContent>
  );
}
