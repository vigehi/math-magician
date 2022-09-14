const report = (sent) => {
  if (sent && sent instanceof Function) {
    import('web-vitals').then(({
      getCLS, getFID, getFCP, getLCP, getTTFB,
    }) => {
      getCLS(sent);
      getFID(sent);
      getFCP(sent);
      getLCP(sent);
      getTTFB(sent);
    });
  }
};

export default report;
