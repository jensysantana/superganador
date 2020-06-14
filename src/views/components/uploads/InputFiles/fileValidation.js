import { SUPPORTED_FILES_FORMATS } from '../../../../config/constants/files-formats';
const fileValidation = async (file, imageMaxSize) =>{
    //2.5*sizeCalc
    let errorsx = [];
    if (file.size > imageMaxSize) {
      errorsx.push({
        error:true,
        message:'Your image size is too large',
        size: true,
        type:false 
      });
      // return { error: 'your image size is too large', index: i, size:true, }
    }

    if (SUPPORTED_FILES_FORMATS.indexOf(file.type) < 0) {
      errorsx.push({
        error:true,
        message:'Your image type is not allowed',
        size: false,
        type:true 
      });
      // return { error: 'your image type is not allowed', index: i }
    }
    return errorsx;
}
export default fileValidation;