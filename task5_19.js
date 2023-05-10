
class KitchenDevice {
    constructor (deviceType, power, connectType, color) {
        this.voltage = '220v';
        this.deviceType = deviceType;
        this.power = power;
        this.connectType = connectType;
        this.color = color;  
    }
  
    getPowerOn = function (time) {
        return `Устройство включится через  ${time} секунд, после нажатия кнопки` 
    }
  };
  
  class WirelessDevice extends KitchenDevice {
    constructor (deviceType, power, connectType, color, chargePower, chargeTime) {
        super();
        this.deviceType = deviceType;  
        this.power = power;
        this.connectType = connectType;
        this.color = color;
        this.chargePower = chargePower;
        this.chargeTime = chargeTime;
    }
  
    getPowerOn = function (time){
        return `Устройство начнет работу через  ${time} секунд, после нажатия кнопки "Пуск"`
    }
  }
  
  class BatteryDevice extends KitchenDevice {
    constructor (deviceType, power, connectType, color, chargePower, batteryType) {
        super();
        this.voltage = '3v';
        this.deviceType = deviceType;
        this.power = power;
        this.connectType = connectType;
        this.color = color;
        this.chargePower = chargePower;
        this.batteryType = batteryType;
    }
  
    getPowerOn = function (time){
      return `Через ${time} секунды, после звукового сигнала, устройство готово к работе`
    }
  }
  
    const kettle = new KitchenDevice('чайник', '1500 Вт', 'smart', 'silver');
    const toaster = new KitchenDevice('тостер', '1000 Вт', 'network', 'red');
    const blender = new WirelessDevice('блендер', '700 Вт', 'wireless', 'white', '50 Вт', '2 часа'); 
    const cappuccinatore = new BatteryDevice('капучинатор', '20 Вт', 'battery', 'black', '50 Вт', 'AAA');   
  
  console.log(kettle);
  console.log(kettle.getPowerOn(0));
  console.log(toaster);
  console.log(toaster.getPowerOn(10));
  console.log(blender);
  console.log(blender.getPowerOn(5));
  console.log(cappuccinatore);
  console.log(cappuccinatore.getPowerOn(2));
  