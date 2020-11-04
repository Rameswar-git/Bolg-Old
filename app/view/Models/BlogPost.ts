import message from './Message';
export default class blogPost{
       public id:number;
       public title:String;
       public subtitle:string;
       public content:string;
       public  messages:Array<message>;

       constructor(title: string,subtitle: string){
          this.id=Math.random();
           this.title=title;
           this.subtitle=subtitle;
           this.content="This guy is posting into " + title + " thinking that the subtitle " + subtitle + " is correct";
           this.messages= [new message("Marcos Costa", "Thanks for the awesome post"+ title),
           new message("Sunny V", "That was great. It made my day") ];
       }


}