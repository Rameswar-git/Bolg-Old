import blogpost from './Models/BlogPost';
import basicinfo from './Models/BasicInfo';
import social from './Models/Social';
export default class MockdataService{

    // public blogs: blogpost[];

    public  blogs: Array<blogpost>=new Array;
    public bsinfo:basicinfo;
    public soci:social;

    constructor(){
       this.blogs.push(MockdataService.createnewPost("Learn Angular from scratch","Create cool projects learning AngularJS"));
       this.blogs.push(MockdataService.createnewPost("Java Algorithms and DS","Become a Java PRO"));
       this.blogs.push(MockdataService.createnewPost("Learn Angular from scratch","Create cool projects learning AngularJS"));
       this.blogs.push(MockdataService.createnewPost("Java Algorithms and DS","Become a Java PRO"));
       this.bsinfo=new basicinfo("Marcos Costa","I love developing and creating stuff to put in my car.");
       this.soci=new  social("At my company","Dallas, TX",new Date('1975-11-05T05:00:00.000Z'),"Brazil");
    }

    static createnewPost(title:string,subtitle:string):blogpost{
      return new blogpost(title,subtitle);
    }

     getpostdatas():Array<blogpost>{
      return this.blogs;
    }

    createPost(post:blogpost):void{
      this.blogs.unshift(post);
    }

    getBasicInfoData():basicinfo{
       return this.bsinfo;
    }

    saveBasicinfo(nam:string,intro:string):void{
      this.bsinfo=  new basicinfo(nam,intro);
    }

    getsocial():social{
      return this.soci;
    }

    saveSocial(wrk:string,liv:string,bir:Date,frm:string):void{
        this.soci=new social(wrk,liv,bir,frm);
    }

}