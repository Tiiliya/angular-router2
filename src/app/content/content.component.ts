import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  pageTitle: string = '';
  pageDesc: string = '';
  constructor(public router:Router) {
    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        if(event.url == '/dashboard'){
          this.pageTitle = '首页'
        }else if(event.url.startsWith('/stock')){
          this.pageTitle = '股票信息管理'
        }
      })
   }

  ngOnInit() {
    this.router
  }

}


