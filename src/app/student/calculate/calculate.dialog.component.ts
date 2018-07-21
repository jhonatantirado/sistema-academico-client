import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject, OnInit} from '@angular/core';
import {StudentService } from '../../services/student.service';
import {BlockUI, NgBlockUI } from 'ng-block-ui';
import {MessageAlertHandleService} from '../../services/message-alert.service';
import { StudentDto } from '../../models/dto/studentDto';

@Component({
  selector: 'app-calculate.dialog',
  templateUrl: './calculate.dialog.html',
  styleUrls: ['./calculate.dialog.css']
})
export class CalculateDialogComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;

  constructor(public dialogRef: MatDialogRef<CalculateDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: StudentDto, 
              public _messageAlertHandleService: MessageAlertHandleService,
              public _studentService: StudentService) { }

  ngOnInit() {
      this.blockUI.start();
      this.calculateAmountStudent(this.data.studentCode);

  }

  calculateAmountStudent(studentCode : string) : void{
      this._studentService.calculateAmountByStudentId(studentCode).subscribe(
        successData => {
          this.data.scholarship = successData;
          this.blockUI.stop();
        },
        error => {
          this._messageAlertHandleService.handleError(error);
          this.blockUI.stop();
        },
        () => {         
        }
      );
  }

  onNoClick(): void {
    this.dialogRef.close('Close');
  }

}
