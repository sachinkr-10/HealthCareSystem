import { Component, OnInit, Inject } from '@angular/core';
import { date } from '../date.model';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AppiontmenthandlerService } from '../appiontmenthandler.service';

@Component({
  selector: 'app-appointment-message',
  templateUrl: './appointment-message.component.html',
  styleUrls: ['./appointment-message.component.css']
})
export class AppointmentMessageComponent implements OnInit {
   today=new Date();
  //  date=this.today.getFullYear()+'/'+(this.today.getMonth()+1)+'/'+(this.today.getDate()+1);
   time=(this.today.getHours()>12&&this.today.getHours()<17)?"2:30P.M-4:30 P.M":"9:30A.M-12:00P.M";
   model:any;
  //  value=false;
   selectedDate:any;
   date:any;
  //  selectDate:date;
  value(data:any){
    this.serv.setLogDATE(data);
    this.onNoClick();
    this.serv.btnStaus=true;
   }
  // selectedSlot="";
  constructor(public serv:AppiontmenthandlerService, public dialogRef: MatDialogRef<AppointmentMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit(): void {
      }
      onNoClick(): void {
        this.dialogRef.close();
      }



}
