import { CursoAngular4CliPage } from './app.po';

describe('curso-angular4-cli App', () => {
  let page: CursoAngular4CliPage;

  beforeEach(() => {
    page = new CursoAngular4CliPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
