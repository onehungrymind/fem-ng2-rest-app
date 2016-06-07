import {Injectable} from '@angular/core';

@Injectable()
export class WidgetService {
	
	widgets = [
		{
		  "id": 1,
		  "name": "Item 1",
		  "description": "This is a description 1"
		},
		{
		  "id": 2,
		  "name": "Item 2",
		  "description": "This is a description 2"
		},
		{
		  "id": 3,
		  "name": "Item 3",
		  "description": "This is a lovely item 3"
		}
	]

}