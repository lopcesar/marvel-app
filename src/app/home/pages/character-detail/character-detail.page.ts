import { CharacterI } from '@/app/core/interfaces/character.interface';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
  standalone: false
})
export class CharacterDetailPage implements OnInit {

  private readonly router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  character!: CharacterI;

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.character = navigation?.extras.state['character'];
      console.log(this.character);
      
    }

    
    if (!this.character) {
      this.router.navigate(['/']);
    }
  }
  
  goBack() {
    this.router.navigate(['character-list']);

  }

}
