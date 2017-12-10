#toggleIcon,
#toggleIcon1 {
	background-color: red;
	position: fixed;
	top: 0;
	left: 200px;
	padding: 15px;
	z-index: 1;
	color: white;
	font-size: 2em;
}
#toggleIcon1 {
	left: 0;
}

.move {
	width: -200px;
}/* Toggle button hide sidebar */
var toggleIcon = document.querySelector('#toggleIcon');

toggleIcon.addEventListener('click', function() {

	console.log('toggleIcon is working'); /*for debugging*/

	var nav = document.querySelector('div.sidebar');
	nav.style.left = '-200';

	var main = document.querySelector('div.rightSide');
	main.style.width = '100%'; /*value assumed width when sidebar is hidden*/
	
	var main = document.querySelector('div.rightSide');
	main.style.marginLeft = '0'; /*Margin assumed when you hide sidebar. since you have 20% sidebar, margin should then be 0.*/

	var toggleIcon = document.querySelector('#toggleIcon');
	toggleIcon.setAttribute('hidden', 'hidden');

	var toggleIcon1 = document.querySelector('#toggleIcon1');
	toggleIcon1.removeAttribute('hidden');



});

/*To show sidebar again*/
var toggleIcon1 = document.querySelector('#toggleIcon1');

toggleIcon1.addEventListener('click', function() {

	console.log('toggleIcon1 is working'); /*for debugging*/

	var nav = document.querySelector('div.sidebar');
	nav.style.left = '0';

	var main = document.querySelector('div.rightSide');
	main.style.width = '0%'; /*value assumed width when sidebar is hidden*/
	
	var main = document.querySelector('div.rightSide');
	main.style.marginLeft = '200px'; /*Margin assumed when you hide sidebar. since you have 20% sidebar, margin should then be 0.*/

	var toggleIcon = document.querySelector('#toggleIcon');
	toggleIcon.removeAttribute('hidden');

	var toggleIcon1 = document.querySelector('#toggleIcon1');
	toggleIcon1.setAttribute('hidden', 'hidden');


});