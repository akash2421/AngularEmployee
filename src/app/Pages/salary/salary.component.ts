import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements  OnInit {
//add salary 
salaryObj :any ={
    "salaryId": 0,
    "employeeId": 0,
    "salaryDate": "",
    "totalAdvance": 0,
    "presentDays": 0,
    "salaryAmount": 0
  
}
salaryArray : any [] =[]
employeeArray: any []= []
totalAdvanceAmount :number=0
totalLeaves :number=0


constructor(private salSer:EmployeeService,private http:HttpClient)
{

}

ngOnInit(): void {
  this.loadAllEmployee()
  this.getAllSalary()

}
loadAllEmployee()
{
  this.salSer.getAllEmployee().subscribe((res:any)=>{
    this.employeeArray = res.data
  })
}
getAllSalary()
{
  this.http.get('https://onlinetestapi.gerasim.in/api/TeamSync/GetAllSalary').subscribe((res:any)=>{
    this.salaryArray =res.data
  })
}
getEmpData()
{
  debugger
  this.GetAllAdvance();
  this.GetAllLeaves();
}

GetAllAdvance()
{
  this.salSer.getAllAdvance().subscribe((res:any)=>{
debugger
    const data = res.data.filter((m:any) => m.employeeId == this.salaryObj.employeeId)

    data.forEach((item:any)=>{
    this.totalAdvanceAmount=  this.totalAdvanceAmount= item.advanceAmount

  })
  this.salaryObj.totalAdvance =this.totalAdvanceAmount

  })
}
GetAllLeaves()
{
  this.salSer.getAllLeave().subscribe((res:any)=>{
    
    this.totalLeaves = res.data.filter((l:any)=> l.employeeId == this.salaryObj.employeeId).length
//   data.forEach((item:any)=>{
// this.totalLeaves += item.noOfFullDayLeaves
  // })
  this.salaryObj.presentDays =  30- this.totalLeaves
  })
}

calculateSalary(){

  const empdata = this.employeeArray.find((m:any)=> m.empId ==  this.salaryObj.employeeId)
  const perDaySalary = empdata.salary/30
  this.salaryObj.salaryAmount = ((this.salaryObj.presentDays * perDaySalary) - this.salaryObj.totalAdvance).toFixed(0)
}


onSave()
{
  this.http.post('https://onlinetestapi.gerasim.in/api/TeamSync/AddSalary',this.salaryObj).subscribe((res: any) => {
    if (res.result) {
      this.getAllSalary()
      alert(res.message)

    }
    else{
    alert(res.message)
    }
  })
}

reset()
{

}
}
