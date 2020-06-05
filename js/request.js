function GetFiles(method,type,id){
	return sendRequest("GET",`http://localhost:1000/knife/${method}/?type=${type}&id=${id}`)
}
function PostFiles(method,arr){
	return sendRequest("POST",`http://localhost:1000/knife/${method}`,arr)
}


let sendRequest= async (met,url,body=null)=>{
	let options={}
	if(body===null){
		options={
			method:met
		}
	}else{
		options={
			method:met
			,body:JSON.stringify(body)
			,header:{}
		}
	}
	
	return fetch(url,options)
						.then(
							res=>res.json()

							)

}

