// TODO: add and export your own actions


export const CAR_CREATED = "CAR_CREATED";
export const GET_CARS = 'GET_CARS';
export const SHOWTHECAR = 'SHOWTHECAR';

const url = "https://wagon-garage-api.herokuapp.com/:mygarage/cars";

export function createCar(brand, model, owner, plate) {
  const ourCar = { brand, model, owner, plate };
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(ourCar)
  }).then(r => r.json());

  return {
    type: "CAR_CREATED",
    payload: promise // Will be resolved by redux-promise
  };
}

export function deleteCar(carID) {
  const newurl = `https://wagon-garage-api.herokuapp.com/cars/${carID}`;
  const promise = fetch(newurl, { method: 'DELETE' })
    .then(r => r.json())
    .then(() => history.push(""));
  return {
    type: "DELETECAR",
    payload: promise
  };
}

export function showtheCar(carID) {
  const newurl = `https://wagon-garage-api.herokuapp.com/cars/${carID}`;
  const promise = fetch(newurl, { method: 'GET' })
    .then(r => r.json());

  return {
    type: "SHOWTHECAR",
    payload: promise

  }
}

export function carsGet() {
  const promise = fetch(url)
    .then(r => r.json());

  return {
    type: 'GET_CARS',
    payload: promise // Will be resolved by redux-promise
  };
}
