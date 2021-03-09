import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'demobet';
    string = '';
    string2 = '';
    string68 = '';
    string3 = [];
    data: any = [];

    onClick = () => {
        const data = [];
        for (let index = 0; index < 500; index++) {
            const value = Math.floor(Math.random() * 100);
            const checked = data.find(x => x == value);
            if (!checked && value < 10) data.push("0" + value);
            if (!checked && value >= 10) data.push(value);
            data.sort(function (a, b) {
                return a - b;
            });
            if (data.length === 50) return this.string = data.join(',');
        }
    }

    onClick68 = () => {
        const data = [];
        for (let index = 0; index < 500; index++) {
            const value = Math.floor(Math.random() * 100);
            const checked = data.find(x => x == value);
            if (!checked && value < 10) data.push("0" + value);
            if (!checked && value >= 10) data.push(value);
            data.sort(function (a, b) {
                return a - b;
            });
            if (data.length === 47) return this.string68 = data.join(',');
        }
    }

    onClick3 = () => {
        const data = [];
        for (let index = 0; index < 500; index++) {
            const value = Math.floor(Math.random() * 100);
            const checked = data.find(x => x == value);
            if (!checked && value < 10) data.push("0" + value);
            if (!checked && value >= 10) data.push(value);
            data.sort(function (a, b) {
                return a - b;
            });
            if (data.length === 44) return this.string2 = data.join(',');
        }
    }
}
