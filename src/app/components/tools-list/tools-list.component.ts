import { Component, OnInit } from '@angular/core';
import {ToolsService} from '../../services/tools.service';
import {Tool} from '../../models/tool';
import {HttpParams} from '@angular/common/http';
import {MatDialog} from '@angular/material';
import {DialogConfirmDeleteComponent} from '../dialog-confirm-delete/dialog-confirm-delete.component';
import {AddToolComponent} from '../add-tool/add-tool.component';

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
  styleUrls: ['./tools-list.component.scss']
})
export class ToolsListComponent implements OnInit {

  tagsOnly = false;
  tools: Array<Tool> = [];

  constructor(private toolsService: ToolsService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.findAll();
  }

  private findAll() {
    this.toolsService.find().subscribe((tools: Array<Tool>) => {
        this.tools = tools;
      }, (error => {
        alert(error);
      })
    );
  }

  search(event: any) {
    if (event.target.value) {
      let httpParams;
      if (this.tagsOnly) {
        httpParams = new HttpParams().set('tags_like', event.target.value);
      } else {
        httpParams = new HttpParams().set('q', event.target.value);
      }
      this.toolsService.find(httpParams).subscribe( (tools: Array<Tool>) => {
          this.tools = tools;
        }, (error => {
          alert(error);
        })
      );
    } else {
      this.findAll();
    }
 }

 delete(element: Tool) {
   this.dialog.open(DialogConfirmDeleteComponent, {data: {tool: element}, minWidth: '30%'})
     .afterClosed().subscribe( (returnValue) => {
       if (returnValue) {
         this.toolsService.delete(element.id).subscribe(() => {
             this.tools.splice(this.tools.findIndex( (tool => tool.id === element.id)), 1);
           }, (error => {
             alert(error);
           })
         );
       }
   });
 }

 add() {
   this.dialog.open(AddToolComponent, {minWidth: '50%'});
 }

}
