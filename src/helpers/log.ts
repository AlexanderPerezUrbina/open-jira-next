const log = (message?: any, ...optionalParams: any[]) => {
    if (process.env.NODE_ENV !== 'development') return;
    console.log(message, ...optionalParams);
};

export default log;
