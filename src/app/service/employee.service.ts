import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
 ///// Employes Details
  getAllEmployee() : Observable<any> {
    debugger
    return this.http.get<any>('https://onlinetestapi.gerasim.in/api/TeamSync/GetAllEmployee');
   }

   createEmployee(obj:any): Observable<any> 
   {
    debugger
    return this.http.post('https://onlinetestapi.gerasim.in/api/TeamSync/CreateEmployee',obj);
   }
   updateEmployee(obj:any): Observable<any> 
   {
    debugger
    return this.http.post('https://onlinetestapi.gerasim.in/api/TeamSync/UpdateEmployee',obj);
   }
   getEmpById(id:number)
   {
    debugger
    return this.http.get('https://onlinetestapi.gerasim.in/api/TeamSync/GetEmployeeByEmpId?empid='+ id);
   }
   deleteEmpById(id:number)
   {
    debugger
    return this.http.get('https://onlinetestapi.gerasim.in/api/TeamSync/DeleteEmployeeByEmpId?empid='+ id);
   }


   /// Attandence
   getAllAttendance() : Observable<any> {
    debugger
    return this.http.get<any>('https://onlinetestapi.gerasim.in/api/TeamSync/GetAllAttendance');
   }

   addAttendance(obj:any): Observable<any> 
   {
    debugger
    return this.http.post('https://onlinetestapi.gerasim.in/api/TeamSync/AddAttendance',obj);
   }
   updateAttandance(obj:any): Observable<any> 
   {
    debugger
    return this.http.post('https://onlinetestapi.gerasim.in/api/TeamSync/UpdateAttendance',obj);
   }
   deleteAttandenceById(id:number)
   {
    debugger
    return this.http.get('https://onlinetestapi.gerasim.in/api/TeamSync/DeleteAttendanceById?attendanceid='+ id);
   }


   ////Advance
   getAllAdvance() : Observable<any> {
    debugger
    return this.http.get('https://onlinetestapi.gerasim.in/api/TeamSync/GetAllAdvance');
   }

   addAdvance(obj:any): Observable<any> 
   {
    debugger
    return this.http.post('https://onlinetestapi.gerasim.in/api/TeamSync/AddAdvance',obj);
   }
   getAdvanceById(id:number)
   {
    debugger
    return this.http.get('https://onlinetestapi.gerasim.in/api/TeamSync/GetAllAdvanceByEmpId?empid='+ id);
   }
   updateAdvance(obj:any): Observable<any> 
   {
    debugger
    return this.http.post('https://onlinetestapi.gerasim.in/api/TeamSync/UpdateAdvance',obj);
   }
   deleteAdvanceById(id:number)
   {
    debugger
    return this.http.get('https://onlinetestapi.gerasim.in/api/TeamSync/DeleteAdvanceById?advanceid='+ id);
   }
}
