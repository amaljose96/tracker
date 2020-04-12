import { APIRequest } from "../../../Redux/fireRequest";
import { searchStringMatch, transformSubmitRequest } from "./utils";

export function getDistrictOptions(searchText) {
  return APIRequest("getDistrictsList", [""]).then((response) => {
    if(response && response.data && response.data.results){
      return response.data.results;
    }
    else{
      return []
    }
  });
}

export function getLSGNameOptions(type, district) {
  return APIRequest("getDistrictsList", [district.id, "local_bodies"]).then(
    (response) => {
      if(response && response.data){
        return response.data.filter((lsg) => {
          return searchStringMatch(lsg.name, type);
        });
      }
      else{
        return [];
      }
    }
  );
}

export function getHCNameOptions(lsg, type) {
  return APIRequest("getFacilitiesList", [""], {
    // local_body:lsg.id,
  }).then((response) => {
    if(response && response.data && response.data.results){
      return response.data.results.filter((hc) => {
        return hc.facility_type === type;
      });
    }
    else{
      return [];
    }
  });
}

export function saveForm(formData) {
  let transformedRequest = transformSubmitRequest(formData);
  return APIRequest("createPatient",[],transformedRequest);
}
