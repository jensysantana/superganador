import React,{ useState, useCallback, useEffect, useRef } from 'react'
import ImageGallery from '../../../../shareds-components/ImageGallery/ImageGallery';
import fileValidation from './fileValidation';
import imageCompression from 'browser-image-compression';
import iconUpload from "../../../../assets/images/upload_icon.png";
// process.env.PUBLIC_URL
import InputFileImageAndDescription from '../../../../shareds-components/ImageGallery/InputFileImageAndDescription/InputFileImageAndDescription';
import './style.css'
const blobToBase64 = (blob)=>{
    return new Promise((resolve, reject)=>{
        let reader = new FileReader();
        reader.onloadend = function() {
            // var base64data = reader.result;                
            // console.log(base64data);
            resolve(reader.result);
        }
        reader.readAsDataURL(blob);
    })
}

export const compressorImg = async (file)=>{
    // respFile.image = file;
    // you should provide one of maxSizeMB, maxWidthOrHeight in the options
    const options = { 
        maxSizeMB: 1,          // (default: Number.POSITIVE_INFINITY)
        maxWidthOrHeight: 1920,   // compressedFile will scale down by ratio to a point that width or height is smaller than maxWidthOrHeight (default: undefined)
        useWebWorker: true,      // optional, use multi-thread web worker, fallback to run in main-thread (default: true)
        // maxIteration: number,       // optional, max number of iteration to compress the image (default: 10)
        // exifOrientation: number,    // optional, see https://stackoverflow.com/a/32490603/10395024
        // onProgress: Function,       // optional, a function takes one progress argument (percentage from 0 to 100) 
        // fileType: string            // optional, fileType override
    }
            
    const compressedFile = await imageCompression(file, options);
    // let formData = new FormData();
    // formData.append('module', state.moduleName);
    const base64 = await blobToBase64(compressedFile);
    return base64;
}

const onloadNewSaveFile = async (files, state)=>{

    // console.log('file');
    // console.log(files);
    // console.log(state);
    
    for (let bx = 0; bx < files.length; bx++) {
        const file = files[bx];
        // console.log('file');
        // console.log(file);
        // console.log('file');
        if (!file.type.match('image')) continue;
            const errors = await fileValidation(file, state.maxSize);
            const [ error ] = errors;
            

        if (error?.type) {

                
                
        }else{
            const respFile = state.files.find(fl=>!fl.hasImage)
            // console.log('respFile');
            // console.log(file);
            // console.log('respFile');
            
            if (!respFile.hasImage) {
                respFile.hasImage = true;
                // respFile.image = file;
                // you should provide one of maxSizeMB, maxWidthOrHeight in the options
                // const options = { 
                //     maxSizeMB: 1,          // (default: Number.POSITIVE_INFINITY)
                //     maxWidthOrHeight: 1920,   // compressedFile will scale down by ratio to a point that width or height is smaller than maxWidthOrHeight (default: undefined)
                //     useWebWorker: true,      // optional, use multi-thread web worker, fallback to run in main-thread (default: true)
                //     // maxIteration: number,       // optional, max number of iteration to compress the image (default: 10)
                //     // exifOrientation: number,    // optional, see https://stackoverflow.com/a/32490603/10395024
                //     // onProgress: Function,       // optional, a function takes one progress argument (percentage from 0 to 100) 
                //     // fileType: string            // optional, fileType override
                // }
                        
                // const compressedFile = await imageCompression(file, options);
                // // let formData = new FormData();
                // // formData.append('module', state.moduleName);

                if (!respFile.isLogo) {
                }
                const base64 = await compressorImg(file);
                respFile.base64 = base64;
                
                //     // formData.append('file', compressedFile, compressedFile.name);
                //     // formData.append('token', localStorage.getItem('__wua'));
                //     let newILoop = {progress: 1};
                //     /*
                //     const respDb = await apiInterceptor.post('/upload', formData, {
                //         headers: {'Content-Type':'multipart/form-data'},
                //         onUploadProgress: (progressEvent) => {
                //             const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
                //             if (totalLength !== null) {
                //                 newILoop.progress = Math.round( (progressEvent.loaded * 100) / totalLength );
                //             }
                //         }
                //     })
                //     const { response:{_id} } = respDb?.data;
                //     */                   
                //    controller = true;
                // }
            }
        }  
    }
    // console.log('newFilesArr');
    // console.log(newFilesArr);
    // console.log(state);
    // console.log('newFilesArr');
    return state.files;
}

const positionCreator = async (positions)=>{
    let newFilesArr = [];
    for (let b = 0; b < positions; b++) {
        newFilesArr.push(
            {
                _id:b, 
                isLogo: b === 0 ? true : false, 
                hasImage:false,
                image:"", 
                base64:'', 
                oldImg:null, 
                save:false, 
                cropRequired:false, 
                croped:false, 
                hasError:false, 
                errors:{}, 
                initialErrors:{}
            }
        )
    }
    return newFilesArr;
}

const InputFiles = ({name, maxSize, max, moduleName, multiple, getImages, ...props}) => {
    const imgIcon = useRef(null);
    if (imgIcon && imgIcon.current) {
        imgIcon.current.src = iconUpload; 
    }
    // console.log('multiple?.multiple');
    // console.log(multiple);
    // console.log('multiple?.multiple');
    const [isLoadding, setIsLoadding] = useState(false);
    let sizeCalc = 1024*1024;
    sizeCalc = sizeCalc*maxSize;
    const [state, setState] = useState({})
    // console.log('state');
    // console.log(state);
    // console.log('state');

    // await positionCreator(max)
    const startIMG = useCallback( async () => {
        const arrx = await positionCreator(max)
        setState( ()=>{
            return {
                files: arrx,
                max:max,
                maxSize:sizeCalc, 
                lasIndex:0,
                totalImages:0,
                counter:0,
                modalShow:false,
                hasErrorImage:false,
                errorMessage:'',
                alertColor: 'alert-warning',
                moduleName
            }
        })
    }, [])

    useEffect(()=>{
        startIMG()
    }, [startIMG])

    const fileChange = async (e)=>{
        e.persist()
        const { files } = e.target;
        if (files.length === 0) {
            setIsLoadding(false)
            return;
        }
        
        setIsLoadding(true);
        
        // console.log(1111);
        if (files.length > max || files.length > state.files.length) {
            // console.log(2222);
            // console.log('state.files.length');
            // console.log(state.files.length);
            // console.log(max);
            // console.log(files.length);
            // console.log(state.files);
            // console.log('state.files.length');
            //show alert message
            setState(statex=>{
                return {
                    ...statex,
                    hasErrorImage:true,
                    errorMessage:`Sorry, we only allow upload ${max} images maximum.`
                }
            })
            setIsLoadding(false);
        }else{
            
            try {
                // console.log(88883333);
                // const respOnlod = await onloadSaveFile(files, state);
                const respOnlod = await onloadNewSaveFile(files, state);
                // console.log('respOnlod ---****--');
                // console.log(respOnlod);
                // console.log('respOnlod ---****--');
                setState(statex=>{
                    return {
                        ...statex, 
                        files:respOnlod, 
                        hasErrorImage:false,
                    }
                })
                setIsLoadding(false)
                // console.log(3333);
                getImages(respOnlod)
            } catch (error) {
                // console.log('error');
                // console.log(error);
                // console.log('error');
                setIsLoadding(false);
                setState(st=>{
                    let respDB = error?.response?.data;
                    return {
                        ...st,
                        hasErrorImage: respDB?.message !== '' ? true : false,
                        errorMessage:respDB?.message,
                        alertColor:'bg-warning'
                    }
                })
                // console.log(444);
            }
        }
    }
    const setAfterLogo = ()=>{
        setState(st=>{
            return {
                ...st
                
            } 
        })
    }

    return (
        <section className="row containe-image-file justify-content-center align-items-center">
            <div className="col-12">
                <InputFileImageAndDescription setAfterLogo={setAfterLogo} stateProps={state} />
            </div>
            <div className="col-12 col-lg-5 cursor-pointer">
                <div className="row">
                    <div className="col-12 pl-0 pb-0 mb-0">
                        <label htmlFor={name} className="label-hided-file text-center">
                            <img ref={imgIcon} className="img-fluid" />
                            {/* <div className="image_upload_icon"></div> */}
                        </label>
                    </div>
                    <p className="mb-0 pb-0">Add up to 12 photos. We don't allow photos with extra works or artworks.</p>
                    <p className="mb-0 pb-0">Also you can copy your photos from a web page.</p>
                </div>
                <div className="form-group">
                    <input 
                        type="file" 
                        accept="image/*" 
                        className="custom-file-input input-file-hide" 
                        multiple={multiple} 
                        onChange={fileChange} 
                        id={name} 
                        name={name} 
                    />
                </div>
            </div>
            <div className="col-12 col-lg-7">
                <ImageGallery {...props} stateProps={state} />
            </div>
        </section>
    )
}

export default InputFiles;