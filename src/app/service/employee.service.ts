import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {  }
   


  ///// Employes Details
  getAllEmployee(): Observable<any> {
    const headers = new HttpHeaders({
      'content-type': 'application/json'
    })

    //debugger
    return this.http.get<any>('https://onlinetestapi.gerasim.in/api/TeamSync/GetAllEmployee', { headers });
  }

  createEmployee(obj: any): Observable<any> {
    const headers = new HttpHeaders({
      'content-type': 'application/json'
    })

    //debugger
    return this.http.post('https://onlinetestapi.gerasim.in/api/TeamSync/CreateEmployee', obj, { headers });
  }
  updateEmployee(obj: any): Observable<any> {
    //debugger
    return this.http.post('https://onlinetestapi.gerasim.in/api/TeamSync/UpdateEmployee', obj);
  }
  getEmpById(id: number) {
    //debugger
    return this.http.get('https://onlinetestapi.gerasim.in/api/TeamSync/GetEmployeeByEmpId?empid=' + id);
  }
  deleteEmpById(id: number) {
    //debugger
    return this.http.get('https://onlinetestapi.gerasim.in/api/TeamSync/DeleteEmployeeByEmpId?empid=' + id);
  }


  /// Attandence
  getAllAttendance(): Observable<any> {
    //debugger
    return this.http.get<any>('https://onlinetestapi.gerasim.in/api/TeamSync/GetAllAttendance');
  }

  addAttendance(obj: any): Observable<any> {
    //debugger
    return this.http.post('https://onlinetestapi.gerasim.in/api/TeamSync/AddAttendance', obj);
  }
  updateAttandance(obj: any): Observable<any> {
    //debugger
    return this.http.post('https://onlinetestapi.gerasim.in/api/TeamSync/UpdateAttendance', obj);
  }
  deleteAttandenceById(id: number) {
    //debugger
    return this.http.get('https://onlinetestapi.gerasim.in/api/TeamSync/DeleteAttendanceById?attendanceid=' + id);
  }


  ////Advance
  getAllAdvance(): Observable<any> {
    // debugger
    return this.http.get('https://onlinetestapi.gerasim.in/api/TeamSync/GetAllAdvance');
  }

  addAdvance(obj: any): Observable<any> {
    // debugger
    return this.http.post('https://onlinetestapi.gerasim.in/api/TeamSync/AddAdvance', obj);
  }
  getAdvanceById(id: number) {
    debugger
    return this.http.get('https://onlinetestapi.gerasim.in/api/TeamSync/GetAllAdvanceByEmpId?empid=' + id);
  }
  updateAdvance(obj: any): Observable<any> {
    // debugger
    return this.http.post('https://onlinetestapi.gerasim.in/api/TeamSync/UpdateAdvance', obj);
  }
  deleteAdvanceById(id: number) {
    //debugger
    return this.http.get('https://onlinetestapi.gerasim.in/api/TeamSync/DeleteAdvanceById?advanceid=' + id);
  }


  ////Leave
  getAllLeave(): Observable<any> {
    //debugger
    return this.http.get('https://onlinetestapi.gerasim.in/api/TeamSync/GetAllLeaves');
  }

  addLeave(obj: any): Observable<any> {
    //debugger
    return this.http.post('https://onlinetestapi.gerasim.in/api/TeamSync/AddLeave', obj);
  }
  getLeaveById(id: number) {
    //debugger
    return this.http.get('https://onlinetestapi.gerasim.in/api/TeamSync/GetAllLeavesByEmpId?empid=' + id);
  }
  updateLeave(obj: any): Observable<any> {
    //debugger
    return this.http.post('https://onlinetestapi.gerasim.in/api/TeamSync/UpdateLeave', obj);
  }
  deleteLeaveById(id: number) {
    //debugger
    return this.http.get('https://onlinetestapi.gerasim.in/api/TeamSync/DeleteLeaveById?leaveid=' + id);
  }
}
