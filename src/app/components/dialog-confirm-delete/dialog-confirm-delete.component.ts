import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Tool} from '../../models/tool';

@Component({
  selector: 'app-dialog-confirm-delete',
  templateUrl: './dialog-confirm-delete.component.html',
  styleUrls: ['./dialog-confirm-delete.component.scss']
})
export class DialogConfirmDeleteComponent implements OnInit {

  tool: Tool;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,
              public dialogRef: MatDialogRef<DialogConfirmDeleteComponent>) { }

  ngOnInit() {
    this.tool = this.dialogData.tool;
  }

  close(confirmed?: boolean) {
    this.dialogRef.close(confirmed);
  }

}
