# promise-anyhow

> ensure promise all won&#39;t break if any reject happens

## 安装

```bash
  npm i promise-anyhow -S
```

## 使用

```javascript
  import anyhow from 'promise-anyhow'
   
  (async ()=>{
    const {resolves, rejects} = await anyhow([Promise.resolve(1), Promise.reject(2)]);
    console.log(resolves); // [1]
    console.log(rejects); // [-1]
  })();
```

## ChangeLog

## 0.0.1 (2018-05-07)

* feat: initial commit

## 作者
Ailun She

