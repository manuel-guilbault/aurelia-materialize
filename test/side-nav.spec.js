import $ from 'jquery';
import {MaterialSideNav} from '../src/side-nav';

describe('side-nav', () => {

  var anchor, sideNav, callOptions;

  beforeEach(() => {
    spyOn($.fn, 'sideNav');
    anchor = document.createElement('a');
    sideNav = new MaterialSideNav(anchor);
  });

  function expectSideNavCallWithOptions(expectedOptions) {
    expect($.fn.sideNav.calls.count()).toEqual(1);

    var calledOptions = $.fn.sideNav.calls.argsFor(0)[0];
    for (var option in expectedOptions) {
      expect(calledOptions[option]).toEqual(expectedOptions[option]);
    }
  }

  it('should create sideNav upon attached', () => {
    sideNav.attached();
    
    expectSideNavCallWithOptions({});
  });

  it('should pass options to sideNav upon attached', () => {
    sideNav.menuWidth = 600;
    sideNav.edge = 'right';
    sideNav.closeOnClick = false;

    sideNav.attached();
    
    expectSideNavCallWithOptions({
      menuWidth: 600,
      edge: 'right',
      closeOnClick: false
    });
  });
});