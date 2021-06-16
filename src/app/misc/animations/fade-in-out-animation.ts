import { animate, style, transition, trigger } from "@angular/animations";

export const fadeInOutAnimation = trigger('fadeInOutAnimation', [
    transition(':enter', [
        style({opacity:0}), //initial state
        animate(500, style({opacity:1})) // time of animation, end state
    ]),
    transition(':leave', [
        animate(500, style({opacity:0}))
    ])
]);