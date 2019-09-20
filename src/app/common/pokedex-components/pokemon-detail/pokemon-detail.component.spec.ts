import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailComponent } from './pokemon-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PaginatorComponent } from '../paginator/paginator.component';

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ PokemonDetailComponent, PaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
