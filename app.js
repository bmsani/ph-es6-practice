class worker {
    name;
    designation = 'soil worker';
    country = 'bd';
    constructor (name, country){
        this.name = name;
        this.country = country;
    }
    startWork (){
        console.log(this.name,'started working')
    }

}

const shahPoranAstha = new worker('Shah poran astha', 'england');
 shahPoranAstha.startWork();
console.log(shahPoranAstha);