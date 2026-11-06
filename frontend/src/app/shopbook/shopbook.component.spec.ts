import {ComponentFixture, TestBed} from '@angular/core/testing';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {AppModule} from '../app.module';
import {ShopbookComponent} from './shopbook.component';

describe('ShopbookComponent', () => {
  let component: ShopbookComponent;
  let fixture: ComponentFixture<ShopbookComponent>;

  beforeEach(async () => {
    // In-memory localStorage so the spec does not depend on the runtime (jsdom vs. Node web storage).
    const store = new Map<string, string>();
    vi.stubGlobal('localStorage', {
      getItem: (key: string) => store.get(key) ?? null,
      setItem: (key: string, value: string) => store.set(key, String(value)),
      removeItem: (key: string) => store.delete(key),
      clear: () => store.clear()
    });

    await TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopbookComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  afterEach(() => vi.unstubAllGlobals());

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
