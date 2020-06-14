import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';

  constructor(private service: PhotoService,
    private activatedRout: ActivatedRoute
    ) {}
  
  ngOnInit() {
    
    const userName = this.activatedRout.snapshot.params.userName;

    this.service
      .listFromUser(userName)
      .subscribe(photos => this.photos = photos);
  }

}
