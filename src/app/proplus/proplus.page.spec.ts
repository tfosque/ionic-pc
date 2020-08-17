import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProplusPage } from './proplus.page';

describe('ProplusPage', () => {
  let component: ProplusPage;
  let fixture: ComponentFixture<ProplusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProplusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProplusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
