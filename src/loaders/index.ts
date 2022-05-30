import expressLoader from './express';

let init = async (app: any) => {
    await expressLoader.init(app);
}

export default { init };