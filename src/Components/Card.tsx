import React, { useEffect, useState } from "react";
import CustomModal from "./CustomModal";

export interface InterfaceCardNames {
    Id?: string;
    FieldName?: string;
    onAddUser: (userInfo: any) => void;
    User?: object;
    children?: React.ReactNode;
};

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'lightCoral',
        borderColor: 'black'
    },
};

const Card: React.FC<InterfaceCardNames> = props => {
    const [textName, setTextName] = useState('');
    const [textAge, setTextAge] = useState('');
    const [hasError, setErrorModal] = useState(false);
    const [allUsers, setAllUser] = useState<{ name: string, age: string }[]>([]);

    //useEffect pra burlar o problema de o primeiro elemento sempre retornar vazio do allUsers
    useEffect(() => {
        props.onAddUser(allUsers)
    }, [allUsers]);

    const handleAddTextName = (event: any) => {
        const e = event?.target.value;
        if (e.match("^[ a-zA-Z á]*$"))
            setTextName(event?.target.value);
    }

    const handleAddTextAge = (event: any) => {
        const e = event?.target.value;
        if (e.match("^[0-9]+$"))
            setTextAge(event?.target.value);
    }

    const handleCloseModal = () => {
        setErrorModal(false);
    }

    const handleAddUser = () => {
        if (parseInt(textAge) > 99 || textName.length > 50) {
            setErrorModal(true)
        }
        else {
            const userInfo = { name: textName, age: textAge }
            //exemplo de função de useState que usa estado anterior pra gerar um novo estado. precisa ser chamada por arrow function *prevState*
            setAllUser(prevState => [...prevState, userInfo]);
        }
    }

    return (
        <React.Fragment>
            <label>
                Username
            </label>
            <input
                style={{ display: 'flex', marginBottom: '1rem' }}
                id="input-text-name"
                type="text"
                onChange={handleAddTextName}
                value={textName}>
            </input>
            <label>
                Age (Years)
            </label>
            <input
                style={{ display: 'flex', marginBottom: '1rem' }}
                id="input-text-name"
                type="text"
                onChange={handleAddTextAge}
                value={textAge}>
            </input>
            <button
                style={{ display: 'flex', marginBottom: '3rem' }}
                onClick={handleAddUser}>
                Add User
            </button>
            <CustomModal
                isOpen={hasError}
                onRequestClose={handleCloseModal}
                style={customStyles}
                contentLabel="An error has ocorred!!"
            />
        </React.Fragment>
    );
};

export default Card;