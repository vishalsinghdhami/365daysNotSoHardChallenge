class JokeComponent {
    @Input('joke') data: Joke;
  
    constructor() {
      console.log(`new - data is ${this.data}`);
    }
  
    ngOnChanges() {
      console.log(`ngOnChanges - data is ${this.data}`);
    }
  
    ngOnInit() {
      console.log(`ngOnInit  - data is ${this.data}`);
    }
  
    ngDoCheck() {
      console.log("ngDoCheck")
    }
  
    ngAfterContentInit() {
      console.log("ngAfterContentInit");
    }
  
    ngAfterContentChecked() {
      console.log("ngAfterContentChecked");
    }
  
    ngAfterViewInit() {
      console.log("ngAfterViewInit");
    }
  
    ngAfterViewChecked() {
      console.log("ngAfterViewChecked");
    }
  
    ngOnDestroy() {
      console.log("ngOnDestroy");
    }
  }
  //order will be
  /*
new - data is undefined
->
ngOnChanges - data is [object Object]
->
ngOnInit  - data is [object Object]
->
ngDoCheck
->
ngAfterContentInit
->
ngAfterContentChecked
->
ngAfterViewInit
->
ngAfterViewChecked

->
ngOnDestroy if component closed
*/