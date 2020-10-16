
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { AppUser } from './shared/models/app-user';
import { AppVideo } from './shared/models/app-video';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 11, fName: 'Ghis', lName: 'Dr Nice', email: 'Ghis@yahoo.com', password: 'password1', isAdmin: true },
      { id: 12, fName: 'Bombasto', lName: 'Dr Nice', email: 'Bombasto@yahoo.com', password: 'password1', isAdmin: false },
      { id: 13, fName: 'Zoe', lName: 'Dr Nice', email: 'Zoe@yahoo.com', password: 'password1', isAdmin: false },

    ];

    const videos = [
      { id: 1, name: 'CR goals', publishedDate: '2020/10/13', title: 'CR7 First Goal in UV', createdDate: '2020/10/10' },
      { id: 2, name: 'CR goals', publishedDate: '2020/10/13', title: 'CR7 First Goal in UV', createdDate: '2020/10/10' },
      { id: 3, name: 'CR goals', publishedDate: '2020/10/13', title: 'CR7 First Goal in UV', createdDate: '2020/10/10' },
      { id: 4, name: 'CR goals', publishedDate: '2020/10/13', title: 'CR7 First Goal in UV', createdDate: '2020/10/10' },
    ];
    const blog = [
      {
        _embedded: {
          blogs: [{
            content: 'hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... ..hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...',
            createdDate: '2013-03-02T16:41:45Z',
            id: 2,
            imageUrl: 'assets/img/aboutus.jpg',
            publishedDate: '2020-03-02T16:41:00Z',
            title: 'third topic',
            updatedDate: '2020-03-02T16:41:45Z',
            summary: 'this is the second blog...hi... this is the second blog.is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the'
          }, {
            content: 'hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... ..hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...',
            createdDate: '2013-03-02T16:41:45Z',
            id: 3,
            imageUrl: 'assets/img/aboutus.jpg',
            publishedDate: '2020-03-02T16:41:00Z',
            title: 'third topic',
            updatedDate: '2020-03-02T16:41:45Z',
            summary: 'this is the second blog...hi... this is the second blog.is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the'
          },
          {
            content: 'hi... this is the third blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... ..hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...',
            createdDate: '2013-03-02T16:41:45Z',
            id: 3,
            imageUrl: 'assets/img/CMR5.jpg',
            publishedDate: '2020-03-02T16:41:00Z',
            title: 'third topic',
            updatedDate: '2020-03-02T16:41:45Z',
            summary: 'this is the second blog...hi... this is the second blog.is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the'
          },
          {
            content: 'hi... this is the fouth blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... ..hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...',
            createdDate: '2013-03-02T16:41:45Z',
            id: 3,
            imageUrl: 'assets/img/CMR7.jpg',
            publishedDate: '2020-03-02T16:41:00Z',
            title: 'third topic',
            updatedDate: '2020-03-02T16:41:45Z',
            summary: 'this is the second blog...hi... this is the second blog.is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the'
          }]
        }
      }
    ];

    // Important!! Name of array is the name of in api url --> api/users
    return { users, blog };
  }


}
