import { useState } from 'react'
import { IonContent, IonInput, IonItem, IonLabel, IonList, IonItemDivider } from '@ionic/react';
import { User } from '../../models/interfaces';

export default function UserForm() {
    const initialState = {
        name: "",
        email: "",
        password: "",
    }

    const [text, setText] = useState<User>(initialState)

    return (
        <IonContent>
            <IonList>
                <IonItem>
                    <IonLabel position="floating">Name</IonLabel>
                    <IonInput value={text.name}></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="fixed">Email</IonLabel>
                    <IonInput value={text.email}></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Stacked Label</IonLabel>
                    <IonInput value={text.password} type='password'></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="fixed">Date</IonLabel>
                    <IonInput value={text.email} type="date"></IonInput>
                </IonItem>
            </IonList>
        </IonContent>
    )
}