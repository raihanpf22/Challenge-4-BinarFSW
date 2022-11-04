class App {
  constructor(){
    this.btnSearchCars = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("carsList");
  }

  async init() {
    this.btnSearchCars.onclick = await this.run;
    
  }

  run = async() => {
    await this.load();
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  // 

  async load() {

    const driver = document.getElementById("driver");
    const passenger = document.getElementById("passanger");


    const filterer = {driver: driver.value, passenger: passenger.value};
    console.log(filterer)

    const cars = await Binar.listCars(filterer);
    Car.init(cars);
  }

}
