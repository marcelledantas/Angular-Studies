
Lifecyle

1a phase ngOnChanges: it can be called multiple times. It's executed right at the start, when a new component is created. But, it's always called, whenever one of our bound input properties changes (properties declared with @Input), wherever this properties receives new values.

2a phase ngOnInit: it's executed after the component is initialized, the properties can be accessed and initialized. ngOnInit will run after the constructor. 

3a phase ngDoCheck: called during every change detection run.

4a ngAfterContentInit: called after the ng-content has been initialized.

5a ngAfterContentChecked: called everytime the projected content has been checked 

6a ngAfterViewInit: called after the component's view (and child views) has been initialized.

6a ngOnDestroy: called once the component is about to be destroyed.


