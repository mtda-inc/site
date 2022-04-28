import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, Inject, PLATFORM_ID } from '@angular/core';
import { IconService } from '../../services/icon.service';

@Component({
    selector: 'section-stack',
    templateUrl: './section-stack.component.html',
    styleUrls: ['./section-stack.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionStackComponent implements OnInit {
    public stack: any = {
        design: [
            {
                title: 'Illustrator',
                svg: this.iconPack.icons.ai,
            },
            {
                title: 'Photoshop',
                svg: this.iconPack.icons.ps,
            },
            {
                title: 'Figma',
                svg: this.iconPack.icons.figma,
            },
            {
                title: 'Adobe XD',
                svg: this.iconPack.icons.xd,
            },
            {
                title: 'Sketch',
                svg: this.iconPack.icons.sketch,
            },
            {
                title: 'Excalidraw',
                svg: this.iconPack.icons.excalidraw,
            },
        ],
        coding: [
            {
                title: 'Javascript',
                svg: this.iconPack.icons.js,
            },
            {
                title: 'Typescript',
                svg: this.iconPack.icons.ts,
            },
            {
                title: 'Node JS',
                svg: this.iconPack.icons.nodejs,
            },
            {
                title: 'Express JS',
                svg: this.iconPack.icons.arrowRight,
            },
            {
                title: 'Mongo DB',
                svg: this.iconPack.icons.mongo,
            },
            {
                title: 'Angular',
                svg: this.iconPack.icons.angular,
            },
            {
                title: 'Ionic',
                svg: this.iconPack.icons.ionic,
            },
            {
                title: 'Capacitor',
                svg: this.iconPack.icons.capacitor,
            },
            {
                title: 'Cordova',
                svg: this.iconPack.icons.cordova,
            },
            {
                title: 'Tailwind',
                svg: this.iconPack.icons.tailwind,
            },
            {
                title: 'SCSS',
                svg: this.iconPack.icons.sass,
            },
            {
                title: 'Electron JS',
                svg: this.iconPack.icons.electron,
            },
            {
                title: 'PHP',
                svg: this.iconPack.icons.php,
            },
            {
                title: 'MySQL',
                svg: this.iconPack.icons.mysql,
            },
            {
                title: 'Java',
                svg: this.iconPack.icons.java,
            },
            {
                title: 'Swift',
                svg: this.iconPack.icons.swift,
            },
        ],
        tooling: [
            {
                title: 'GIT',
                svg: this.iconPack.icons.git,
            },
            {
                title: 'Github',
                svg: this.iconPack.icons.github,
            },
            {
                title: 'VSCode',
                svg: this.iconPack.icons.vscode,
            },
            {
                title: 'XCode',
                svg: this.iconPack.icons.xcode,
            },
            {
                title: 'ITerm',
                svg: this.iconPack.icons.iterm,
            },
            {
                title: 'ZSH',
                svg: this.iconPack.icons.arrowRight,
            },
            {
                title: 'Source Tree',
                svg: this.iconPack.icons.sourcetree,
            },
            {
                title: 'Robo 3T',
                svg: this.iconPack.icons.arrowRight,
            },
            {
                title: 'Google Cloud',
                svg: this.iconPack.icons.gcloud,
            },
            {
                title: 'AWS',
                svg: this.iconPack.icons.aws,
            },
            {
                title: 'Slack',
                svg: this.iconPack.icons.slack,
            },
            {
                title: 'Discord',
                svg: this.iconPack.icons.discord,
            },
            {
                title: 'Spotify',
                svg: this.iconPack.icons.spotify,
            },
        ],
        platform: [
            {
                title: 'IOS',
                svg: this.iconPack.icons.ios,
            },
            {
                title: 'Android',
                svg: this.iconPack.icons.android,
            },
            {
                title: 'Desktop',
                svg: this.iconPack.icons.desktop,
            },
        ],
    };

    public isBrowser: boolean;

    constructor(public iconPack: IconService, @Inject(PLATFORM_ID) platformId: any) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    ngOnInit(): void {}
}
