import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  language = 'fr';
  flag = '';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fr');
    translate.use('fr');
    this.setFlag();
  }

  changeLanguage(): void {
    this.translate.use(this.language);
    this.setFlag();
  }

  private setFlag(): void {
    this.translate.get('app.flag').subscribe((flag: string) => {
      this.flag = flag;
    });
  }
}
