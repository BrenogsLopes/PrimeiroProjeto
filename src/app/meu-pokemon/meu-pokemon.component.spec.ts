import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPokemonComponent } from './meu-pokemon.component';

describe('MeuPokemonComponent', () => {
  let component: MeuPokemonComponent;
  let fixture: ComponentFixture<MeuPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
