import wondersdata from "./WondersApi";
import "./style.css";
import WondersCard from "./WondersCard";
import { useState } from "react";
import Navigation from "./Navigation";


function Wonders() {

    let [data, setData] = useState(wondersdata);

    function filterItem(category) {

        if(category=="All")
        {
            setData(wondersdata);
            return;
        }

        const updatedList = wondersdata.filter((item) => {
            return item.category === category;
        })

        setData(updatedList);
    }

    const uniqueList = [...new Set(wondersdata.map((item) => {

        return item.category;

    })),"All"]

    let [menuList, setMenuList] = useState(uniqueList);

    return (
        <>

            <Navigation filterItem = {filterItem} menuList={menuList} />
            <WondersCard data={data} />

        </>

    )
}

export default Wonders;