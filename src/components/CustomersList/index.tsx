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
import { getAllCustomers, deleteCustomer } from "./controller";

export default function List() {
  const { push } = useHistory();
  const [list, setList] = useState<Customer[]>([]);
  const handleNewCustomer = () => push("/page/User");
  const handleUpdateCustomer = (id: number | undefined) => push("/page/User/" + id)
  // ! use of an imported function 
  const getData = async () => {
    let data = await getAllCustomers()
    setList(data);
  };
  // ! function for delete customer
  const handleDelete = async (id: number | undefined) => {
    await deleteCustomer(id)
    getData()
  }

  useEffect(() => {
    getData().catch(null);
  }, []);

  useEffect(() => {
    getData().catch(null)
  }, [list])

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
            <IonItem key={item.id} button>
              <IonThumbnail slot="start">
                <img src="assets/userD.png" alt="user default" />
              </IonThumbnail>
              <IonLabel>
                <h2>{item.name}</h2>
                <p>
                  {item.city} - {item.phone}
                </p>
              </IonLabel>
              <IonButton color="success" fill="outline" slot="end" onClick={() => handleUpdateCustomer(item.id)}>
                Update
              </IonButton>
              <IonButton color="danger" fill="outline" slot="end" onClick={() => handleDelete(item.id)}>
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
            <IonItemOption onClick={() => { }}>Unread</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>

        <IonItemSliding>
          <IonItem>
            <IonLabel>Item</IonLabel>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption onClick={() => { }}>Unread</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
      </IonList>
    </IonContent>
  );
}
