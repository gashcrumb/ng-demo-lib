import { NgDemoLibPage } from './app.po';

describe('ng-demo-lib App', function() {
  let page: NgDemoLibPage;

  beforeEach(() => {
    page = new NgDemoLibPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('demo works!');
  });
});
