$(function(){
runner(function *(){
	let date1 = yield $.ajax({
		type:'GET',
		url:'index.json',
		dataType: "json",
	});
	for(let i=0;i<3;i++){
		console.log(date1[i].name)
		let c=date1[i].url;
//		console.log(c)
		$('li').eq(i).find('img').attr('src',c);
		$('li').eq(i).find('p').prepend(date1[i].name);
		$('li').eq(i).find('p').find('span').append(date1[i].agg);
		$('li').eq(i).find('h3').html(date1[i].agg)
		he()
	}
})
$('button').click(function(){
	if($(this).html()=='-'){
		let inp=$(this).next().val();
		inp--
		$(this).next().val(inp)
		let c=Number($(this).parent().find('span').html()*inp)
		$(this).parent().find('h3').html(c)
		he()
	}
	if($(this).html()=='+'){
		let inp=$(this).prev().val();
		inp++
		$(this).prev().val(inp)
		let c=Number($(this).parent().find('span').html()*inp)
		$(this).parent().find('h3').html(c)	
		he()
	}
})
function he(){
	let a1=Number($('.a1').html());
	let a2=Number($('.a2').html());
	let a3=Number($('.a3').html());
	let zong=Number(a1+a2+a3)
	
	$('.p1').html('总价:'+zong+'元')
}
})