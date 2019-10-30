import { Component, OnInit } from '@angular/core';
import {Tool} from '../../models/tool';
import {ToolsService} from '../../services/tools.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-tool',
  templateUrl: './add-tool.component.html',
  styleUrls: ['./add-tool.component.scss']
})
export class AddToolComponent {

  tool = new Tool();
  tags: string;
  constructor( private toolsService: ToolsService,
               private dialogRef: MatDialogRef<AddToolComponent>) { }


  save() {
    this.tool.tags = this.tags.split(',');
    this.toolsService.save(this.tool).subscribe( () => {
      this.dialogRef.close();
    }, ((error) => {
      alert(error);
      })
    );
  }

}
