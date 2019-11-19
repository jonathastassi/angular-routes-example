import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ElectronicDetailComponent } from './electronic-detail.component';


describe('EletronicDetailComponent', () => {
  let component: ElectronicDetailComponent;
  let fixture: ComponentFixture<ElectronicDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
