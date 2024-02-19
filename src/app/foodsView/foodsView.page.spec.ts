import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodsViewPage } from './foodsView.page';

describe('FoodsViewPage', () => {
  let component: FoodsViewPage;
  let fixture: ComponentFixture<FoodsViewPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodsViewPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodsViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
