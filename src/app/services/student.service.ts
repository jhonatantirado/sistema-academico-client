import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Student} from '../models/student';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { HttpParams } from '@angular/common/http';
import { MessageAlertHandleService } from './message-alert.service';


@Injectable()
export class StudentService {
  API_URL : string = environment.apiUrl + 'Students';

  dataChange: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>([]);
  dialogData: Student; 
  totalSize : BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor (private httpClient: HttpClient,
              public _messageAlertHandleService: MessageAlertHandleService,
              ) {}
  
  getStudentByType(type : string): void {
    let params = new HttpParams()
    .set('studentType', type);
    this.httpClient.get<Student[]>(this.API_URL+'/findByType',{params}).subscribe(
      data => {
        this.dataChange.next(data);
      },
      (error : any) => {
        this._messageAlertHandleService.handleError(error);
      },
      () => {
      }
      );
  }

  getAllStudent(): void {
    this.httpClient.get<Student[]>(this.API_URL).subscribe(
        data => {
          this.dataChange.next(data);
        },
        (error : any) => {
          this._messageAlertHandleService.handleError(error);
        },
        () => {
        }
      );
  }

  calculateAmountByStudentId (studentId : string): Observable<number> {
    let params = new HttpParams()
    .set('studentCode', studentId);
    return this.httpClient
            .get<number>(this.API_URL+'/getScholarshipAmount',{params})
            .map(
                res => res
              )
            .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  
  get data(): Student[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  getTotalSize() : number{
      return this.totalSize.value;
  }

  
}