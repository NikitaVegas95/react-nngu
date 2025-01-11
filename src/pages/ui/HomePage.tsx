import {User} from "../../components/User";
import {getAllUsers} from "../../components/User/maps/userMaps.tsx";

export const HomePage = () => {


    return (
        <User>
            {getAllUsers}
        </User>
    );
};