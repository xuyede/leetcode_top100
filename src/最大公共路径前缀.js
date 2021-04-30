// 求最大公共路径前缀，['aa/bb/sd', 'aa/bb/wwewer', 'aa/bb/ddfff'] => 'aa/bb'
function maxCommonPath(paths) {
  const originItem = paths.shift().split('/');
  let maxPath = '';
  let lastPath = '';

  for (let i = 0; i < originItem.length; i ++ ) {
    const o = originItem[i];
    lastPath = 
      i == originItem.length - 1 
        ? `${lastPath}${o}` 
        : `${lastPath}${o}/`;

    if (paths.every(p => p.indexOf(lastPath) > -1)) {
      maxPath = lastPath;
    } else {
      return maxPath;
    }
  }

  return maxPath;
}

console.log(
  maxCommonPath(['aa/bb', 'aa/bb/ccc/wwewer', 'aa/bb/ccc/ddfff'])
)