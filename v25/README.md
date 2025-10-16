# Node.js v25 の主な変更点に関するサンプルコード

> [!NOTE]
>
> pnpm を用いて実行してください。

JSON.stringify のパフォーマンス測定

```
$ pnpm perf-jsonstringify
```

`--allow-net` フラグを用いたネットワークアクセス許可。Ctrl + C など用いて終了してください。

```
pnpm allow-net
```

`--allow-net`を付けずに実行した場合のエラー

```
pnpm allow-net-fail
```

`sessionStorage`のサンプルコード

```
pnpmsessionstorage
```

`localStorage`のサンプルコード

```
pnpm localstorage
```

`ErrorEvent`のサンプルコード

```
pnpm errorevent
```

`ErrorEvent` を継承した `CustomErrorEvent`

```
pnpm customerrorevent
```
