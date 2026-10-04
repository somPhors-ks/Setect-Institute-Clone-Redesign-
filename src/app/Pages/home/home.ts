import { Component } from '@angular/core';
import { Cover } from '../../Components/cover/cover';
import { Info } from '../../Components/info/info';
import { Community } from '../../Components/community/community';
import { AcademicProgram } from '../../Components/academic-program/academic-program';
import { NewEvents } from '../../Components/new-events/new-events';
import { GetInTouch } from '../../Components/get-in-touch/get-in-touch';
import { Footer } from '../../Components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Cover, Info, Community, AcademicProgram, NewEvents, GetInTouch, Footer],
  templateUrl: './home.html',
})
export class Home {}
