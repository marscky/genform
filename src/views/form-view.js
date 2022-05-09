export class FormView {
  constructor(state={}) {
    this.state = state;
  }
  render() {
    const params = this.state.params;
    return '<h1>form</h1>' + (params ? 'id: '+params.id : 'new form');
  }
  onLoad() {
    console.log('form loaded');
  }
}
