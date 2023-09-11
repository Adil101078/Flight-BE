import {RequestHandler} from '../../../core/utils'

export default async function SearchRequest(req,res){
	const _Body = req.body
	let session = req.session
	session.result = _Body
	
	return RequestHandler.Success({ res, message:"Sucess" })
}