import { CharacterI } from '@/app/core/interfaces/character.interface';
import { MarvelService } from '@/app/core/service/marvel/marvel.service';
import { SpinnerService } from '@/app/shared/sppiner/spinner.service';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
  standalone: false,
})
export class CharactersPage {
  private readonly service = inject(MarvelService);
  private readonly router = inject(Router);
  private readonly spinner = inject(SpinnerService);

  characterList: CharacterI[] = [];
  ionViewWillEnter() {
    this.loadCharacters();
  }

  private loadCharacters() {
    this.spinner.toggleLoading(true);

    this.service.getCharacters().subscribe((response) => {
      this.characterList = response.map((character: CharacterI) => {
        return {
          name: character.name,
          thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
          comics: character.comics.available,
          series: character.series.available,
          stories: character.stories.available,
        };
      });
      this.spinner.toggleLoading(false);
      console.log(this.characterList);
    });
  }

  openCharacter(character: CharacterI) {
    console.log('Open character:', character);
    this.router.navigate(['character-detail'], {
      state: { character },
    });
  }
}
