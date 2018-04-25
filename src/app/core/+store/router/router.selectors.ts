import { createFeatureSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';
import {RouterStateSnapshot} from "@angular/router";


export const getRouterState = createFeatureSelector<{state: RouterStateSnapshot}>('router');
