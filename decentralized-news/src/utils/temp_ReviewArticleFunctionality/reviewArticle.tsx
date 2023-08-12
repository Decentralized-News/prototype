import { writeContract } from 'wagmi/actions';
import { useAccount,useContractRead } from 'wagmi';

import { DECENTNEWS__ADDRESS } from "../../utils/constants";
import DecentnewsABI from "../../utils/DecentNewsAbi.json"

//Within func component:
const { address } = useAccount()
const [assignedArticle, setAssignedArticle] = useState("");
const [vote, setVote] = useState(false);
//@ts-ignore
const { data, isError, isLoading } = useContractRead({
    address: DECENTNEWS__ADDRESS,
    abi: DecentnewsABI.abi,
    functionName: "getAssignedArticle",
    args: [address],
    onSuccess(data) {
      console.log(data)
      //@todo is this correct
      setAssignedArticle(data)
    },
    onError(error) {
      console.log(error)
    },
  })

const requestReview = async () => {
    try{
        const { hash } = await writeContract({
            account: address,
            address: DECENTNEWS__ADDRESS,
            abi: DecentnewsABI.abi,
            functionName: "createArticle",
            args: [],
        });
        console.log(hash);
    }catch(err){
        console.error(err);
    }
}

const submitArticleVote = async () => {
        try{
            const { hash } = await writeContract({
                account: address,
                address: DECENTNEWS__ADDRESS,
                abi: DecentnewsABI.abi,
                functionName: "submitVote",
                args: [vote],
            });
            console.log(hash);
        }catch(err){
            console.error(err);
        }
}