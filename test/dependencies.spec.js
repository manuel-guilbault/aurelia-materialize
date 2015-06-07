describe('Dependencies config', () => {
  it('should load jQuery', () => {
    expect(jQuery).toBeDefined();
  });

  it('should register Materialize jQuery plugins', () => {
    expect($('div').sideNav).toBeDefined();
  });

  it('should register Materialize global object', () => {
    expect(Materialize).toBeDefined();
  });

  it('should register Materialize css', () => {
    var script = $('link').filter((i, e) => {
      return e.href.indexOf('materialize.css') >= 0;
    });
    expect(script.length).toBe(1);
  });
});