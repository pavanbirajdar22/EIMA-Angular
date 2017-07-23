import { EIMANAVPage } from './app.po';

describe('eima-nav App', () => {
  let page: EIMANAVPage;

  beforeEach(() => {
    page = new EIMANAVPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
