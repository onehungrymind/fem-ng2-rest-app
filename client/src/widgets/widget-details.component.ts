import {Component, Input} from '@angular/core';
import {Widget} from './widgets-service';

@Component({
  selector: 'widget-details',
  template: `
  <pre>{{widget | json}}</pre>
  {{selectedWidget | json}}
  {{selectedWidget.name}}
  `
})
export class WidgetDetailsComponent {
  originalName: string;
  selectedWidget: Widget;	
  //@Input() widget;
  @Input() set widget(widget: Widget){
    if (widget) this.originalName = widget.name;
    this.selectedWidget = Object.assign({}, widget);
  }
}