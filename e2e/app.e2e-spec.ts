import { EpicerieRuseePage } from './app.po';

describe('epicerie-rusee App', () => {
  let page: EpicerieRuseePage;

  beforeEach(() => {
    page = new EpicerieRuseePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
