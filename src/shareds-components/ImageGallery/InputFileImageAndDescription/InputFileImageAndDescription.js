import React, { useRef } from 'react';
import { compressorImg } from '../../../views/components/uploads/InputFiles/InputFiles';
import iconUpload from "../../../assets/images/upload_icon.png";
import './styles.scss'

const InputFileImageAndDescription = (stateProps)=>{

  // console.log('stateProps');
  // console.log(stateProps);
  // console.log('stateProps');
    const refImg = useRef(null);
    const [state, setstate] = React.useState(()=>{
        return {
            height:'279px',
            img:iconUpload,
        }
    })
  
    if (refImg && refImg.current) {
      refImg.current.src = state.img; 
      refImg.current.style.width = state.height
    }
    return (
      <div className="row myRowFile" onClick={(e)=>{
        e.preventDefault()
        
      }}>
        <div className="col-xs-12 col-lg-5 conatiner-mainImage">
          <div className="row">
            <div className="col-12 imgContainer" onClick={(e)=>{
                    // e.preventDefault()
                    e.stopPropagation();
                }} 
            >
                <label htmlFor="getImgMain" aria-describedby="getImgMain" className="label-hided-file text-center d-block getImgMain">
                    <img 
                        className="imgMain img-fluid" 
                        ref={refImg} 
                        alt="" 
                    />
                    {/* <img src={state} alt="" /> */}
                </label>
            </div>
  
            <div className="col-12 container-input-file d-none">
                <div className="input-group getMain mt-2" onClick={(e)=>{
                    // e.preventDefault()
                    e.stopPropagation();
                  }}
                >
                  <div className="custom-file mt-2 p-5 mx-2">
                    <input 
                      type="file" 
                      className="custom-file-input" 
                      id="getImgMain" 
                      accept="image/*"
                      onChange={ async (e)=>{
  
                        let { files } = e.target;
                        if (!files[0]?.type.match('image')) {
                          return false;
                        }
  
                        const resp = await compressorImg(files[0]);

                        setstate(()=>{
                          return {
                            img:resp
                          }
                        })
                        // refImg.current.src = resp;
                        // console.log('resp');
                        // // console.log(resp);
                        // console.log(files);
                        // console.log(stateProps.stateProps);

                        // stateProps.stateProps.files.map(fl=>{
                        //   // console.log('fl');
                        //   // console.log(fl);
                        //   // console.log('fl');
                        //   return fl.isLogo === true ? {
                        //     ...fl,
                        //     hasImage:true,
                        //     base64:resp,
                        //     image:files[0]
                        //   } : fl;
                        // })
                        stateProps.stateProps.files[0].image = files[0];
                        stateProps.stateProps.files[0].base64 = resp;
                        stateProps.stateProps.files[0].hasImage = true;
                        stateProps.setAfterLogo();
                        // console.log();
                        // console.log('resp');
                      }}
                    />
                    <label className="custom-file-label cursor-pointer" htmlFor="getImgMain" aria-describedby="getImgMain">Choose file</label>
                  </div>
                </div>
            </div>
          </div>
  
        </div>
        
        <div className="col-xs-12 col-lg-7 requirements">
          <h5>Product image requirements</h5>
          <p>Choose images that are clear, information-rich and attractive.</p>
          <p>Images must meet the following requirements:</p>
          <ul>
              <li>Products must fill at least 85% of the image. Images must show only the product that is for sale, with few or no props and with no logos, watermarks, or inset images, Images may only contain text that is a part of the product.</li>
              <li>Main images must have a pure white background, must be a photo (not a drawing), and must not contain excluded accessories.</li>
              <li>Images must be at least 1000 pixes on the longest seide and at least 500 pixels on the shortest side to be zoom-able</li>
              <li>Images must not execeed 10,000 pixels on he longest side.</li>
              <li>JPEG is the preferred imade format, but you also may use JPG, PNG,</li>
          </ul>
            <h2>DELETE THIS H2</h2>

            <p>este texto lo puse por el footer</p>
        </div>
      </div> 
    )
  }

  export default InputFileImageAndDescription;