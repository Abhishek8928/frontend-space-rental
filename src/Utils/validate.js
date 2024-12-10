


import  {isEmpty , isLength} from "validator"


export function validateCreateSpaceForm(payload , clearErrorHandler){

    const {spaceName,type} = payload;

    clearErrorHandler();

  if (isEmpty(spaceName) || !isLength(spaceName, { min: 3, max: 16 })) {
    throw new Error("spaceName is required");
  }
  
  if (!["hanger","shelf"].includes(type)) {
    throw new Error("invalid space type");
  }

  return true
}




