import { Router } from './router';

console.log('hello world');

const router = new Router({ ignoreTrailingSlash: true });

router.add('/', function() {
  console.log('root');
});
router.add('/browse', function() {
  console.log('browse');
});
router.add('/form/:id', function({ id }) {
  console.log('form', id);
});
router.add('/form/:id/pdf', function({ id }) {
  console.log('form/pdf', id);
});

router.startUrlListener();
