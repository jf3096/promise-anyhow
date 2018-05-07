const successHandler = result => ({payload: result, resolved: true});
const catchHandler = error => ({payload: error, resolved: false});


export interface IAnyhowResult {
  resolves: Array<Promise<any>>,
  rejects: Array<Promise<any>>
}

export default function anyhow(promises): Promise<IAnyhowResult> {
  return Promise.all(promises.map(result => result.then(successHandler).catch(catchHandler)))
    .then(results => {
        return results.reduce(
          (results: IAnyhowResult, {payload, resolved}) => {
            if (resolved) {
              results.resolves.push(payload);
            } else {
              results.rejects.push(payload);
            }
            return results;
          },
          {resolves: [], rejects: []} as IAnyhowResult
        ) as IAnyhowResult;
      }
    );
}
