import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-home-route',
    templateUrl: './home-route.component.html',
    styleUrls: ['./home-route.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeRouteComponent implements OnInit {
    public stack: any = {
        design: [
            {
                title: 'Illustrator',
                image: 'assets/images/stack-ai.png',
            },
            {
                title: 'Photoshop',
                image: 'assets/images/stack-ps.png',
            },
            {
                title: 'Figma',
                image: 'assets/images/stack-figma.png',
            },
            {
                title: 'Adobe XD',
                image: 'assets/images/stack-xd.png',
            },
            {
                title: 'Sketch',
                image: 'assets/images/stack-sketch.png',
            },
            {
                title: 'Excalidraw',
                image: 'assets/images/stack-excalidraw.png',
            },
        ],
        coding: [
            {
                title: 'Javascript',
                image: 'assets/images/stack-js.png',
            },
            {
                title: 'Typescript',
                image: 'assets/images/stack-ts.png',
            },
            {
                title: 'Node JS',
                image: 'assets/images/stack-nodejs.png',
            },
            {
                title: 'Express JS',
                image: 'assets/images/stack-null.png',
            },
            {
                title: 'Mongo DB',
                image: 'assets/images/stack-mongodb.png',
            },
            {
                title: 'Angular',
                image: 'assets/images/stack-angular.png',
            },
            {
                title: 'Ionic',
                image: 'assets/images/stack-ionic.png',
            },
            {
                title: 'Capacitor',
                image: 'assets/images/stack-capacitor.png',
            },
            {
                title: 'Cordova',
                image: 'assets/images/stack-cordova.png',
            },
            {
                title: 'Tailwind',
                image: 'assets/images/stack-tailwind.png',
            },
            {
                title: 'SCSS',
                image: 'assets/images/stack-sass.png',
            },
            {
                title: 'Electron JS',
                image: 'assets/images/stack-electronjs.png',
            },
            {
                title: 'PHP',
                image: 'assets/images/stack-php.png',
            },
            {
                title: 'Java',
                image: 'assets/images/stack-java.png',
            },
            {
                title: 'Swift',
                image: 'assets/images/stack-swift.png',
            },
        ],
        tooling: [
            {
                title: 'GIT',
                image: 'assets/images/stack-git.png',
            },
            {
                title: 'Github',
                image: 'assets/images/stack-github.png',
            },
            {
                title: 'VSCode',
                image: 'assets/images/stack-vscode.png',
            },
            {
                title: 'XCode',
                image: 'assets/images/stack-xcode.png',
            },
            {
                title: 'ITerm',
                image: 'assets/images/stack-iterm.png',
            },
            {
                title: 'ZSH',
                image: 'assets/images/stack-null.png',
            },
            {
                title: 'Source Tree',
                image: 'assets/images/stack-sourcetree.png',
            },
            {
                title: 'Robo 3T',
                image: 'assets/images/stack-null.png',
            },
            {
                title: 'Google Cloud',
                image: 'assets/images/stack-gcloud.png',
            },
            {
                title: 'AWS',
                image: 'assets/images/stack-aws.png',
            },
            {
                title: 'Slack',
                image: 'assets/images/stack-slack.png',
            },
            {
                title: 'Discord',
                image: 'assets/images/stack-discord.png',
            },
            {
                title: 'Spotify',
                image: 'assets/images/stack-spotify.png',
            },
        ],
        platform: [
            {
                title: 'IOS',
                image: 'assets/images/stack-ios.png',
            },
            {
                title: 'Android',
                image: 'assets/images/stack-android.png',
            },
            {
                title: 'Desktop',
                image: 'assets/images/stack-desktop.png',
            },
        ],
    };

    constructor() {}

    ngOnInit(): void {}
}
