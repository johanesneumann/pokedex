import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { PokemonService } from './services/pokemon.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeaderComponent } from './common/pokemon-components/header/header.component';
import { FooterComponent } from './common/pokemon-components/footer/footer.component';
import { PaginatorComponent } from './common/pokemon-components/paginator/paginator.component';
import { PokemonPageComponent } from './api-pokemon/pokemon-page/pokemon-page.component';
import { PokemonDetailComponent } from './common/pokemon-components/pokemon-detail/pokemon-detail.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        PokemonPageComponent,
        PokemonDetailComponent,
        PaginatorComponent,
        FooterComponent,
        HeaderComponent
      ],
      providers: [PokemonService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


});
