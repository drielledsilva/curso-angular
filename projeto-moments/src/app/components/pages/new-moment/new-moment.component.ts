import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {
  btnText = 'Compartilhar!';

  moment: Moment | undefined;

  constructor(private momentService: MomentService,
    private messagesService: MessagesService,
    private router: Router
    ) {}

  ngOnInit(): void {
  }

  async createHandler(moment: Moment) {
    const formData = new FormData()

   // formData.append("title", moment.title);
    //formData.append("description", moment.description);

    if(moment.image) {
      //formData.append("image", moment.image);
      this.moment = {
        title: moment.title,
        description: moment.description,
        image: moment.image
      };
    } else {
      this.moment = {
        title: moment.title,
        description: moment.description
      };
    }

    console.log(this.moment)
    await this.momentService.createMoment(this.moment).subscribe();

    this.messagesService.add('Momento adicionado com sucesso!');

    this.router.navigate(['/']);
  }

}
