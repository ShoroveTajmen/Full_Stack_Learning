{

//learning function
//normal function
//arrow function

function add(num1 : number, num2: number = 10) : number {
    return num1 + num2;
}
add (2, 2);

function addArrow = (num1:number, num2:number): number => num1 + num2

// object er majhe kono function thakle seta method
const poorUser = {
    name : 'srvi',
    balance: 0,
    addBalance(balance: number) : string {
        return `My new balance is : ${this.balance+ balance}`;
    },
}

const arr : number[] = [1,4,10]
const newArray : number[] = arr.map((elem : number ) : number => elem * elem)

}