import { Component, OnInit } from '@angular/core';
import {ToolsService} from '../../services/tools.service';
import {Tool} from '../../models/tool';

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
  styleUrls: ['./tools-list.component.scss']
})
export class ToolsListComponent implements OnInit {

  tools: Array<Tool> = [];

  constructor(private toolsService: ToolsService) { }

  ngOnInit() {
    this.toolsService.find().subscribe( (tools: Array<Tool>) => {
      this.tools = tools;
    }, (error => {
        alert(error);
      })
    );
  }

}
