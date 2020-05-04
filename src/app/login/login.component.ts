import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { AppiontmenthandlerService } from '../appiontmenthandler.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private userName="sachin"
  private password=123456;
  submitted=false;
  logstatus:boolean;
  // @Output() public childData=new EventEmitter();
  // @Output() public data=new EventEmitter
  constructor(private serv:AppiontmenthandlerService) { }

  ngOnInit(): void {
  }

  onSubmit(uName,password){
      password=parseInt(password);
      this.submitted=true;
      if(this.userName===uName && this.password===password){
        // console.log("Sorry"+uName+"not A valid membr");
        this.logstatus=true;
        // this.serv.setLogStatus(this.logstatus);
      //  console.log(this.serv.getLogstatus());
        // this.childData.emit(this.userName)
      }else{
        this.logstatus=false;
        // this.serv.setLogStatus(this.logstatus);
        // console.log("Sorry"+uName+"not A valid membr")
            //  this.childData.emit("sorry!!!Invalid userid and name");
      }
}}
