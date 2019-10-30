import { Component, OnInit } from '@angular/core';
import {Tool} from '../../models/tool';
import {ToolsService} from '../../services/tools.service';

@Component({
  selector: 'app-add-tool',
  templateUrl: './add-tool.component.html',
  styleUrls: ['./add-tool.component.scss']
})
export class AddToolComponent implements OnInit {

  tool = new Tool();

  constructor(toolsService: ToolsService) { }

  ngOnInit() {
  }

}
