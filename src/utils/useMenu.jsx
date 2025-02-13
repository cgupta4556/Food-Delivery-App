import { useState, useCallback, useEffect } from "react";
import { MENU_API } from '../utils/constants';

const useMenu = (resID) => {
    const [resinfo, setresinfo] = useState(null);

    useEffect( () => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(MENU_API+resID);
        const json = await data.json();
        setresinfo(json.data);
    }

    return resinfo;
}
export default useMenu;