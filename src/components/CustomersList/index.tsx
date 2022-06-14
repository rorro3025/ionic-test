import { useEffect, useState } from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent, IonButton,IonLoading } from '@ionic/react';
import { User } from '../../models/interfaces';

export default function List() {
    const [list, setList] = useState<User[]>([]);
    const getData = async () => {
        let response = await fetch("http://localhost:8080/api/users")
        let data = await response.json()
        console.log(data)
        setList(data)
    }
    useEffect(() => {
        getData().catch(null)
    }, [])
    

    return (
        <IonContent>
            <IonItem>
                <IonButton color="primary" fill="outline" slot='end'>Add new customer</IonButton>
            </IonItem>
            <IonList>
                {
                    list !== []? list.map((item: User) => (
                        <IonItem key={item.id}>
                            <IonLabel>{item.name} ({item.email})</IonLabel>
                            <IonButton color="success" fill="outline" slot='end'>Update</IonButton>
                            <IonButton color="danger" fill="outline" slot='end'>Delete</IonButton>
                        </IonItem>
                    )) : <IonLoading
                    isOpen={true}
                    message={'Please wait...'}
                  />
                }
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

    )
}