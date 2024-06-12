import { Routes } from '@angular/router';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { JournalComponent } from './pages/journal/journal.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: 'calculator', component: CalculatorComponent },
    { path: 'expenses', component: ExpensesComponent },
    { path: 'journal', component: JournalComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard' },
];