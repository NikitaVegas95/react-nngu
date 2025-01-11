import {Container} from "../../components/User";
import { useEffect, useState } from "react";
import {UserMaps} from "../../components/User/maps";

export const HomePage = () => {
    const [data, setData] = useState()

    const user: string = 'c8b5635a-90f1-4d8e-b5a9-a77a79fa4c98'

    const baseUrl = (params: string) => {
        return `https://mocki.io/v1/${params}`;
    }

    const getAllUsers = async (params: string) => {
        const getData = await fetch(baseUrl(params));
        return await getData.json();
    }

    useEffect(() => {
        getAllUsers(user).then(item => setData(item))
    }, []);

    if (!data) return (
        <div>Данных нет</div>
    );

    return (
        <Container>
            <UserMaps data={data}/>
        </Container>
    );
};