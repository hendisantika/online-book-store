import {ComponentFixture, TestBed} from '@angular/core/testing';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {Book} from '../../../model/book';
import {AppModule} from '../../../app.module';
import {ViewbookComponent} from './viewbook.component';

describe('ViewbookComponent', () => {
  let component: ViewbookComponent;
  let fixture: ComponentFixture<ViewbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewbookComponent);
    component = fixture.componentInstance;
    component.book = new Book();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
