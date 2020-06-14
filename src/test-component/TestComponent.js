import React, { Fragment } from 'react'
// import AutoCompleteInputCountries from '../shareds-components/address-form/AutoCompleteInputCountries.js/AutoCompleteInputCountries'
// import SlideShow from '../shareds-components/SlideShow/SlideShow';
// import Modal from '../shareds-components/Modal/Modal';


const TestComponent = (props) => {
    // const [modalClose, setModalClose] = useState(()=>true)
    // const onModalClose = ()=>{
    //     setModalClose(false)

    // console.log('field');
    // console.log(props);
    // console.log('field');
    // }
    {/* {modalClose && 
        <Modal onModalClose={onModalClose}>
            <SlideShow />
        </Modal>

    } */}

    // const onChangeAutoCompleteCountry = (search)=>{
    //     console.log('search');
    //     console.log(search);
    //     console.log('search');
    // }

    return (
        <input {...props}/>
    )
}

export default TestComponent;
