import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import CustomersList from "../components/CustomersList";
import FavoriteFeeed from "../components/FavoritesFeed";
import UserForm from "../components/UserForm";
import "./Page.css";

const Page: React.FC = () => {
  const { name, id } = useParams<{ name: string; id: string }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {name === "Clients" ? <CustomersList /> : null}
        {name === "Favorites" ? <FavoriteFeeed /> : null}
        {name === "User" ? <UserForm id={id} /> : null}
      </IonContent>
    </IonPage>
  );
};

export default Page;
