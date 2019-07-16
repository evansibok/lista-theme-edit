function clickAccord() {
  $(this).parent().find('a').trigger('click')
}

$('#pay1').on('click', clickAccord)
  
$('#pay2').on('click', clickAccord)

clickAccord()