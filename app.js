export class App {
  constructor (routeView) {
    this.state = {};
    this.routeView = routeView;
    this.currentView = null;
  }

  use(view) {
    const renderHandler = function (params) {
      const v = new view({ app: this, params });
      this.routeView.innerHTML = v.render();
      this.currentView = v;
      if (v.onLoad) {
        v.onLoad();
      }
    };

    return renderHandler.bind(this);
  }
}
