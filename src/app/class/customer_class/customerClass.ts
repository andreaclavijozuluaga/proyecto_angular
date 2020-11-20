export class customerClass {
  public id: string;
  public nom: string;
  public sal: number;
  public fec_nac: Date;

  constructor() {
      this.id="";
      this.nom="";
      this.sal=0;
      this.fec_nac=new Date();
  }
}
