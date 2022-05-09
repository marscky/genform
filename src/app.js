export class App {
  constructor (routeView) {
    this.state = {};
    this.routeView = routeView;
    this.currentView = null;
  }

  use(view) {
    const renderHandler = function (params) {
      const v = new view({ app: this, params });
      if (this.currentView && this.currentView.beforeUnload) {
        this.currentView.beforeUnload();
      }
      this.routeView.innerHTML = v.render();
      this.currentView = v;

      if (v.onLoad) {
        v.onLoad();
      }
    };

    return renderHandler.bind(this);
  }
}
