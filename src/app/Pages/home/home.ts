import { Component } from '@angular/core';
import { Cover } from '../../Components/cover/cover';
import { Info } from '../../Components/info/info';
import { Community } from '../../Components/community/community';
import { AcademicProgram } from '../../Components/academic-program/academic-program';
import { GetInTouch } from '../../Components/get-in-touch/get-in-touch';
import { NewsEvents } from '../../Components/news-events/news-events';

@Component({
  selector: 'app-home',
  imports: [Cover, Info, Community, AcademicProgram, NewsEvents, GetInTouch],
  templateUrl: './home.html',
})
export class Home {}
