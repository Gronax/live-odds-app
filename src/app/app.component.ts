import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Country } from '../model/country';
import { League } from '../model/league';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}
  apiKey = '026a195450047876ac80143ee435f33de4a5aa673d3dfd58244c95dd6aafca3f';
  selectedCountry: Country;
  selectedLeague: League;
  countries: any;
  leagues: any;
  title = 'my-app';

  ngOnInit() {
    this.httpClient.get('https://apifootball.com/api/?action=get_countries&APIkey=' + this.apiKey)
    .subscribe(
      (res: Response) => {
        // const data = res.json();
        console.log(res);
        this.countries = res;
      }
    );
  }

  // onCountrySelect(country: Country): void {
  //   this.selectedCountry = country;

  //   this.httpClient.get('https://apifootball.com/api/?action=get_leagues&country_id=' + country.country_id + '&APIkey=' + this.apiKey)
  //   .subscribe(
  //     (res: Response) => {
  //       console.log(res);
  //       this.leagues = res;
  //     }
  //   );
  // }

  // onLeagueSelect(league: League): void {
  //   this.selectedLeague = league;

  //   this.httpClient.get('https://apifootball.com/api/?action=get_standings&league_id=' + league.league_id + '&APIkey=' + this.apiKey)
  //   .subscribe(
  //     (res: Response) => {
  //       console.log(res);
  //       this.standings = res;
  //     }
  //   );
  // }
}
