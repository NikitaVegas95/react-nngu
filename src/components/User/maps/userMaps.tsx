import {user} from "../../../mocs";
import style from "../ui/style.module.scss";
import {IframeParser} from "../../IframeParser";

export const getAllUsers = user.map((item) => (
    <div className={style.userWrapper} key={item.id}>
        <img src={item.avatarUrl} alt=""/>
        <p className={style.text}>{item.username}</p>
        <p className={style.text}>{item.role}</p>
        <p className={style.text}>{item.fullName}</p>
        <div className={style.iframe}>
            <IframeParser iframe={item.video}/>
        </div>
    </div>
))