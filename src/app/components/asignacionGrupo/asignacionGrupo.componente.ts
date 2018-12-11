import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'app-asignacionGrupo',
    templateUrl: './asignacionGrupo.component.html'
})

export class AsignacionGrupoComponent implements OnInit {

    items = [
        {name: "Apple", type: "fruit"},
        {name: "Carrot", type: "vegetable"},
        {name: "Orange", type: "fruit"}];
        
onItemDrop(e: any) {
    // Get the dropped data here
    //this.droppedItems.push(e.dragData);
}
constructor() { }
  
    ngOnInit() {
   
    }
  }