import CoffeeForm from "./CoffeeForm";

interface Props {
    id?: string[];
    open: boolean;
    onClose: () => void;
}

const Modal = ( props: Props ) => {
    if ( !props.open ) return (<></>);
    return(
        <div
            onClick = { props.onClose }
            className='Modal1'>
            <div
                className='Modal2'
                onClick={(e) => {
                    e.stopPropagation()
                }}>
                    <div className='Modal3'>
                        <div className="Modal4">
                            <p className="Modaltext"
                            onClick={props.onClose}>
                                 X 
                            </p>
                        </div>
                        <div className='Modalform'>
                            <CoffeeForm id={ props.id } />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Modal