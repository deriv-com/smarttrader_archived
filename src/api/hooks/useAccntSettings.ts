import useAPI from "./useAPI";

const useGetSettings=async ()=>{
    const {send} =useAPI()
    try{
        const data= await send('get_account_status')
        return data?.get_account_status;

    }
    catch(error){
        return {error}
    }

}

export default useGetSettings;