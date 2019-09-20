import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('pageSize')
  private pageSize: number;

  // tslint:disable-next-line: no-input-rename
  @Input('count')
  private count: number;

  private page = 0;

  @Output()
  pageChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  firstPage() {
    this.page = 0;
    this.emit();
  }

  lastPage() {
    this.page = this.lastPageNumber();
    this.emit();
  }

  previousPage() {
    this.page--;
    this.emit();
  }

  nextPage() {
    this.page++;
    this.emit();
  }


  hasNext(): boolean {
    return this.page < this.lastPageNumber();
  }

  hasPrevious(): boolean {
    return this.page > 0;
  }

  private lastPageNumber(): number {
    return Math.ceil(this.count / this.pageSize) - 1;
  }

  private emit() {
    this.pageChanged.emit({ offset: this.page * this.pageSize, limit: this.pageSize });
  }
}
