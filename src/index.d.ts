export interface IAnyhowResult {
    resolves: Array<Promise<any>>;
    rejects: Array<Promise<any>>;
}
export default function anyhow(promises: any): Promise<IAnyhowResult>;
