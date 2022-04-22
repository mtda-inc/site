import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IconService } from '../../services/icon.service';

@Component({
    selector: 'section-article',
    templateUrl: './section-article.component.html',
    styleUrls: ['./section-article.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionArticleComponent implements OnInit {
    public articles: any[] = [
        {
            title: 'Deploy an Angular Application to Firebase Hosting with Github Actions',
            desc: 'Github Actions is a CI/CD tool that allows users to automate their project workflow, you can define certain actions to run when code is…',
            created: 'Published on Jan 12',
            time: '5 min read',
            link: 'https://mtda.medium.com/deploy-an-angular-application-to-firebase-hosting-with-github-actions-6a9735e14660',
            image: 'https://miro.medium.com/max/1400/1*njs8MaUUaU5wBVRbTKAEng.gif',
            width: "719",
            height: "392.3",
        },
        {
            title: 'Force https/ssl and www on a Node JS application running on Google App Engine/Flex',
            desc: 'Found myself searching for hours on how to redirect http traffic to https/ssl and non-www to www on a GAE / flex environment with a Node JS…',
            created: 'Published on Mar 24',
            time: '3 min read',
            link: 'https://mtda.medium.com/force-https-ssl-and-non-www-to-www-on-a-node-js-application-running-on-google-app-engine-flex-fce54ea924c5',
            image: 'https://miro.medium.com/max/1400/1*HRxPCwPE__2F1IElvyu7Dw.png',
            width: "719",
            height: "392.3",
        },
    ];

    constructor(public iconPack: IconService) {}

    ngOnInit(): void {}
}
