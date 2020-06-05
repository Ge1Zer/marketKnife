let getAction=()=>{

//==============================================================================>
//отслеживает положение скрола
	window.addEventListener('scroll',()=>{
  	const scrollable=document.documentElement.scrollWidth - window.innerWidth
  	const scrolled=window.scrollX

  	if(Math.ceil(scrolled)===scrollable){
  		//когда на ходится в положении каталог
			document.querySelector('.co').classList.add('disen');
			document.querySelector('.ho').classList.remove('disen');
			document.querySelector('.menu').classList.remove('disen');

  	}
  		if(Math.ceil(scrolled)===0){
  		//когда на ходится в положении home
			document.querySelector('.co').classList.remove('disen');
			document.querySelector('.ho').classList.add('disen');
			document.querySelector('.menu').classList.add('disen');	
	
  	}
  })
//====================================================>


//====================================================>
//основные эвенты кнопок перелистывания экрана
document.querySelector('.ho').addEventListener('click',()=>{
	window.scroll(0,0)
})

document.querySelector('.co').addEventListener('click',()=>{	
	window.scroll(document.querySelector('.home').clientWidth+1,0)	
	
})

	
document.querySelector('.img_ex').addEventListener('click',()=>{
		document.querySelector('.item_knife_only').classList.toggle('disen');			
		document.querySelector('body').classList.toggle('over_hiden');				
		document.querySelector('.ho').classList.toggle('disen');
		document.querySelector('.menu').classList.toggle('disen')
})
//==================================================================>	



//==================================================================>	
	//сброс всех список менюшки по клике на любое место каталога
	document.querySelector('.catalog').addEventListener('click',()=>{
		document.querySelectorAll('.listItemMenu').forEach(i=>{
			i.classList.add('disen')
		})
	})

}
//======================================================================>



//======================================================================>
// добавление в список куков element
let actionClick=()=>{		
	
	document.querySelector('.acti_but').addEventListener('click',(event)=>{

		let obj={'type':`${event.target.attributes['data-type'].value}`,'id':`${event.target.attributes['data-id'].value}`}
		let arr=document.cookie && JSON.parse(document.cookie.split('produkt:')[1])
		

		if(!document.cookie){
			document.cookie=`produkt:[${JSON.stringify(obj)}]; max-age=3600`
		}else if(arr.length<event.target.attributes['data-stock'].value){
			arr.push(obj)
			document.cookie=`produkt:${JSON.stringify(arr)}; max-age=3600`
		}
	})
}
//====================================================================>
//====================================================================>
//====================================================================>
//====================================================================>
let eventADDKnife=(knife)=>{
	for (let i=0;i<knife.length;i++) {
			knife[i].addEventListener('click',()=>{

				document.querySelector('.item_knife_only').classList.toggle('disen');			
				document.querySelector('body').classList.toggle('over_hiden');				
				document.querySelector('.ho').classList.toggle('disen');
				document.querySelector('.menu').classList.toggle('disen')
				// функция для загрузки товара передавать аргументы на основе каждого элемента: 
				// data-id,data-type, место расположения для описания товара, и место для коментайрий 
				getOnlyItemDesc(
					 `${knife[i].attributes['data-type'].value}`
					, `${knife[i].attributes['data-id'].value}`
					,document.querySelector('.only_desc') //место для описания товара
					,document.querySelector('.only_coment_only') //место для коментариё товара
				)
		})
	}
}
//======================================================================>
//======================================================================>
//======================================================================>
//======================================================================>


	
//======================================================================>
//======================================================================>
//======================================================================>
//======================================================================>
let FilterAllBalance=()=>{
	let all=0;
	document.querySelectorAll('.item-summ').forEach(i=>{
		all+=Number(i.innerText || i.textContent)
	}) 
	document.querySelector('.nuber-bal').innerHTML=all
}
//======================================================================>
//======================================================================>
//======================================================================>
//======================================================================>
let fuBigSmall=(event,meth)=>{
			let d=document.querySelector(`.fild-input[data-type='${event.target.attributes['data-type'].value}'][data-id='${event.target.attributes['data-id'].value}']`)
			let v=document.querySelector(`.item-summ[data-type='${event.target.attributes['data-type'].value}'][data-id='${event.target.attributes['data-id'].value}']`)
			let dValue=d.textContent || d.innerText;


		if(meth=='BIG'){
			if(Number(dValue)>=Number(d.attributes[`data-max`].value) ){

				d.textContent=d.attributes[`data-max`].value;
				d.innerText=d.attributes[`data-max`].value;
			}else{
				d.textContent++
			}	

		}else if(meth=='SMALL'){
			if(d.textContent<=0 || d.innerText<=0){
				d.textContent=0;
				d.innerText=0;
			}else{
				d.textContent-- 
			}
		}
		v.textContent = v.attributes['data-price'].value * d.textContent 
		v.innerText = v.attributes['data-price'].value * d.innerText
		FilterAllBalance()
	}

//======================================================================>
//======================================================================>
//======================================================================>
//======================================================================>

let ActionCard=()=>{



	document.querySelectorAll('.but_card_big').forEach(i=>{
		i.addEventListener('click',(event)=>{
			fuBigSmall(event,'BIG')
		})
	})

	document.querySelectorAll('.but_card_small').forEach(i=>{

		i.addEventListener('click',(event)=>{
			fuBigSmall(event,'SMALL')
		})
	})

}

document.querySelector('.buy_card').addEventListener('click',()=>{
	console.log('2')
})