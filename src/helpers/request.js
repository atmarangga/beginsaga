function randomLongResolve() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 5000);
  });
}

export async function callService(method, params, url) {
  console.log('start ....');
  const result = await randomLongResolve();
  console.log('done...');
  return result;
}
