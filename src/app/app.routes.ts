import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OriginComponent } from './origin/origin.component';
import { RarityComponent } from './rarity/rarity.component';
import { CurrencyComponent } from './currency/currency.component';
import { SearchComponent } from './search/search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonpageComponent } from './commonpage/commonpage.component';
import { UncommonpageComponent } from './uncommonpage/uncommonpage.component';
import { RarepageComponent } from './rarepage/rarepage.component';
import { UltrararepageComponent } from './ultrararepage/ultrararepage.component';
import { LegendarypageComponent } from './legendarypage/legendarypage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


export const routes: Routes = [
    {'path': 'home', 'title': 'home', component: HomeComponent},
    {'path': 'origin', 'title': 'origin', component: OriginComponent},
    {'path': 'rarity', 'title': 'rarity', component: RarityComponent},
    {'path': 'currency', 'title': 'currency', component: CurrencyComponent},
    {'path': 'search', 'title': 'search', component: SearchComponent},
    {'path': 'dashboard', 'title': 'dashboard', component: DashboardComponent},
    {'path': '', 'redirectTo': '/home', 'pathMatch': 'full'},
    {'path': 'commonpage', 'title': 'commonpage', component: CommonpageComponent},
    {'path': 'uncommonpage', 'title': 'uncommonpage', component: UncommonpageComponent},
    {'path': 'rarepage', 'title': 'rarepage', component: RarepageComponent},
    {'path': 'ultrararepage', 'title': 'ultrararepage', component: UltrararepageComponent},
    {'path': 'legendarypage', 'title': 'legendarypage', component: LegendarypageComponent},
    {'path': '**', component: PagenotfoundComponent}, // Wildcard route for a 404 page
];
