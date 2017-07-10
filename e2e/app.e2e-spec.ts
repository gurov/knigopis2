import { KnigopisAng2Page } from './app.po';

describe('knigopis-ang2 App', () => {
    let page: KnigopisAng2Page;

    beforeEach(() => {
        page = new KnigopisAng2Page();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('k works!');
    });
});
