import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  search = false;

  @ViewChild('searchInput', {static: true}) searchInput!: ElementRef;

  constructor( private router: Router ) {
  }

  ngOnInit(): void {
    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      /* get value */
      map((event: any) => {
        return event.target.value;
      }),
      filter((res: any) => res.length > 2),
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe((text: string) => {
      this.router.navigate(['/search', text])
    })    
  }

  showSearch() {
    this.search = !this.search;
    /* focus element hidden */
    setTimeout(() => {
      this.searchInput.nativeElement.focus();
    }, 0);
  }

}
