cantonese = require '../lingua-han-cantonese'

exports.cantonese_test =

	success: (test) ->
		test.expect 2
		test.equals (cantonese.get('我') == 'ngo5'), true
		cantonese.setToneOff();
		test.equals (cantonese.get('我') == 'ngo'), true
		test.done()
