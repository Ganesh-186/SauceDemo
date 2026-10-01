export const logger = {
    info(message){
        console.log(`[INFO]: ${message}`);
    },
    error(message){
        console.log(`[ERROR]: ${message}`);
    },
    warn:(message)=>{
        console.warn(`[WARN]: ${message}`)
    }
}