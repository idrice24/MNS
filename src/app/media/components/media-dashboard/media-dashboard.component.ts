import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/shared/models/image';
import { PhotoService } from 'src/app/shared/services/photo.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-media-dashboard',
  templateUrl: './media-dashboard.component.html',
  styleUrls: ['./media-dashboard.component.scss']
})
export class MediaDashboardComponent implements OnInit {

  items;

  images: Image[];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  constructor(private photoService: PhotoService,
              private titleService: Title // Inject to set document title on  browser
    ) { }

  ngOnInit(): void {

    this.photoService.getImages().subscribe(photos => this.images = photos);
    this.titleService.setTitle('MNS237 - Media Dashboard'); // Adding the title Home to the MNS237  main Title

  }

}
