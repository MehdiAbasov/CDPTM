export default function buildFormData(data){

  const formData = new FormData();

  Object.keys(data).forEach(key=>{

    const value = data[key];

    if(typeof value === "object" && !(value instanceof File)){

      formData.append(
        key,
        JSON.stringify(value)
      );

    }else{

      formData.append(key,value);

    }

  });

  return formData;

}