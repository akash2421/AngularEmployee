import { Component, OnInit } from '@angular/core';
import { IAdvance, advance } from 'src/app/classes/advance';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.css']
})
export class AdvanceComponent implements OnInit  {
  advanceArray :IAdvance[] = []
  advanceObj :advance =  new advance();
  employeeArray:any []= []

constructor(private advser:EmployeeService)
{

}
ngOnInit(): void {
  this.getEmployee();
  this.loadAllAdvance();

}
getEmployee()
{
  debugger
  this.advser.getAllEmployee().subscribe((res:any)=>{
    debugger
this.employeeArray = res.data
  })
}



loadAllAdvance()
{
this.advser.getAllAdvance().subscribe((res:any)=>{
  this.advanceArray = res.data
})
}


onSave()
{
this.advser.addAdvance(this.advanceObj).subscribe((res:any)=>{
if(res.result){
this.loadAllAdvance()
this.advanceObj  =  new advance();

} 
alert(res.message)

})
}


onDelete(advanceId:number){
debugger
this.advser.deleteAdvanceById(advanceId).subscribe((res: any) => {
  debugger
  if (res.result) {
    this.loadAllAdvance()
    alert(res.message)

  } else {
    alert(res.message)

  }
})
}

onEdit(advanceId:number){
  debugger
  this.advser.getAdvanceById(advanceId).subscribe((res: any) => {
    debugger
    this.advanceObj = res.data;

  })
}
reset()
{

}

}
