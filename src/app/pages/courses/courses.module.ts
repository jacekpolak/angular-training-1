﻿// angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// routes
import { routes } from './courses.routes';

// custom components
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { EditCourseComponent } from './edit/edit.component';
import { SearchboxModule } from '../../components';
import { InputDateModule } from '../../components';
import { Md2Module }  from 'md2';
import { FreshDirective } from './../../directives/fresh.directive';
import { CourseService } from './../../services/course.service';

// custom pipes
import { DurationPipe } from './../../pipes';
import { OrderByPipe } from './../../pipes';
import { SearchPipe } from './../../pipes';

@NgModule({
	declarations: [
		CoursesComponent,
		CourseComponent,
		EditCourseComponent,
		FreshDirective,
		DurationPipe,
		OrderByPipe
	],
	imports: [
		routes,
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		SearchboxModule,
		InputDateModule,
        Md2Module.forRoot()
	],
	providers: [CourseService,SearchPipe]
})
export class CoursesModule {
	constructor() {
	}
}
