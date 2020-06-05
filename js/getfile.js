
function GetFiles(file,type,id){
	return sendRequest("GET",`http://localhost:5000/knife/${file}/?type=${type}&id=${id}`)
}
