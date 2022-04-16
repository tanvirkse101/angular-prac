import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    focus;
    focus1;
    content?: string;
    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.getPublicContent().subscribe(
            data => {
                this.content = data;
            },
            err => {
                this.content = JSON.parse(err.error).message;
            }
        );
    }
}
