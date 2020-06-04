function GetFiles(method,type,id){
	return sendRequest("GET",`https://express-kuku.herokuapp.com/${method}/?type=${type}&id=${id}`)
}
function PostFiles(method,arr){
	return sendRequest("POST",`https://express-kuku.herokuapp.com/${method}`,arr)
}


function sendRequest(met,url,body=null){
	return new Promise((resolve,reject)=>{
		const xhr= new XMLHttpRequest()
		xhr.open(met,url)
		xhr.responseType="json"
		xhr.setRequestHeader("Content-type",'application/json')
		xhr.onload=()=>{
			if(xhr.status >=400){
				reject(xhr.response)
			}else{
				resolve(xhr.response)
			}
		}
		xhr.onerror=()=>{
			reject(xhr.response)
		}

		xhr.send( JSON.stringify(body) )
	})

}

