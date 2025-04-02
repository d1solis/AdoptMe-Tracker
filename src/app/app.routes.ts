import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OriginComponent } from './origin/origin.component';
import { RarityComponent } from './rarity/rarity.component';
import { CurrencyComponent } from './currency/currency.component';
import { SearchComponent } from './search/search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


export const routes: Routes = [
    {'path': 'home', 'title': 'home', component: HomeComponent},
    {'path': 'origin', 'title': 'origin', component: OriginComponent},
    {'path': 'rarity', 'title': 'rarity', component: RarityComponent},
    {'path': 'currency', 'title': 'currency', component: CurrencyComponent},
    {'path': 'search', 'title': 'search', component: SearchComponent},
    {'path': '', 'redirectTo': '/home', 'pathMatch': 'full'},
    {'path': '**', component: PagenotfoundComponent}, // Wildcard route for a 404 page

];
