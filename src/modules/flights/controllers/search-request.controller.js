import {RequestHandler} from '../../../core/utils'

export default async function SearchRequest(req,res){
	const _Body = req.body
	localStorage.clear()
	localStorage.setItem('selected_result', JSON.stringify(_Body))
	
	return RequestHandler.Success({ res, message:"Sucess" })
}