const obj = {
  a: 1,
  b: "Hello, World!",
  c: true,
  d: null,
  e: undefined,
  f: {
    g: 4,
    h: "Hello, World!",
    i: true,
    j: null,
  },
};

/* デフォルト */
performance.mark("start");
for (let i = 0; i < 1000000; i++) {
  JSON.stringify(obj);
}
performance.mark("end");
performance.measure("デフォルト", "start", "end");
console.log(performance.getEntriesByType("measure"));
performance.clearMarks();
performance.clearMeasures();

/* space あり */
performance.mark("start");
for (let i = 0; i < 1000000; i++) {
  JSON.stringify(obj, null, 2);
}
performance.mark("end");
performance.measure("space あり", "start", "end");
console.log(performance.getEntriesByType("measure"));
performance.clearMarks();
performance.clearMeasures();

/* replacer あり */
function replacer(key, value) {
  // プロパティをフィルターする
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}
performance.mark("start");
for (let i = 0; i < 1000000; i++) {
  JSON.stringify(obj, replacer);
}
performance.mark("end");
performance.measure("replacer あり", "start", "end");
console.log(performance.getEntriesByType("measure"));
performance.clearMarks();
performance.clearMeasures();

/* toJSON あり */
const objWithToJSON = {
  a: 1,
  b: 2,
  c: 3,
  toJSON: () => {
    return Object.entries(obj).map(([key, value]) => {
      return {
        [key + "+ toJSON"]: value,
      };
    });
  },
};
performance.mark("start");
for (let i = 0; i < 1000000; i++) {
  JSON.stringify(obj, replacer);
}
performance.mark("end");
performance.measure("toJSON あり", "start", "end");
console.log(performance.getEntriesByType("measure"));
performance.clearMarks();
performance.clearMeasures();

/**
 * 実行結果 (MacBook Pro 14, M4 Pro, 48GB)
[
  PerformanceMeasure {
    name: 'デフォルト',
    entryType: 'measure',
    startTime: 101.182791,
    duration: 87.63783400000001,
    detail: null
  }
]
[
  PerformanceMeasure {
    name: 'space あり',
    entryType: 'measure',
    startTime: 197.988,
    duration: 219.23170800000003,
    detail: null
  }
]
[
  PerformanceMeasure {
    name: 'replacer あり',
    entryType: 'measure',
    startTime: 417.451458,
    duration: 414.54379200000005,
    detail: null
  }
]
[
  PerformanceMeasure {
    name: 'toJSON あり',
    entryType: 'measure',
    startTime: 832.196541,
    duration: 412.9703749999999,
    detail: null
  }
]
 */
