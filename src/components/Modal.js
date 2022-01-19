import React from 'react';


const Modal = () => {

    let modalDiv = {
        zIndex: 999,
        position: "absolute",
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(141,141,141,0.32)",
        display: "none",
        justifyContent: "center",
        alignItems: "center"
    }

    return (
        <div style={modalDiv}>
            <div className="modal">

                <div style={{width: "100%", display: "flex", justifyContent: "flex-end"}}>
                    <div className="closeModal">
                            X
                    </div>
                </div>

                <div style={{marginLeft: 15, marginRight: 15, marinTop: 5}}>
                    hello
                </div>
            </div>
        </div>
    );
};

export default Modal;