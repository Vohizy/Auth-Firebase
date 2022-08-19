import React from "react";
export const Btn: React.FC<any> = ({ login, ClassName, value }) => {
    return (
        <button className={ClassName} onClick={login} >{ value}</button>
    )
}