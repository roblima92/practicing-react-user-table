import React from "react";
import Modal from 'react-modal';

interface ICustomModal {
    isOpen: boolean;
    onRequestClose: (value: any) => void;
    style: any;
    contentLabel: string;
    children?: React.ReactNode;
};

const CustomModal: React.FC<ICustomModal> = props => {

    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}
            style={props.style}
            contentLabel={props.contentLabel}>
            <button onClick={props.onRequestClose}>Ok</button>
            <div>An error has occurred, please review your entries!!</div>
        </Modal>
    );
}

export default CustomModal;