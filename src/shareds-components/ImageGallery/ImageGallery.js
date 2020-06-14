import React, { useRef, Fragment, useState } from 'react';
// import PropTypes from 'prop-types'src="/assets/images/iphone_11.png"
import './style.css';
import SlideShow from '../SlideShow/SlideShow';
import Modal from '../Modal/Modal';


const ColumnGallery = (img)=>{

  const refImg = useRef(null);
  if (refImg && refImg.current) {
    refImg.current.src = img.img; 
    refImg.current.style.width = '100%'
  }
  return (
    <div className="column" onClick={(e)=>{
      e.preventDefault()
      if (img.img !=='') {
        img.modalGallery(img.slideIndex)
      }
    }}>
      <img className="responsive" ref={refImg} alt="" />
      <i className="far fa-times-circle backImage" onClick={(e)=>{
        e.preventDefault()
        e.stopPropagation();
        if (img.image !=='') {
          img.remove(img.image)
        }
      }}></i>
    </div> 
  )
}

const ImageGallery = ({ qtyFileMax, files, onClickMe, stateProps, remove, ...props}) => {
  const [modalClose, setModalClose] = useState(()=>false)
  const onModalClose = ()=>{
    setModalClose(false)
  }
  const [state, setState] = useState(st=>{
    return {
      ...st,
      slideIndex:0,
    }
  })

  
  const modalGallery = (slideIndex) =>{
    setModalClose(true)
    setState(st=>{
      return {
        ...st,
        slideIndex
      }
    })
   
  }
  return (
      <Fragment>
       
        {stateProps !== undefined && stateProps?.files?.length > 0 &&
          <div className="myrow">
            {stateProps?.files.map((cl, ix)=>{
              return <ColumnGallery img={cl.base64} image={cl} key={cl._id} modalGallery={modalGallery} slideIndex={ix+1} remove={remove} />
            })}
          </div>
        }
        {modalClose && state.slideIndex > 0 &&
          <Modal onModalClose={onModalClose} className="col-xs-12 col-lg-8">
            <SlideShow slideIndex={state.slideIndex} arrImage={stateProps?.files} />
          </Modal>
        }
      </Fragment>
  )
}

// ImageGallery.propTypes = {

// }

export default ImageGallery;