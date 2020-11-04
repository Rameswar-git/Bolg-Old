export default class message{
    public author:string;
    public message:string;
    constructor(auth:string,msg:string){
      this.author=auth;
      this.message=msg;
    }
}