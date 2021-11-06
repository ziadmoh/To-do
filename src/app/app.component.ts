import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  tasks :string[] =[]
  currentTask:string = ''
  onAddTask(){
    if(this.currentTask){
      this.tasks.push(this.currentTask);
      this.currentTask = '';
    }
    
  }

  onRemoveTask(index:number){
    this.tasks.splice(index,1);
  }
  
}
