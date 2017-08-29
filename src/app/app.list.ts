import { Component, Input } from '@angular/core';

export interface ListItem{
id?:number;
name?:string;
}

@Component({
selector:'list-item',
template:`

        <div class="hero_single">
        <li class="list-item">
        <span class="badge">{{item.id}}</span>
            {{item.name}}
</li>
        </div>
    `,
    styleUrls: ['./app.component.css']
})

export class ListItemComponent {
@Input()
item:ListItem;
}
