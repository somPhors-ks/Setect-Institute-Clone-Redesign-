import { Component } from '@angular/core';
import { BachelorDegree } from '../../Components/bachelor-degree/bachelor-degree';
import { MasterDegree } from '../../Components/master-degree/master-degree';
import { BridgingCourse } from '../../Components/bridging-course/bridging-course';
import { AssociateDegree } from '../../Components/associate-degree/associate-degree';

@Component({
  selector: 'app-academic-page',
  imports: [BachelorDegree, MasterDegree, BridgingCourse, AssociateDegree],
  templateUrl: './academic-page.html',
})
export class AcademicPage {}
