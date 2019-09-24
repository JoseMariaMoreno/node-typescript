/**
 * Abstract module to be overrided for custom app functionalities
 */
export class AbstractModule {
  
  private _parent: any;
  public id: string = '';

  /**
   * 
   * @param {any} parent Parent module or main app 
   */
  constructor( id: string, parent: any ) {
    this.id = id;
    this._parent = parent;
    this._parent.getLogger().info( this.id, 'module constructor' );
  }

  getParent(): any {
    return this._parent;
  }

  getLogger(): any {
    return this.getParent().getLogger();
  }
}