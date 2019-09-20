import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonPageComponent } from './pokemon-page.component';
import { PokemonService } from '../services/pokemon.service';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { PaginatorComponent } from '../common/components/paginator/paginator.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PokemonComponent', () => {
  let component: PokemonPageComponent;
  let fixture: ComponentFixture<PokemonPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PokemonPageComponent,
        PokemonDetailComponent,
        PaginatorComponent
      ],
      providers: [PokemonService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
