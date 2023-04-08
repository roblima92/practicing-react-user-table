import React, { useEffect } from "react";
import { IUserInfo } from "../App";

export interface IAddedUsers {
    UserData: IUserInfo;
    Index: number;
    OnDelete: (value: number) => void;
    children?: React.ReactNode;
}

const AddedUsers: React.FC<IAddedUsers> = props => {
    const handleRemoveUser = () => {
        props.OnDelete(props.Index)
    }

    useEffect (()=> {
    },[props.UserData])

    return (
        <React.Fragment>
            <button onClick={handleRemoveUser}>X</button>
            <div style={{
                backgroundColor: 'gray',
                display: 'flex',
                width: '100%',
                justifyContent: 'space-around'}}>
                <p>Name: {props.UserData.name}</p>
            </div>
            <div style={{
                backgroundColor: 'blueviolet',
                display: 'flex',
                width: '100%',
                justifyContent: 'space-around'}}>
                <p>Age: {props.UserData.age}</p>
            </div>
        </React.Fragment>
    );
}

export default AddedUsers;