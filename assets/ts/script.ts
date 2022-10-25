class MotherAccount {
  balanceInit: number = 0;

  public deposit(amount: number): void {
    this.balanceInit = this.balanceInit + amount;
    console.log(`Il saldo M dopo il deposito è ${this.balanceInit}$`);
  }
  public withdraw(amount: number): void {
    this.balanceInit = this.balanceInit - amount;
    console.log(`Il saldo M dopo il prelievo è ${this.balanceInit}$`);
  }
  public addInterest(): void {
    this.balanceInit = this.balanceInit * 1.1;
    console.log(`Il saldo dopo gli interessi applicati è ${this.balanceInit}$`);
  }
}

class SonAccount extends MotherAccount {
  public deposit(amount: number): void {
    this.balanceInit = this.balanceInit + amount;
    console.log(`Il saldo S dopo il deposito è ${this.balanceInit}$`);
  }
  public withdraw(amount: number): void {
    this.balanceInit = this.balanceInit - amount;
    console.log(`Il saldo S dopo il prelievo è ${this.balanceInit}$`);
  }
  public addInterest(): void {
    this.balanceInit = this.balanceInit;
    console.log(`Il saldo è ${this.balanceInit}$, non ci sono interessi applicabili.`);
  }
}

let accountM = new MotherAccount();
accountM.deposit(400);
accountM.withdraw(100);
accountM.deposit(600);
accountM.withdraw(400);
accountM.addInterest();

let accountS = new SonAccount();
accountS.deposit(500);
accountS.withdraw(200);
accountS.deposit(300);
accountS.withdraw(250);
accountS.addInterest();