import { Router } from './router';
import { App } from './app';
import { FormView } from './views/form-view';

const router = new Router();
const app = new App(document.getElementById('page'));

router.redirect('/', '/new');

router.add('/new', app.use(FormView));
router.add('/browse', function() {
  console.log('browse');
});
router.add('/form/:id', function({ id }) {
  console.log('form', id);
});
router.add('/form/:id/pdf', function({ id }) {
  console.log('form/pdf', id);
});

router.start();
