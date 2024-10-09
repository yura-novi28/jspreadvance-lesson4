class Worker{
    constructor(name, surname, rate, days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary(){
        return this.rate * this.days;
    }
}

const worker = new Worker('Ivan', 'Ivanov', 10, 31);
const worker1 = new Worker('Yura', 'Novik', 5, 28);

console.log(`Сума: ${worker.getSalary() + worker1.getSalary()}`) // 450