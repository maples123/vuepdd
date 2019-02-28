
const url = "http://112.74.167.31:6002/api/";

export default function dataUrl(data,query){

  if(query === undefined){

    if(/string/i.test(typeof data)){

      return url + data;
    }
  }else{
    query = query || 0;
    return url + data + "/" + query;
  }
};
