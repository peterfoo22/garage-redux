// TODO: add and export your own actions


export const CAR_CREATED = "CAR_CREATED";
export const GET_CARS = 'GET_CARS';


export function createCar(brand, model, owner, plate) {
  const url = "https://wagon-garage-api.herokuapp.com/:mygarage/cars";
  const ourCar = { brand, model, owner, plate };
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(ourCar)
  });

  return {
    type: CAR_CREATED,
    payload: promise // Will be resolved by redux-promise
  };
}


export function getCars() {
  const url = fetch("https://wagon-garage-api.herokuapp.com/:mygarage/cars");
  fetchPromise.then(response => {
    return response.json();
  }).then(data => {
    console.log(data);
  });
}
